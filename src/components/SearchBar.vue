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
      categories: ['förrätt', 'varmrätt', 'dessert', 'drinkar']
    }
  },
  methods: {
    search() {
      console.log('Söker efter:', this.searchText, 'i kategori:', this.selectedCategory)
      // Här kan du lägga till kod för att skicka sökningen till en receptlista senare
    }
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

input, select {
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  padding: 0.4rem 0.8rem;
  background-color: var(--color-gold);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  opacity: 0.9;
}
</style>
