<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Header,
    Footer
  }
}
</script>

<template>
  <NavBar />
  <Header v-if="$route.path === '/'" />
  <router-view />
  <Footer />

</template>

<style scoped></style>
