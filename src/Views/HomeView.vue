<script>
import RecipeCard from '../components/RecipeCard.vue';
import Categories from '../components/Categories.vue';
import { fetchRecipes } from '../fetchRecipes.js';

export default {
  name: 'HomeView',
  components: { RecipeCard, Categories },

  props: {
    searchText: { type: String, default: '' }
  },

  data() {
    return {
      recipes: fetchRecipes(),
      selectedCategory: 'all'
    };
  },

  computed: {
    filteredRecipes() {
      let result = this.recipes;

      // Kategorifilter
      if (this.selectedCategory !== 'all') {
        result = result.filter(r => r.category === this.selectedCategory);
      }

      // Sökfilter
      if (this.searchText && this.searchText.trim() !== '') {
        const s = this.searchText.toLowerCase();
        result = result.filter(r =>
          r.title.toLowerCase().includes(s)
        );
      }

      return result;
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