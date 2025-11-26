<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
  components: {
    NavBar,
    Header,
    Footer,
  },

  data() {
    return {
      searchText: ''
    }
  },

  methods: {
    updateSearch(value) {
      this.searchText = value;
    }
  }
}
</script>

<template>
  <NavBar @search="updateSearch" />
  <router-view :search-text="searchText" />
 <!-- La till Header i categoriesView istället -->
  <Footer />

</template>

<style scoped></style>
