<script>
export default {
  props: [ ],
  data() {
    return {

      // Define any component-specific data properties here
    };
  },
  methods: {
    // Define any component-specific methods here
}
}
</script>

<template>
    <ul class=" categories">
        <li>All</li>
        <li>Starters</li>
        <li>Main Courses</li>
        <li>Desserts</li>
        <li>Drinks</li>

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

}

</style>