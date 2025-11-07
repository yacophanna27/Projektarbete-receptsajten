<script>
import RecipeCard from './components/RecipeCard.vue';
import { fetchRecipes } from './fetchRecipes.js';
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Categories from './components/Categories.vue';

export default {
  components: {
    RecipeCard,
    NavBar,
    Header,
    Categories
  },
  data() {
    return {
      recipes: fetchRecipes()
    };
  }
}
</script>

<template>
  <NavBar />
  <Header />
  <Categories />
  <RecipeCard v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />

</template>

<style scoped></style>
