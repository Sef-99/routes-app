<template>
  <h1>
    Pokemon Page <span>#{{ id }}</span>
  </h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" alt="Pokemon Img" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      pokemon: null,
      pokemonId: null,
    };
  },
  created() {
    this.getPokemons();
  },
  methods: {
    async getPokemons() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((r) => r.json());
        console.log(pokemon);
        this.pokemon = pokemon;
        this.pokemonId = this.id;
      } catch (error) {
        this.$router.push('/');
      }
    },
  },
  watch: {
    id() {
      this.getPokemons();
    },
  },
};
</script>
