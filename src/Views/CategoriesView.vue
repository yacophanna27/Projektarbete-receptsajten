<script>
import DropDownMenu from '../components/DropDownMenu.vue';
import Header from '../components/Header.vue';

export default {
  name: 'Categories', 
  components: { DropDownMenu, Header},
  props: {
    modelValue: { // den binds till selectedCategory i template i HomeView
      type: String,
      default: 'all'
    },
  },
  data() {
    return {
      categories: [
        { label: 'All', value: 'all' },
        { label: 'Starters', value: 'starters' },
        { label: 'Mains', value: 'mains' },
        { label: 'Desserts', value: 'desserts' },
        { label: 'Drinks', value: 'drinks' }
      ],
      localActive: this.modelValue || 'all', //visar aktiv kategori, kopplat till modelValue
     
    };
  },

  emits: [
      'update:modelValue',
      'category-selected'
    ],

  watch: { //vakar över ändring utanför komponenten tex via 
  // routning 
    modelValue(newVal) {
      this.localActive = newVal;
    }

  },
  methods: {
    selectCategory(value) {
      this.localActive = value;

      // Navigations router till categories
      this.$router.push(`/category/${value}`)
      
      this.$emit('update:modelValue', value); // uppdaterar v-model i HomeView
      this.$emit('category-selected', value); // skickar till HomeView att kategori har valts
    },

    onDropdownSelect(value) { // metod som hanterar DropDownMenu komponenten 
      this.selectCategory(value);
    },
    
    isActive(value) {
      return this.localActive === value; // returnerar aktiv kategori
    }
  },
}
</script>

<template>
  <Header />
  <ul class=" categories">

    <!-- loopar genom genom kategorierna och skapar li för varje kategori, 
    class binder dynamiskt mot css klassen (active) och funktionen som anropas i den används
    för styla endast vald kategori och inte alla -->
    <li v-for="category in categories" :key="category.value" :class="{ active: isActive(category.value) }" 
      @click="selectCategory(category.value)" role="button" tabindex="0">
      {{ category.label }}
    </li>
  </ul>
  <!-- items kommer från dropdownmenu som är en prop och binds mot value. knappen är för att öppna menyn -->
  <DropDownMenu :items="categories" @item-selected="onDropdownSelect" />
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
  transition:  0.3s ease;

 
 
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