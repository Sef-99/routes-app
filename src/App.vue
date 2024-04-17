<script setup>
import { RouterView } from 'vue-router';
import NavBar from './modules/shared/NavBar.vue';
import PokemonLayoutVue from './modules/pokemon/layout/PokemonLayout.vue';
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <NavBar />
  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  text-align: center;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
