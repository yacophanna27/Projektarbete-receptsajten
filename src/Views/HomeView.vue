<script>
import RecipeCard from '../components/RecipeCard.vue';
import Categories from './CategoriesView.vue';
import { getAllRecipes } from '../APIutilities/apihelpers.js';

export default {
  name: 'HomeView',
  components: { RecipeCard, Categories },

 
  props: {
    searchText: {
      type: String,
      default: ''
    },
    // lagt till props för category så routning funkar för category
    category: {
      type: String,
      default: 'all'
    }
  },

  data() {
    return {
      recipes: getAllRecipes(),
      selectedCategory: this.category || 'all'
    };
  },

  computed: {
    filteredRecipes() {
      let result = this.recipes;

    
      if (this.selectedCategory !== 'all') {
        result = result.filter(r =>
          r.category.toLowerCase() === this.selectedCategory.toLowerCase()
        );
      }

      //  Filtrerar per sökning
      if (this.searchText && this.searchText.trim() !== '') {
        const searchLower = this.searchText.toLowerCase();

        result = result.filter(r =>
          r.title.toLowerCase().includes(searchLower)
        );
      }

      return result;
    }
  },

  methods: {
    
    onCategorySelection(value) { //  hanterar barnkomponenten (categoriesView) 
      this.selectedCategory = value; // selectedCategory tilldelades i data ovan ^
    }
  }
};
</script>

<template>

  <div class="home-page-root">

    <div class="category-bar">
      <!-- binds mot categories via modelValue, selectedCategory 
       uppdatderas när category-selected emmiteras i CategoriesView -->
      <Categories
        :modelValue="selectedCategory" 
        @category-selected="onCategorySelection"
      />
    </div>

    <div class="home-page">
      <RecipeCard
        v-for="(recipe, id) in filteredRecipes"
        :key="recipe.id"
        :recipe="recipe"
        :id="recipe.id"
        :searchText="searchText"
      />
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
