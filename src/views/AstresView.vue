<template>
  <div class="about">
    <h1>Astres</h1>
    <label>
      <input
        type="checkbox"
        v-model="filterPlanet"
        @change="handleCheckboxChange"
      />
      Filtre par planète
    </label>
    <label>
      <input
        type="checkbox"
        v-model="filterMoonAround"
        @change="handleCheckboxChange"
      />
      Filtre sur les astres qui ont des lunes
    </label>
    <div class="card-table">
      <div v-for="(item, index) in tab" :key="index" class="card">
        <h3>
          <router-link :to="`/${item.id}`">{{ item.name }}</router-link>
        </h3>
        <div>{{ moonType[index] }}</div>
        <button
          :class="{ favorite: isFavorite(item) }"
          @click="toggleFavorite(item)"
        >
          {{ isFavorite(item) ? "Retirer des favoris" : "Ajouter aux favoris" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Astres-View",
  data() {
    return {
      tab: [],
      tabOriginal: [],
      value: "",
      filterPlanet: false,
      filterMoonAround: false,
    };
  },
  computed: {
    ...mapGetters(["getFavorites"]),
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
    ...mapActions(["addToFavorites", "removeFromFavorites"]),
    ...mapGetters(["getFavorites"]),
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
    handleCheckboxChange() {
      if (this.filterPlanet && this.filterMoonAround) {
        this.filterByPlanet(this.tab);
        this.filterByMoonAround(this.tab);
      } else if (this.filterPlanet && !this.filterMoonAround) {
        this.filterByPlanet(this.tabOriginal);
      } else if (this.filterMoonAround && !this.filterPlanet) {
        this.filterByMoonAround(this.tabOriginal);
      } else {
        this.noFilter();
      }
    },
    filterByPlanet(tableau) {
      this.tab = tableau.filter((item) => item.isPlanet === true);
    },
    filterByMoonAround(tableau) {
      this.tab = tableau.filter((item) => item.moons != null);
    },
    noFilter() {
      this.tab = this.tabOriginal;
    },
    toggleFavorite(item) {
      if (this.isFavorite(item)) {
        this.removeFromFavorites(item);
      } else {
        this.addToFavorites(item);
      }
    },
    isFavorite(item) {
      return this.getFavorites.some((favorite) => favorite.id === item.id);
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
  width: 150px;
  height: 100px;
}
.favorite {
  background-color: yellow;
}
</style>