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
    <img src="https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250503/cf_259/hummersoppa.jpg" alt="Hummersoppa"/>
    <div class="quickview">
        <h1>{{ recipe.title }}</h1>
        <div class="details">
            <p><i class="bi bi-clock"></i> {{ recipe.cooking_time }}</p>
            <p><i class="bi bi-person"></i> {{ recipe.servings }} portioner</p>
            <p><i class="bi bi-basket3"></i> {{ recipe.ingredients.length }} ingredienser</p>
            <p>★★★☆☆</p>
        </div>
        <button>Visa recept</button>
    </div>
  </section>
</template>

<style scoped>

.quickview {
    background-color: #c6a9c326;
    color: #555;
}

.recipe-card {
  width: 300px;
  min-width: 280px;
  display: inline-flex;
  flex-direction: column;
  border-radius: 1.5rem;
  box-shadow: 0 0 6px #ddd;
  padding: 2rem;
  text-align: center;
  margin: 1.5rem;
  background-color: #c6a9c326;
}

/* Responsiv design för mindre skärmar */
@media (max-width: 768px) {
  .recipe-card {
    width: calc(100% - 3rem);
    margin: 1.5rem auto;
  }
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
  font-size:1.3rem;
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
    font-size: 1.25rem;
    font-weight: 500;
    background: #c6a9c383;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;   
    transition: 0.2s ease;
    border: 1px solid #fff;
    }

button:hover {
    background-color: #b589c3;
}

</style>
