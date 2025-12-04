<script>
import { getAllRecipes, getRecipeById, getAverageRating } from '../APIutilities/apihelpers.js';
import Ratingstars from '../components/Ratingstars.vue';

export default {
  props: ['id'],
  data() {
    return {
      recipe: null, // The recipe object to display
      newName: '', // Name of the user submitting a comment
      newComment: '', // Content of the user's comment
      newRating: 0,// Rating given by the user
      loading: true,
      error: null,
      averageRating: 0 // Det beräknade genomsnittet från API
    };
  },

  computed: {
    currentAverageRating() {
      // Använd det beräknade genomsnittet eller fallback till receptets rating
      return this.averageRating || (this.recipe ? this.recipe.rating || 0 : 0);
    }
  },
  async mounted() {
    await this.loadRecipe();
  },
  methods: {
    async loadRecipe() {
      try {
        this.loading = true;
        this.error = null;

        const recipeId = this.$route.params.id; // Använd ID som sträng (UUID)

        // Försök först att hämta specifikt recept via ID
        try {
          this.recipe = await getRecipeById(recipeId);
        } catch (error) {
          // Om getRecipeById misslyckas, fallback till att söka i alla recept
          const recipes = await getAllRecipes();
          this.recipe = recipes.find(recipe => recipe.id === recipeId);

          if (!this.recipe) {
            throw new Error(`Recipe with ID ${recipeId} not found`);
          }
        }

        // Hämta och beräkna genomsnittligt betyg från API
        if (this.recipe) {
          this.averageRating = await getAverageRating(this.recipe.id, this.recipe.rating);
        }

      } catch (error) {
        console.error('Error loading recipe:', error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async handleRatingUpdate(updatedRecipe) {
      console.log('Betyg uppdaterat:', updatedRecipe);
      if (updatedRecipe && this.recipe) {
        // Uppdatera receptet
        this.recipe = { ...updatedRecipe };

        // Hämta nytt genomsnitt från API
        this.averageRating = await getAverageRating(this.recipe.id, this.recipe.rating);
        console.log('Nytt genomsnittligt betyg:', this.averageRating);
      }
    }
  },
  components: {
    Ratingstars
  }
}

</script>

<template>
  <div v-if="loading" class="loading-message">
    <p>Laddar recept...</p>
  </div>

  <div v-else-if="error" class="error-message">
    <p>Fel vid laddning av recept: {{ error }}</p>
  </div>

  <div v-else-if="recipe" class="recipe-card-wrapper"> <!-- The background frame -->
    <div class="recipe-page-content"> <!-- Main content area -->
      <div class="card-container"> <!-- Grid container -->


        <div class="recipe-image-box"> <!-- Left part of the page -->
          <img :src="recipe.imageUrl" :alt="recipe.title" class="recipe-image" />
        </div>

        <div class="recipe-content"> <!-- Right part of the page -->
          <div class="title-row"> <!-- Title and rating -->
            <h1 class="recipe-title">{{ recipe.title }}</h1>
          </div>

          <div class="divider"></div> <!-- Horizontal divider -->

          <div class="recipe-details"> <!-- Recipe details with icons -->
            <div class="rating-stars">
              <Ratingstars :key="`header-${recipe.id}-${recipe.ratings?.length || 0}`"
                :initial-rating="currentAverageRating" :read-only="true" />
              <span class="rating-text">({{ currentAverageRating.toFixed(1) }})</span><!--Visar genomsnittligt betyg som nummer i parantes bredvid stjärnorna, toFixed formaterar nr-->
            </div>

            <div class="time-icon">
              <i class="bi bi-clock"></i>
              <span>{{ recipe.timeInMins }}</span>
            </div>

            <div class="ingredient-icon">
              <i class="bi bi-basket"></i>
              <span>{{ recipe.ingredients.length }} ingredienser</span>
            </div>
          </div>

          <div class="ingredients-block"> <!-- Ingredients section -->
            <h2>Ingredientser</h2>
            <ul class="ingredients-list">
              <li v-for="item in recipe.ingredients" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="instructions-block"> <!-- Instructions section -->
        <h2>Instructioner</h2>
        <ol class="instructions-list">
          <li v-for="step in recipe.instructions" :key="step">
            {{ step }}
          </li>
        </ol>
      </div>
    </div>

    <Ratingstars :key="`interactive-${recipe.id}`" :initial-rating="currentAverageRating" :recipe-id="recipe.id"
      @rating-updated="handleRatingUpdate" />
  </div>
</template>


<style scoped>
.loading-message, .error-message {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
}

.error-message {
  color: #d32f2f;
  background-color: #ffebee;
  border: 1px solid #ffcdd2;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 600px;
}

.recipe-card-wrapper {
  border: 9px solid #f9f9fa; /* Thick light border */
  border-radius: 24px;  /* Rounded corners */
  padding: 40px;
  margin: 40px auto;
  max-width: 1400px;
  background-color: #f0e6f7;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Subtle shadow */
}

.recipe-page-content {
  max-width: 1100px; /* Limit content width so text doesn’t become too wide */
  margin: 40px auto;
  padding: 20px;
  color: #d7d4d4;
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.title-row h1 {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
}

.rating-stars {
  display: flex;
  align-items: center;
  gap: 8px;
}

.recipe-details .rating-stars .rating {
  background: none;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  max-width: none;
}

.rating-text {
  font-size: 16px;
  font-style: italic;
}

.card-container {
  display: grid; /* image + text */
  grid-template-columns: 480px 1fr;
  gap: 40px;
  align-items: start;
  margin-bottom: 30px; /* Space below the grid */
}

/* Left side image */
.recipe-image-box {
  width: 600px;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  transform: translateX(-150px);
  margin-top: -90px;
}

.recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Right side content */

.recipe-content {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding-right: 10px;
  padding-left: 20px;
  margin-top: -90px; /* Align with image */
  color: #444;

}

.recipe-title {
  font-family: "Playfair Display", serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 18px;
  color: #444;
  line-height: 1.2;
}

.divider {
  width: 600px;
  height: 1px;
  background-color: #ccc;
  margin: 12px 0 20px 0;
  border-radius: 2px;
}

.recipe-details {
  display: flex; /* Horizontal row */
  align-items: center;
  gap: 40px;
  margin: 20 px 0;
  padding-bottom: 16px;
  font-size: 16px;
  font-style: italic;
}

.recipe-details p {
  margin: 6px 0;
  display: flex;
  align-items: center;
}

.time-icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bi-clock {
  color: #b39108;
}

.bi-person {
  color: #b39108;
}

.bi-basket {
  color: #b39108;
}

.portion-icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ingredient-icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

h2 {
  font-family: "Playfair Display", serif;
  font-size: 28px;
  font-weight: 600;
  margin-top: 40px;
  color: #444;
}

.ingredients-block {
  background: #f5f0f8;
  padding: 14px 20px 18px;
  margin-top: 10px;
  border-radius: 14px;
  box-shadow: 0 2px 6px rgba(156, 156, 156, 0.5);
}

.ingredients-block h2 {
  margin-top: 0;
  margin-bottom: 10px;
}

.ingredients-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ingredients-list li {
  padding: 14px 0;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.ingredients-list li:last-child { /* Remove border from last item */
  border-bottom: none;
}

/* Instructions Section */
.instructions-block {
  margin-left: -140px; /* Align with image */
  margin-top: 20px;
  color: #444;
}

.instructions-list {
  padding-top: 10px;
  padding-left: 15px;
  line-height: 1.8;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
}
</style>
