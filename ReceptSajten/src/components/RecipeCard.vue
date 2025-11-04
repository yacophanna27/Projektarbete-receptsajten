/*Jennifer*/

<script setup>
</script>

<template>
<section class="recipe-card">
    <img src="https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250503/cf_259/hummersoppa.jpg" alt="Hummersoppa"/>
    <div class="quickview">
        <h1>Hummersoppa</h1>
        <div class="details">
            <p><i class="bi bi-clock"></i> 30 minuter</p>
            <p><i class="bi bi-person"></i> 8 portioner</p>
            <p><i class="bi bi-basket3"></i> 19 ingredienser</p>
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
  width:20%;
  display:inline-flex;
  flex-direction:column;
  border-radius:10px;
  box-shadow: 0 0 6px #ddd;
  padding:15px;
  text-align: center;
  margin: 10px;
  vertical-align: top;
  background-color: #c6a9c326;
}

.recipe-card .quickview{
  aspect-ratio: 1/1;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
}
.recipe-card .quickview h1{
  font-size:1.3rem;
}

.recipe-card img {
  aspect-ratio: 1/1;
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
    background-color: #c6a9c383;
    border: none;
    margin: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    }

button:hover {
    background-color: #b589c3;
}

</style>
