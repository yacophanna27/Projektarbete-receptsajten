<script>
export default {
  name: "Header",
  components: {

  }
}
</script>

<template>
  <main class="heading">
    <div class="mainText">
     
      <p><img src="../images/fireworks.png" class="fireworks" alt=""> 2026 CELEBRATIONS <img src="../images/fireworks.png" class="fireworks" alt=""></p>
      
    </div>
    <div class="mainText">
      <h1> New Year's Eve Recipes </h1>
    </div>
  </main>
</template>

<style scoped>
.fireworks {
  height: 2.2rem;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30vh;

}

.mainText {
  color: white;
  margin: 1.5rem;
}

.mainText p {
  margin-top: 1rem;
  color: var(--color-gold);
}

@media (min-width: 768px) {
  main {
    height: 30vh;
    margin-bottom: 4rem;
  }

  .mainText h1 {
    font-size: 3rem;
  }

  .mainText p {
    font-size: 1.5rem;
  }

}
</style>