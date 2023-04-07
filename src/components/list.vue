<template>
    <v-main class="app">
        <div class="pa-2">
            <h2>Listes des Astres
            </h2>
        </div>
        <v-card class="mx-auto" max-width="250">
            <v-card-title style="text-align: center;">Nom de L'Astre</v-card-title>
            <v-card-text>
                <div>Type d'astre: </div>
                <div>Nombre de satelite:</div>
            </v-card-text>
            <v-card-actions>
                <v-btn color="bg-deep-purple">
                    Explorer
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
            </v-card-actions>
        </v-card>
    </v-main>
</template>
  
<script>

export default {
    name: 'listAstre',

    data: () => ({

    }),
}
</script>
  
<style scoped>

.pa-2{
    margin-bottom: 150px;
}

</style>
  