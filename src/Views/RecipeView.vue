<script>
import { getAllRecipes, getRecipeById, getAverageRating } from '../APIutilities/apihelpers.js';
import Ratingstars from '../components/Ratingstars.vue';
import ListComponent from '../components/ListComponent.vue';

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
      averageRating: 0, // Det beräknade genomsnittet från API
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

        // checkbox status
        if (this.recipe.ingredients) {
          this.recipe.ingredients = this.recipe.ingredients.map(ing => ({ ...ing, checked: false }));
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
    Ratingstars,
    ListComponent
  }
}

</script>

<template>
  <div v-if="loading" class="loading-message">
    <p>Loading recipes...</p>
  </div>

  <div v-else-if="error" class="error-message">
    <p>Error loading recipes: {{ error }}</p>
  </div>

  <div v-else-if="recipe" class="recipe-card-wrapper"> <!-- The background frame -->
    <div class="recipe-page-content"> <!-- Main content area -->
      <div class="card-container"> <!-- Grid container -->


        <div class="recipe-image-box"> <!-- Left part of the page -->
          <img :src="recipe.imageUrl" :alt="recipe.title" class="recipe-image" />
    
      <ListComponent
  class="instructions-desktop"
  title="Instructions"
  :items="recipe.instructions"
  variant="instructions"
  listTag="div"
>
  <template #item="{ item, index }">
    <div class="instruction-item">
      <div class="instruction-number">{{ index + 1 }}</div>
      <p class="instruction-text">{{ item }}</p>
    </div>
  </template>
</ListComponent>
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
              <span>{{ recipe.timeInMins }} minutes</span>
            </div>

        <div class="ingredient-icon">
          <i class="bi bi-basket"></i>
          <span>{{ recipe.ingredients.length }} ingredients</span> 
        </div>
      </div>

      <div class="description">
        <p>{{ recipe.description }}</p>
      </div> 
        
          <ListComponent
  title="Ingredients"
  :items="recipe.ingredients"
  variant="ingredients"
>
  <template #item="{ item, index }">
    <div class="instruction-item"
    role="button"
    tabindex="0"
    @click="item.checked = !item.checked"
    @keydown.enter="item.checked = !item.checked"
  >
    

      <label class="checkbox-wrapper">
        <input type="checkbox" v-model="item.checked" />
        <span class="custom-checkbox"></span>
      </label>

      <p class="instruction-text" :class="{ done: item.checked }">
        {{ item.amount }} {{ item.unit }} {{ item.name }}
      </p>

    </div>
  </template>
</ListComponent>

<ListComponent
  class="instructions-mobile"
  title="Instructions"
  :items="recipe.instructions"
  variant="instructions"
  listTag="div"
>
  <template #item="{ item, index }">
    <div class="instruction-item">
      <div class="instruction-number">{{ index + 1 }}</div>
      <p class="instruction-text">{{ item }}</p>
    </div>
  </template>
</ListComponent>
  </div>
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
  max-width: 100%; /* Limit content width so text doesn’t become too wide */ 
  margin: 0 auto;
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
  grid-template-columns: 600px 1fr;
  gap: 40px;
  align-items: start;
  margin-bottom: 30px;
}

/* Left side image */
.recipe-image-box {
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.recipe-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 12px;
}

/* Right side content */

.recipe-content {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding-right: 10px;
  padding-left: 20px;
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

.time-icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bi-clock {
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

.description {
  margin: 20px 0;
  margin-bottom: 40px;
  font-weight: lighter;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

h2 {
  font-family: "Playfair Display", serif;
  font-size: 28px;
  font-weight: 600;
  margin-top: 40px;
  color: #444;
}

.instructions-desktop {
  display: block;
}

.instructions-mobile {
  display: none;
}

@media (max-width: 768px) {

  .recipe-card-wrapper {
    padding: 20px;
    border-width: 6px;
    margin: 20px auto;
    width: 95%;
  }

  .card-container {
    grid-template-columns: 1fr; 
    gap: 20px;
  }

  .recipe-image-box {
    width: 100%;
    gap: 20px;
  }

  .recipe-image {
    width: 100%;
    height: auto;
    max-height: 350px;
    object-fit: cover;
  }

  /* To make more readable */
  .recipe-content {
    padding: 0; 
  }

  .title-row h1 {
    font-size: 26px;
  }

  .divider {
    width: 100%;
  }

  .recipe-details {
    flex-wrap: wrap;
    gap: 16px;
    font-size: 14px;
  }

  .description {
    font-size: 16px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 22px;
    margin-top: 20px;
  }

  .instruction-item {
    padding: 14px 0;
  }

  .instruction-number {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }

  .custom-checkbox {
    width: 24px;
    height: 24px;
  }

  .custom-checkbox::after {
    width: 18px;
  }
}

@media (max-width: 1024px) {

  .card-container {
    grid-template-columns: 1fr; 
    gap: 30px;
  }

  .recipe-image-box {
    width: 100%;
  }

  .recipe-image {
    height: 450px;
  }

  /* Npt to show mobile version on the dekstop */
.instructions-mobile {
  display: block;
}

@media (max-width: 768px) {

  /* To hide dekstop version */
  .instructions-desktop {
    display: none !important;
  }

  /* To show mobile version */
  .instructions-mobile {
    display: block;
  }
}
}
</style>
