/*Lollo*/

<script>
export default {
  name: 'SearchBar',

  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    search() {
      console.log('Söker efter:', this.searchText)
      // recepten
    }
  }
}
</script>
<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchText"
      placeholder="Sök recept..."
      @keyup.enter="search"
    />
    <button @click="search">Sök</button>
  </div>
</template>

<style scoped>
.search-bar {
  font-family: 'montserrat', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color:#b39108;
}

input {
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  border: 2px solid #582f62;
  background-color: var(--light-purple);
  color: #b39108;
}

button {
  font-family: 'montserrat', sans-serif;
  padding: 0.4rem 0.8rem;
  background-color: var(--dark-purple);
  border: none;
  border-radius: 8px;
  color: #b39108;
  cursor: pointer;
  font-weight: bold;
}
@media (max-width: 600px) {
  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }
  button {
    width: 100%;
  }
}

button:hover {
  opacity: 0.9;
}
</style>
