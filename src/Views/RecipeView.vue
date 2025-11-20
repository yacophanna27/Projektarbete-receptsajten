<script>
import { fetchRecipes } from '../fetchRecipes.js';
import Ratingstars from '../components/Ratingstars.vue';

export default {
  props: [ 'id' ],
  data() {
    return {
      recipe: null
    };
  },
  mounted() {
    const recipes = fetchRecipes();
    const i = parseInt(this.id);
    this.recipe = recipes[i];
  },
  methods: {
    handleRatingUpdate(newRating) {
      // Uppdatera receptets betyg direkt i komponenten
      console.log('Nytt betyg för receptet:', newRating);
      if (this.recipe) {
        this.recipe.rating = newRating;
      }
    }
  },
  components: { 
    Ratingstars
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
    <Ratingstars :initial-rating="recipe?.rating" :recipe-id="id" @rating-updated="handleRatingUpdate" />
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
