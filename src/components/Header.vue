<script>
import FlipCountdown from '../components/FlipCountdown.vue';
export default {
  name: "Header",
  components: {FlipCountdown,

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
      <div class="container">
        <FlipCountdown />
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
  color: #f5f0f8;
  margin: 1.5rem;
}

.mainText p {
  margin-top: 1rem;
  color: var(--color-gold);
}
.mainText h1 {
  font-size: 1.8rem;
 
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