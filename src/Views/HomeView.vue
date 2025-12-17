<script>
import RecipeCard from '../components/RecipeCard.vue';
import Categories from './CategoriesView.vue';
import { getAllRecipes } from '../APIutilities/apihelpers.js';
import FlipCountdown from '@/components/FlipCountdown.vue';

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
      recipes: [],
      selectedCategory: this.category || 'all',
      loading: false,
      error: null
    };
  },

  async created() { // hämtar från apihelpers.js
    this.loading = true;
    try {
      this.recipes = await getAllRecipes();
      console.log('Loaded recipes in HomeView:', this.recipes.length);
    } catch (error) {
      console.error('Error loading recipes:', error);
      this.error = error.toString();
    } finally {
      this.loading = false;
    }
  },

  computed: {
    filteredRecipes() {
      let result = this.recipes;
      // Filtrerar per kategori

      // if-sats för att visa alla kategorier
      if (this.selectedCategory !== 'all') {
        result = result.filter(recipe =>
          recipe.categories && recipe.categories.some(category =>
            category.toLowerCase() === this.selectedCategory.toLowerCase()
          )
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

  <div class="home-page-root" :aria-current="$route.path === '/' || $route.path.startsWith('/category/') ? 'page' : null">

    <div class="category-bar">
      <!-- binds mot categories via modelValue, selectedCategory 
       uppdatderas när category-selected emmiteras i CategoriesView -->
      <Categories :modelValue="selectedCategory" :recipes="recipes" @category-selected="onCategorySelection" />
    </div>

    <div class="home-page">
      <div v-if="loading" class="loading">Loading recipes...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <RecipeCard v-else v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" :id="recipe.id" :searchText="searchText" />
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
.loading, .error {
  width: 100%;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.error {
  color: #d32f2f;
}

.loading {
  color: #666;
}
</style>
