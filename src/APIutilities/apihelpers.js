export function getAllRecipes() {
    fetch('https://recipes.bocs.se/api/v1/{b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e}/recipes')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched Recipes:', data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
            return [];
        });
}

getAllRecipes();

export function getRecipeById(id) {
    throw new Error('Function not implemented.');
}

export function recipeExists(title, recipes) {
    throw new Error('Function not implemented.');
}

export function saveNewRecipe(newRecipe, recipes) {
    throw new Error('Function not implemented.');
}