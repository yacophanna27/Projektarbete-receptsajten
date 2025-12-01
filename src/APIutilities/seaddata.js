console.log("seaddata.js loaded");

import { getAllRecipes } from "./apihelpers.js";

const allRecipes = getAllRecipes();
console.log("All Recipes:", allRecipes);