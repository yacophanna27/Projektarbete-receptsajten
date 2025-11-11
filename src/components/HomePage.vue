<script>
import RecipeCard from './RecipeCard.vue';
import { fetchRecipes } from '../fetchRecipes.js';

export default {
  name: 'HomePage',
  components: { RecipeCard },
  data() {
    return {
      recipes: fetchRecipes()
    };
  }
}
</script>

<template>
    <div class="home-page">
      <RecipeCard 
        v-for="(recipe, index) in recipes" 
        :key="index" 
        :recipe="recipe"
        :index='index'
      />
    </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  margin-top: 2rem;
}
</style>