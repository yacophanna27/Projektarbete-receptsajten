<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';

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
