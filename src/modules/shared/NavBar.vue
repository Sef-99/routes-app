<template>
  <!-- <RouterLink :to="{ name: 'home' }">Go to Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">Go to About</RouterLink>
    <RouterLink :to="{ name: 'pokemonDetails', params: { id: 100 } }"
      >Go to Pokemon</RouterLink
    > -->
  <CustomLink v-for="link in links" :key="link.to" :link="link" />
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  data() {
    return {
      links: [
        { to: 'pokemon-home', name: 'Pokemons' },
        { to: 'pokemon-id', name: 'Por ID', id: 51 },
        { to: 'pokemon-about', name: 'About' },
        { to: 'dragonball-characters', name: 'Characters' },
        { to: 'dragonball-about', name: 'DBZ-About' },

        { to: 'https://google.com', name: 'Google' },
      ],
    };
  },

  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink.vue')),
  },
};
</script>

<style scoped>
div .router-link-exact-active {
  color: greenyellow;
}

div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
</style>
