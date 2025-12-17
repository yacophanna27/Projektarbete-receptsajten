<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import FlipCountdown from "./components/FlipCountdown.vue";
import GoToTop from './components/goToTop.vue';

export default {
  components: {
    NavBar,
    Header,
    Footer,
    FlipCountdown,
    GoToTop
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
  <NavBar @search="updateSearch" /> <!--Tar emot sök från navbar-->
  <router-view :search-text="searchText" />  <!--Skickar sök till views-->
  <Footer />
  <GoToTop />
</template>

<style scoped></style>
