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
    };
  },

  methods: {
    updateSearch(value) {
      this.searchText = value;
    }
  }
};
</script>

<template>
  <NavBar @search="updateSearch"/>
  <Header v-if="$route.path === '/'" />
  <router-view :search-text="searchText"/>
  <Footer />

</template>

<style scoped></style>
