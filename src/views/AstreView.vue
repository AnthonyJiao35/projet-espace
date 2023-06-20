<template>
  <div>
    <h1>{{ tab.name }}</h1>
    <div class="card-table"></div>
    <h2>Informations</h2>
    <p>Type d'astre : {{ moonType }}</p>
    <p>Distance du soleil : {{ tab.semimajorAxis }} km</p>
    <p>Rayon : {{ tab.meanRadius }} km</p>
    <p v-if="massValue">
      Masse : {{ massValue }} × 10<sup>{{ massExponent }}</sup> kg
    </p>
    <p v-if="tab.gravity">Gravité : {{ tab.gravity }} m/s²</p>
    <p v-if="planetAround">
      Ce satellite tourne autour de
      <router-link :to="`/${planetAroundId}`">{{ planetAround }}</router-link>
    </p>
    <p v-if="moonsAround">
      Satellite(s) orbitant autour :
      <span v-for="(moon, moonIndex) in moonsAround" :key="moonIndex"
        ><router-link :to="`/${moon.rel.split('/').pop()}`">
          {{ moon.moon }}</router-link
        >
        <span v-if="moonIndex !== moonsAround.length - 1">, </span>
      </span>
    </p>
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
      massValue: "",
      massExponent: "",
      planetAround: "",
      planetAroundId: "",
      moonsAround: "",
    };
  },
  computed: {
    moonType() {
      if (this.tab.bodyType === "Moon") {
        return "Satellite";
      } else if (this.tab.bodyType === "Asteroid") {
        return "Astéroïde";
      } else if (this.tab.bodyType === "Planet") {
        return "Planète";
      } else if (this.tab.bodyType === "Dwarf Planet") {
        return "Planète naine";
      } else if (this.tab.bodyType === "Comet") {
        return "Comète";
      } else if (this.tab.bodyType === "Star") {
        return "Étoile";
      } else {
        return this.tab.bodyType;
      }
    },
  },
  mounted() {
    this.getAstre();
  },
  methods: {
    getAstre() {
      const pathSegments = window.location.pathname.split("/");
      const lastSegment = pathSegments[pathSegments.length - 1];
      fetch("https://api.le-systeme-solaire.net/rest/bodies/" + lastSegment)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          const astre = res;
          this.tab = astre;
          this.massValue = astre.mass?.massValue;
          this.massExponent = astre.mass?.massExponent;
          this.planetAround = astre.aroundPlanet?.planet;
          this.planetAroundId = astre.aroundPlanet?.planet;
          this.moonsAround = astre.moons;
        })
        .then(() => {
          if (this.tab.aroundPlanet) {
            this.getPlanetAround();
          }
        });
    },
    getPlanetAround() {
      fetch(
        "https://api.le-systeme-solaire.net/rest/bodies/" +
          this.tab.aroundPlanet.planet
      )
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          this.planetAround = res.name;
        });
    },
  },
};
</script>

<style scoped>
</style>
