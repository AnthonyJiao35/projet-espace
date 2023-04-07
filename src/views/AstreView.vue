<template>
  <div>
    <h1>{{tab.name}}</h1>
    <div class="card-table"></div>
  </div>
</template>

<script>
export default {
  name: "Astre-View",
  components: {},
  data() {
    return {
      tab: [],
      value: "",
    };
  },
  computed: {
    moonType() {
      return this.tab.map((item) => {
        if (item.bodyType === "Moon") {
          return "Satellite";
        } else if (item.bodyType === "Asteroid") {
          return "Astéroïde";
        } else if (item.bodyType === "Planet") {
          return "Planète";
        } else if (item.bodyType === "Dwarf Planet") {
          return "Planète naine";
        } else if (item.bodyType === "Comet") {
          return "Comète";
        } else if (item.bodyType === "Star") {
          return "Étoile";
        }
      });
    },
  },
  mounted() {
    this.getAstre();
  },
  methods: {
    getAstre() {
      const pathSegments = window.location.pathname.split("/");
      const lastSegment = pathSegments[pathSegments.length - 1];
      console.log(lastSegment);
      fetch("https://api.le-systeme-solaire.net/rest/bodies/")
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          const astre = res.bodies.find((item) => item.id === lastSegment);
          this.tab = astre;
        });
    },
  },
};
</script>

<style scoped>
</style>
