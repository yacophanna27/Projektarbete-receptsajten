/*Jennifer*/

<script>
export default {
  props: [ 'recipe' ],
  data() {
    return {
      // Define any component-specific data properties here
    };
  },
  methods: {
    handleButtonClick() {
      // Logic to handle button click
    }
  }
}
</script>

<template>
<section class="recipe-card">
    <img :src="recipe.image" :alt="recipe.title"/>
    <div class="quickview">
        <h1>{{ recipe.title }}</h1>
        <div class="details">
            <p><i class="bi bi-clock"></i> {{ recipe.cooking_time }}</p>
            <p><i class="bi bi-person"></i> {{ recipe.servings }} portioner</p>
            <p><i class="bi bi-basket3"></i> {{ recipe.ingredients.length }} ingredienser</p>
            <p>{{recipe.rating}}</p>
        </div>
        <button>Visa recept</button>
    </div>
  </section>
</template>

<style scoped>

.quickview {
    background-color: #c9b6c7ff;
    color: #555;
}

.recipe-card {
  width: 300px;
  min-width: 280px;
  display: inline-flex;
  flex-direction: column;
  border-radius: 1.5rem;
  box-shadow: 0 0 6px #ddd;
  padding: 1rem;
  text-align: center;
  margin: 1.5rem;
  background-color: #dbcbd9ff;
}

.recipe-card .quickview{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:20px;
  border-radius:5px;
}
.recipe-card .quickview h1{
  font-size:1.6rem;
  margin: 1rem;
}

.details p {
  font-size: 1.2rem;
  margin: 0.7rem;
}

.recipe-card img {
  width:100%;
  border-radius:5px;
  cursor:pointer;
  opacity:0.9;
  transition: opacity 0.2s;
}
.recipe-card img:hover{
  opacity:1;
}

button {
    font-size: 1rem;
    font-weight: 500;
    background: #c6a9c383;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;   
    transition: 0.2s ease;
    }

button:hover {
    background-color: #b589c3;
    border: 1px solid #fff;
}

</style>
