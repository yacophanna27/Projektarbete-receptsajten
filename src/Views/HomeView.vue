<script>
import RecipeCard from '../components/RecipeCard.vue';
import { fetchRecipes } from '../fetchRecipes.js';
import Categories from '../components/Categories.vue';

export default {
  name: 'HomeView',
  components: { RecipeCard, Categories },
  data() {
    return {
      recipes: fetchRecipes(),
      selectedCategory: 'all'
    };
  },
  computed: {
    filteredRecipes() {
      if (this.selectedCategory === 'all') {
        return this.recipes;
      } else {
        return this.recipes.filter(r => r.category === this.selectedCategory);
      };
    }
  },
  methods: {
    onCategorySelection(value) {
      this.selectedCategory = value;
    }
  }
};
</script>

<template>
  <div class="home-page-root">
    <div class="category-bar">
      <Categories @category-selected="onCategorySelection" />
    </div>

    <div class="home-page">
      <RecipeCard v-for="(recipe, index) in filteredRecipes" :key="recipe.id" :recipe="recipe" :index="index" />
    </div>
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