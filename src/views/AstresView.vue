<template>
  <div class="about">
    <h1>Astres</h1>
    <div class="card-table">
      <div v-for="(item, index) in tab" :key="index" class="card">
        <h3><router-link :to="`/${item.id}`">{{ item.name }}</router-link></h3>
        <div>{{ moonType[index] }}</div>
        <!-- <td>
              <span v-for="(moon, moonIndex) in item.moons" :key="moonIndex">
                {{ moon.moon }}
                <span v-if="moonIndex !== item.moons.length - 1">, </span>
              </span>
            </td> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Astres-View",
  components: {},
  data() {
    return {
      tab: [],
      tabOriginal: [],
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
    this.search();
  },
  methods: {
    search() {
      fetch("https://api.le-systeme-solaire.net/rest/bodies/")
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          this.tab = res.bodies;
          this.tabOriginal = res.bodies;
        });
    },
  },
};
</script>

<style scoped>
.card-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  border: 1px solid black;
  border-radius: 10%;
  margin: 10px;
  padding: 20px;
  width: 100px;
  height: 100px;
}
</style>
