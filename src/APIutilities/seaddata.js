console.log("seaddata.js loaded");
import {recipes} from "./recipedata.js"
import { getAllRecipes, saveNewRecipe } from "./apihelpers.js";

const allRecipes = await getAllRecipes();
console.log("All Recipes:", allRecipes);


for (const recipe of recipes) {
    const response = await saveNewRecipe(recipe, allRecipes);
}


