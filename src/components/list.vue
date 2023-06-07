<template>
    <v-main class="app">
        <div class="pa-2">
            <h2>Listes des Astres
            </h2>
        </div>
        <div class="card-list">
            <CardAstre link ="">
                <template v-slot:nom> Soleil</template>
                <template v-slot:type> Soleil</template>
                <template v-slot:nombre> Soleil</template>
            </CardAstre>
            <CardAstre link ="">
                <template v-slot:nom> test</template>
                <template v-slot:type> Soleil</template>
                <template v-slot:nombre> Soleil</template>
            </CardAstre>
            <CardAstre link ="">
                <template v-slot:nom> test</template>
                <template v-slot:type> Soleil</template>
                <template v-slot:nombre> Soleil</template>
            </CardAstre>
            <CardAstre link ="">
                <template v-slot:nom> test</template>
                <template v-slot:type> Soleil</template>
                <template v-slot:nombre> Soleil</template>
            </CardAstre>
            <CardAstre link="/maroute">
                <template v-slot:nom> test</template>
                <template v-slot:type> Soleil</template>
                <template v-slot:nombre> Soleil</template>
            </CardAstre>
        </div>
    </v-main>
</template>
  
<script>
import CardAstre from './card.vue';


export default {
    name: "listAstre",
    data: () => ({}),
    components: { CardAstre }
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

  
  