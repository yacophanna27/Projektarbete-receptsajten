const BASE_URL = 'https://recipes.bocs.se/api/v1/';
const TEAM_ID = 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e';
export async function getAllRecipes() {
    try {
        const response = await fetch(`${BASE_URL}${TEAM_ID}/recipes`);
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
        const response = await fetch(`${BASE_URL}${TEAM_ID}/categories`);
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
        const response = await fetch(`${BASE_URL}${TEAM_ID}/recipes/${id}`);
        if (!response.ok) {
            throw new Error(`Recipe with ID ${id} not found`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        throw error;
    }
}

export async function deleteRecipe(id) {
    try {
        const response = await fetch(`${BASE_URL}${TEAM_ID}/recipes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            throw new Error(`Recipe with ID ${id} not found`);
        }
        return true;
    } catch (error) {
        console.error('Error deleting recipe:', error);
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
      `${BASE_URL}${TEAM_ID}/recipes`,
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
      `${BASE_URL}${TEAM_ID}/recipes/${recipeId}/ratings`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        return [];
      }
      throw new Error(`Failed to fetch ratings: ${response.status}`);
    }
    
    const ratings = await response.json();
    return ratings;
  } catch (error) {
    console.error("Error fetching recipe ratings:", error);
    return []; 
  }
}

// Lägga till nytt betyg till recept via API
export async function addRecipeRating(recipeId, newRating) {
  try {
    console.log(`Adding rating ${newRating} to recipe ${recipeId}`);
    
    // 1. POST det nya betyget till ratings endpoint
    const postResponse = await fetch(
      `${BASE_URL}${TEAM_ID}/recipes/${recipeId}/ratings`,
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
      `${BASE_URL}${TEAM_ID}/recipes/${recipeId}`,
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
export async function getComments(id) {
    try {
        const response = await fetch(`${BASE_URL}${TEAM_ID}/recipes/${id}/comments`);
        if (!response.ok) {
            throw new Error(`Comment with ID ${id} not found`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Comments:', error);
        return []; 
    }
}

export async function postComment(id, commentData) {
    try {
        const response = await fetch(`${BASE_URL}${TEAM_ID}/recipes/${id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(commentData),
        });

        if (!response.ok) {
            throw new Error(`Failed to post comment: ${response.status}`);
        }

        const data = await response.json();
        console.log("New comment saved:", data);
        return data;
    } catch (error) {
        console.error('Error posting comment:', error);
        throw error; 
    }
}