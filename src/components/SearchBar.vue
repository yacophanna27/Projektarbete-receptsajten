<script>
export default {
  name: 'SearchBar',
  emits: ['search'],

  props: {
    initialSearchText: {
      type: String,
      default: ''
    }
  },

  data() {
    return { searchText: this.initialSearchText }
  },

  methods: {
    search() {
      this.$emit('search', this.searchText)
    }
    ,
    clear() {
      this.searchText = '';
      // notify parent that search text was cleared
      this.$emit('search', this.searchText);
      this.$emit('update:modelValue', this.searchText);
    },
    onKeydown(e) {
      if (e.key === 'Escape') {
        this.clear();
      }
    }
  }

}
</script>

<template>
  <div class="search-wrapper">
    <i class="fa fa-search search-icon"></i>
    <input
      type="text"
      v-model="searchText"
      placeholder=" Sök recept..."
      @input="$emit('search', searchText)"
      @keydown="onKeydown"
      aria-label="Sök recept"
    />

    <button
      v-if="searchText"
      class="clear-btn"
      type="button"
      @click="clear"
      aria-label="Rensa sökning"
    >
      ×
    </button>
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

/* removed invalid selector 'input :focus' */

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

.clear-btn {
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #b39108;
  font-size: 1.1rem;
  width: 1.9rem;
  height: 1.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.clear-btn:focus,
.clear-btn:focus-visible {
  outline: 2px solid #b39108;
  outline-offset: 2px;
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

.search-wrapper input {
  padding-left: 2rem;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: #b39108;
  font-size: 1rem;
}
</style>
