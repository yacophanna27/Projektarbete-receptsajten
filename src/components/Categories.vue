<script>
export default {
  name: 'Categories',
  props: {
    modelValue: {
      type: String,
      default: 'all'
    }
  },
  data() {
    return {
      categories: [
        { label: 'All', value: 'all' },
        { label: 'Starters', value: 'starter' },
        { label: 'Main Courses', value: 'main course' },
        { label: 'Desserts', value: 'dessert' },
        { label: 'Drinks', value: 'drink' }
      ],
      localActive: this.modelValue || 'all'
    };
  },
  watch: {
    modelValue(newVal) {
      this.localActive = newVal;
    }
  },
  methods: {
    selectCategory(value) {
      this.localActive = value;
      this.$emit('update:modelValue', value);
      this.$emit('category-selected', value);
    },
    isActive(value) {
      return this.localActive === value;
    }
  },
}
</script>

<template>
  <ul class=" categories">
    <li v-for="category in categories" :key="category.value" :class="{ active: isActive(category.value) }"
      @click="selectCategory(category.value)" role="button" tabindex="0">
      {{ category.label }}
    </li>
  </ul>
</template>


<style scoped>
.categories {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 3rem auto;
  background-color: rgba(189, 155, 234, 0.3);
  padding: 0.35rem 0.6rem;
  border-radius: 2rem;
  gap: 1rem;
  width: fit-content;
  max-width: 95%;
}

.categories li {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: none;
  padding: 0.4rem 1.6rem;
  margin-bottom: 0;
  margin-inline: 0;
  border-radius: 1.6rem;
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  cursor: pointer;
  width:fit-content;

 
 
}

.categories li.active {
  background-color: #c69c6d;
  color: #3C096C;
  font-weight: 500;
  padding: 0.65rem 1.6rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}
@media (min-width: 700px) {
  .categories {
    flex-direction: row ;
    gap: 1rem;
    padding: 0.5rem 1.6rem;
    margin-inline:auto;
    justify-content: center;
    border-radius: 3rem;
   
}

  .categories li {
    font-size: 1.3rem;
    padding: 0.7rem 1.6rem;
    text-align: center;
    font-weight: 550;
   
  }

  .categories li.active {
    padding: 0.75rem 1.8rem;
    margin-right: auto;
    font-weight: 550;
  }

  .categories li:hover {
    color:#280548
  }
}
@media (min-width: 1024px){
    .categories {
        gap: 2.8rem;
        width: fit-content;
    }
}

</style>




/* <!-- 
export default {
    name: 'Categories',
    data() {
        return {
            categories: [
                { label: 'All', value: 'all' },
                { label: 'Starters', value: 'starter' },
                { label: 'Main Courses', value: 'main course' },
                { label: 'Desserts', value: 'dessert' },
                { label: 'Drinks', value: 'drink' }
            ]
        };
    },
    methods: {
        selectCategory(value) {
            this.$emit('category-selected', value);
        }
    },
}

</script>

<template>
    <ul class=" categories">
        <li v-for="category in categories" :key="category.value" @click="selectCategory(category.value)">
            {{ category.label }}
        </li>

    </ul>
</template>


<style scoped>
.categories {
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-top: 4rem;

}

.categories li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(133, 99, 178, 0.5);
    backdrop-filter: blur(20px);
    padding: 1.2rem 2.5rem;
    margin-bottom: 1.5rem;
    margin-inline: 1rem;
    border-radius: 2rem;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    cursor: pointer;

}
</style> --> */