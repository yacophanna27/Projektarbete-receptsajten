/<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchText"
      placeholder="Sök recept..."
    />

    <select v-model="selectedCategory">
      <option value="">Alla kategorier</option>
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>

    <button @click="search">Sök</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchText: '',
      selectedCategory: '',
      categories: ['Förrätt', 'Varmrätt', 'Dessert', 'Drinkar']
    }
  },
  methods: {
    search() {
      console.log('Söker efter:', this.searchText, 'i kategori:', this.selectedCategory)
      
    }
  }
}
</script>

<style scoped>
.search-bar {
  font-family: 'montserrat', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: gold
}

input, select {
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  border: 2px solid #582f62;
  background-color: var(--light-purple);
  color: gold;
}

button {
  font-family: 'montserrat', sans-serif;
  padding: 0.4rem 0.8rem;
  background-color: var(--dark-purple);
  border: none;
  border-radius: 8px;
  color: gold;
  cursor: pointer;
  font-weight: bold;
  font-family: 'montserrat', sans-serif;
}


button:hover {
  opacity: 0.9;
}
</style>
