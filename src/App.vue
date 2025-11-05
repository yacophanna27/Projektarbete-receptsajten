<script>
import RecipeCard from './components/RecipeCard.vue';
import { fetchRecipes } from './fetchRecipes.js';

export default {
  components: {
    RecipeCard
  },
  data() {
    return {
      recipes: fetchRecipes()
    };
  }
}
</script>

<template>
  <RecipeCard v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />
</template>

<style scoped></style>
