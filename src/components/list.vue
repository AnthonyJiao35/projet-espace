<template>
    <v-main class="app">
        <div class="pa-2">
            <h2>Listes des Astres
            </h2>
        </div>
        <div class="card-list">
            <div v-for="(item, index) in tab" :key="index" >
                <CardAstre link="/${item.id}">
                    <template v-slot:nom> {{ item.name }}</template>
                    <template v-slot:type> {{ moonType[index] }}</template>
                    <template v-slot:nombre> {{ tab.semimajorAxis }} </template>
                </CardAstre>
            </div>

        </div>
    </v-main>
</template>
  
<script>
import CardAstre from './card.vue';
import { mapGetters, mapActions } from "vuex";


export default {
    name: "listAstre",
    components: {
        CardAstre
    },
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
}


</script>


<style scoped>
.card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 5vh;
}
</style>

  
  