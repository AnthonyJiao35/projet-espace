<template>
  <div class="favorites">
    <h1>Astres favoris</h1>
    <div v-if="favorites.length === 0">
      Aucun astre favori pour le moment.
    </div>
    <div v-else class="card-table">
      <div v-for="(item, index) in favorites" :key="index" class="card">
        <h3>
          <router-link :to="`/${item.id}`">{{ item.name }}</router-link>
        </h3>
        <div>{{ getAstreType(item) }}</div>
        <button @click="removeFromFavorites(item)">
          Retirer des favoris
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Favorites-View",
  computed: {
    ...mapGetters(["getFavorites"]),
    favorites() {
      return this.getFavorites;
    },
  },
  methods: {
    ...mapActions(["removeFromFavorites"]),
    getAstreType(astre) {
      if (astre.bodyType === "Moon") {
        return "Satellite";
      } else if (astre.bodyType === "Asteroid") {
        return "Astéroïde";
      } else if (astre.bodyType === "Planet") {
        return "Planète";
      } else if (astre.bodyType === "Dwarf Planet") {
        return "Planète naine";
      } else if (astre.bodyType === "Comet") {
        return "Comète";
      } else if (astre.bodyType === "Star") {
        return "Étoile";
      }
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
</style>