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

export function getRecipeById(id) {
    throw new Error('Function not implemented.');
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
  console.log(newRecipe)
  fetch(
    "https://recipes.bocs.se/api/v1/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e/recipes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("New recipe saved:", newRecipe);
    })
    .catch((error) => {
      console.error("Error saving new recipe:", error);
    });
}
