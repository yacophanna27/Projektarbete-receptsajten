console.log("seaddata.js loaded");

import { getAllRecipes, saveNewRecipe } from "./apihelpers.js";

const allRecipes = await getAllRecipes();
console.log("All Recipes:", allRecipes);


const recipe = {
    
};
const response = await saveNewRecipe(recipe, allRecipes);


