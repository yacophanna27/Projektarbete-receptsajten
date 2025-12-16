<script>
export default {
  name: 'SearchBar',
  emits: ['update:modelValue', 'search'],

  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },

  data() {
    return { searchText: this.modelValue }
  },
  /* Håller koll på ändringar */
  watch: {
    modelValue(newVal) {
      this.searchText = newVal;
    }
  },

  methods: {
    onInput() {
      this.$emit('update:modelValue', this.searchText);
      this.$emit('search', this.searchText);
    },
    /* Rensar search input */
    clear() {
      this.searchText = '';
      this.$emit('update:modelValue', this.searchText);
      this.$emit('search', this.searchText);
    },
    /* Rensar med Escape knappen*/
    onKeydown(e) {
      if (e.key === 'Escape') {
        this.clear();
      }
    }
  }
}
</script>

<template>
  <div class="search-wrapper" role="search">
    <i class="fa fa-search search-icon" aria-hidden="true"></i>

    <input type="text" v-model="searchText" placeholder="Search" @input="onInput" @keydown="onKeydown"
      aria-label="Search recipe" />
    <!--Rensar sök, syns bara när du börjat skriva -->
    <button v-if="searchText" class="clear-btn" type="button" @click="clear" aria-label="Clear search">
      ×
    </button>
  </div>
</template>

<style scoped>
.search-wrapper {
  font-family: 'montserrat', sans-serif;
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: goldenrod;
}

input {
  font-family: 'montserrat', sans-serif;
  font-size: 14px;
  padding: 0.4rem 0.6rem;
  border-radius: 2rem;
  border: 2px solid #582f62;
  background-color: var(--light-purple);
  color: goldenrod;
  width: 22rem;
  height: 2.5rem;
  outline: none;
  padding-left: 2rem;
}

/* Clear button */
.clear-btn {
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: goldenrod;
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
  outline: 2px solid goldenrod;
  outline-offset: 2px;
}

@media (max-width: 600px) {
  .search-wrapper {
    gap: 1rem;
  }

  input {
    width: 11rem;
    height: 2rem;
    font-size: 0.8rem;
  }

  .clear-btn {
    right: 0.6rem;
  }
}

.search-icon {
  position: absolute;
  left: 12px;
  color: goldenrod;
  font-size: 1rem;
}
</style>
