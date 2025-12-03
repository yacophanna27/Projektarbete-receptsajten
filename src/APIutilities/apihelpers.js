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

export async function getRecipeById(id) {
    try {
        const response = await fetch(`https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/recipes/${id}`);
        if (!response.ok) {
            throw new Error(`Recipe with ID ${id} not found`);
        }
        const data = await response.json();
        console.log('Fetched Recipe:', data);
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
    return data; // Returnera den sparade datan
  } catch (error) {
    console.error("Error saving new recipe:", error);
    throw error; // Kasta vidare felet så att anropande kod kan hantera det
  }
}

// Funktion för att uppdatera betyg för ett recept, används i Ratingstars
export async function updateRecipeRating(recipeId, newRating) {
  try {
    const response = await fetch(
      `https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/recipes/${recipeId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: newRating }),
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to update recipe rating`);
    }
    
    const data = await response.json();
    console.log("Recipe rating updated:", data);
    return data;
  } catch (error) {
    console.error("Error updating recipe rating:", error);
    throw error;
  }
}
