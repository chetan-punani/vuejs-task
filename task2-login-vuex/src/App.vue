<template>
  <section class="card-view">
    <router-view></router-view>
  </section>
</template>



<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.card-view {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}

</style>
