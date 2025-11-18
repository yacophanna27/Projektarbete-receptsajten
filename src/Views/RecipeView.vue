<script>
import { fetchRecipes } from '../fetchRecipes.js';
export default {
  props: [ 'id' ],
  data() {
    return {
        recipe: null
    };
  },mounted() {
    const recipes = fetchRecipes();
    const i = parseInt(this.id);
    this.recipe = recipes[i];
  }
    
}

</script>

<template>
    <div class="recipe-page" v-if="recipe">
        <img :src="recipe.image" :alt="recipe.title"/>
        <h1>{{ recipe.title }}</h1>
            <p><strong>Time:</strong> {{ recipe.cooking_time }}</p>
            <p><strong>Servings:</strong> {{ recipe.servings }}</p>
        <h2>Ingredients</h2>
        <ul>
            <li v-for="item in recipe.ingredients" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<style scoped>

.recipe-page {
  min-height: 100vh;
    color: #d7d4d4;
}

.recipe-page img {
    max-width: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;
}
</style>
