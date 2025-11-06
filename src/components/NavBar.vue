/* Yacob */
<script>
export default {
    
}
</script>

<template>
    <header class="header">
        <a href="#" class="logoname"> Festive Bites</a>
        
        <nav class="navbar">
            <ul class="navmenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Search</a></li>
            </ul>
        </nav>
    </header>
</template>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 1.2rem;
  margin: 1rem;
}

.navmenu {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin-right: 1.5rem;


}

.navmenu li a {
  display: flex;
  color: rgb(255, 250, 250);
  margin-left: 2.5rem;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.logoname {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-gold);
  margin: 1rem;

}
</style>