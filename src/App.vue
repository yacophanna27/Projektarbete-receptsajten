<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Categories from './components/Categories.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Header
  }
}
</script>

<template>
  <NavBar />
  <Header v-if="$route.path === '/'" />
  <router-view />

</template>

<style scoped></style>
