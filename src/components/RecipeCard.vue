<script>
import Ratingstars from './Ratingstars.vue';

export default {
  props: ['recipe', 'index'],
  components: {
    Ratingstars
  },
  data() {
    return {
    };
  },
  methods: {
    handleButtonClick() {
    }
  }
}
</script>

<template>
  <section class="recipe-card">
    <div class="image-container">
      <img :src="recipe.image" :alt="recipe.title" />
      <div class="category-badge">
        {{ recipe.category }}
      </div>
    </div>
    <div class="quickview">
      <h1>{{ recipe.title }}</h1>
      <div class="details">
        <p><i class="bi bi-clock"></i> {{ recipe.cooking_time }} minutes</p>
        <p><i class="bi bi-basket3"></i> {{ recipe.ingredients.length }} ingredients</p>
        <Ratingstars :initial-rating="recipe.rating" :read-only="true" />
      </div>

      <router-link :to="`/recipe/${index}`" class="view-button">
        Show Recipe
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.quickview {
  background-color: #f0e6f7;
  color: #666;
}

.recipe-card {
  width: 300px;
  height: 580px;
  min-width: 280px;
  display: inline-flex;
  flex-direction: column;
  border-radius: 1.5rem;
  box-shadow: 0 0 6px;
  padding: 1rem;
  text-align: center;
  margin: 1.5rem;
  background-color: #f5f0f8;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.recipe-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.recipe-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.recipe-card img:hover {
  opacity: 1;
}

.category-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #e8c53a, #c69c6d);
}

.recipe-card .quickview {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 1rem 0;
  min-height: 200px;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
}

.recipe-card .quickview h1 {
  font-size: 1.6rem;
  margin: 0.6rem 0;
  min-height: 3.8rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  padding: 0 0.5rem;
}

.details p {
  font-size: 1.2rem;
  margin: 0.7rem;
}

.bi.bi-clock, .bi.bi-basket3 {
  color:#c69c6d;
}

.view-button {
  font-size: 1rem;
  font-weight: 500;
  background: #e1c7ea;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.2s ease;
  color: #444;
  align-self: center;
  margin-top: auto;
}

.view-button:hover {
  background-color: #d4b5dd;
  border: 1px solid #fff;
}

/* Anpassa Ratingstars för RecipeCard */
.details :deep(.rating) { /*Deep är specifikt för Vue för att komma åt barn-komponenten*/
  background: transparent; /*Tar bort lila lådan*/
  box-shadow: none; /*Tar bort skuggan runt lådan*/
  padding: 0.5rem; /*Lite snyggare avstånd */
  max-width: none; /*Så komponenten tar full bredd*/
  border: none;
}

.details :deep(.readonly-stars .star) {
  font-size: 20px; /* Gör stjärnorna lite större än texten */
}
</style>
