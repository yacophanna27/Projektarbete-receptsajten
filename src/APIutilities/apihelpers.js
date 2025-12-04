export async function getAllRecipes() {
    try {
        const response = await fetch('https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/recipes');
        const data = await response.json();
        console.log('Fetched Recipes:', data);
        return data;
    } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}

export async function getAllCategories() {
    try {
        const response = await fetch('https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/categories');
        const data = await response.json();
        console.log('Fetched categories:', data);
        return data;
    } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getRecipeById(id) {
    try {
        const response = await fetch(`https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/recipes/${id}`);
        if (!response.ok) {
            throw new Error(`Recipe with ID ${id} not found`);
        }
        const data = await response.json();
        // console.log('Fetched Recipe:', data); //känns onödig i konsollen?
        return data;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        throw error;
    }
}

export function recipeExists(title, recipes) {
    const recipe = recipes.find(recipe => recipe.title === title);
    const exists = recipe !== undefined;
    return exists;
}

export async function saveNewRecipe(newRecipe, existingRecipesInApi) {
  const exists = recipeExists(newRecipe.title, existingRecipesInApi);
  if (exists) {
    console.log(`Recipe with title "${newRecipe.title}" already exists.`);
    return false;
  }
  
  console.log(newRecipe);
  
  try {
    const response = await fetch(
      "https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/recipes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      }
    );
    
    if (!response.ok) {
      throw new Error(`Network response was not ok`);
    }
    
    const data = await response.json();
    console.log("New recipe saved:", data);
    return data;
  } catch (error) {
    console.error("Error saving new recipe:", error);
    throw error;
  }
}

// Hämta alla ratings för ett recept från API
export async function getRecipeRatings(recipeId) {
  try {
    const response = await fetch(
      `https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/recipes/${recipeId}/ratings`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        return []; // Inga ratings än
      }
      throw new Error(`Failed to fetch ratings: ${response.status}`);
    }
    
    const ratings = await response.json();
    return ratings;
  } catch (error) {
    console.error("Error fetching recipe ratings:", error);
    return []; // Returnera tom array vid fel
  }
}

// Lägga till nytt betyg till recept via API
export async function addRecipeRating(recipeId, newRating) {
  try {
    console.log(`Adding rating ${newRating} to recipe ${recipeId}`);
    
    // 1. POST det nya betyget till ratings endpoint
    const postResponse = await fetch(
      `https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/recipes/${recipeId}/ratings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRating), // Bara heltal 1-5
      }
    );
    
    if (!postResponse.ok) {
      throw new Error(`Failed to post rating: ${postResponse.status}`);
    }
    
    // 2. Beräkna och uppdatera genomsnitt med hjälp av getAverageRating
    const newAverage = await getAverageRating(recipeId, 0);
    console.log(`New calculated average: ${newAverage}`);
    
    // 3. PATCH genomsnittet till receptets rating
    const patchResponse = await fetch(
      `https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/recipes/${recipeId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: newAverage }),
      }
    );
    
    if (!patchResponse.ok) {
      throw new Error(`Failed to update recipe rating: ${patchResponse.status}`);
    }
    
    // 4. Hämta uppdaterat recept
    const updatedRecipe = await getRecipeById(recipeId);
    console.log(`Rating ${newRating} added successfully. New average: ${newAverage}`);
    
    return updatedRecipe;
  } catch (error) {
    console.error("Error updating recipe rating:", error);
    throw error;
  }
}

// Beräkna genomsnittligt betyg från API
export async function getAverageRating(recipeId, fallbackRating = null) {
  try {
    // Hämta alla individuella ratings från API
    const allRatings = await getRecipeRatings(recipeId);
    
    if (allRatings.length > 0) {
      const sum = allRatings.reduce((acc, rating) => acc + rating, 0);
      const average = Math.round((sum / allRatings.length) * 10) / 10;
      return average;
    }
    
    // Fallback till receptets befintliga rating field om inga ratings finns
    return fallbackRating || 0;
  } catch (error) {
    console.error("Error calculating average rating:", error);
    return fallbackRating || 0;
  }
}
