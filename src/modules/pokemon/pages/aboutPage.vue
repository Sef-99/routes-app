<template>
  <div>
    <h1>About Page</h1>
    <h2>{{ name }}</h2>
  </div>
  <button @click="onChangeName">Change Name</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Enrique",
    };
  },

  methods: {
    onChangeName() {
      this.name = "Melissa";
    },
  },

  beforeCreate() {},
  created() {},
};
</script>
