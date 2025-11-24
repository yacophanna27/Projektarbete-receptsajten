/*Lollo*/

<script>
export default {
  name: 'SearchBar',
  emits: ['search'],

  data() {
    return { searchText: '' }
  },

  methods: {
    search() {
      this.$emit('search', this.searchText)

    }
  }
};
</script>

<template>
  <div class="search-wrapper">
    <i class="fa fa-search search-icon"></i>
    <input type="text" v-model="searchText" placeholder=" Sök " @input="$emit('search', searchText)" />

    <button @click="$emit('search', searchText)"> </button>
  </div>
</template>

<style scoped>
.search-bar {
  font-family: 'montserrat', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b39108;
}

input {
  padding: 0.4rem 0.6rem;
  border-radius: 2rem;
  border: 2px solid #582f62;
  background-color: var(--light-purple);
  color: #b39108;
  width: 22rem;
  height: 2.5rem;
  outline: none;
}
input :focus {
  visibility: visible;
}
button {
  position: absolute;
  right: 2.5rem;
  top: 6.3%;
  transform: translateY(-50%);
  font-family: 'montserrat', sans-serif;
  background-color: var(--dark-purple);
  border: none;
  border-radius: 8px;
  color: #b39108;
  cursor: pointer;
  font-weight: bold;
}

@media (max-width: 600px) {
  .search-bar {
    gap: 1rem;
  }

  input {
    width: 11rem;
    height: 2rem;
    font-size: 0.8rem;
  }

  button {
    position: absolute;
    right: 2rem;
    top: 4.9%;
  }
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-wrapper input{
  padding-left: 2rem;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: #b39108;
  font-size: 1rem;
}
</style>
