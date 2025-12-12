console.log("seaddata.js loaded");
import {recipes} from "./recipedata.js"
import { getAllRecipes, saveNewRecipe, deleteRecipe } from "./apihelpers.js";

const allRecipes = await getAllRecipes();
console.log("All Recipes:", allRecipes);

// Ta bort alla recept
// for (const recipe of allRecipes) {
//     try {
//         await deleteRecipe(recipe.id);
//         console.log(`Deleted recipe: ${recipe.title}`);
//     } catch (error) {
//         console.error(`Failed to delete recipe ${recipe.id}:`, error);
//     }
// }

// Lägg till nya recept
for (const recipe of recipes) {
    const response = await saveNewRecipe(recipe, allRecipes);
}


