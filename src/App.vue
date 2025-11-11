<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Categories from './components/Categories.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Header,
    Categories,
    Footer
  }
}
</script>

<template>
  <NavBar />
  <Header v-if="$route.path === '/'" />
  <Categories />
  <router-view />
  <Footer />

</template>

<style scoped></style>
