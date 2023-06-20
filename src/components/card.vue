<template>
    <v-card class="card mx-auto" max-width="350">
        <v-card-title style="text-align: center;"><slot name="nom"></slot></v-card-title>
        <v-card-text>
            <div>Type d'astre: <slot name="type"></slot></div>
            <div>Nombre de satelite: <slot name="nombre"></slot></div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="bg-deep-purple" :href="link">
                Explorer
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn class="heart" size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
        </v-card-actions>
    </v-card>
</template>



<script>

export default {
    name: "CardAstre",
    props: {
        link: String
    }
};


</script>
  



<style scoped>

.heart:active, .heart:focus{
    color: blueviolet !important ;
}
.heart:not(active), .heart:not(focus){
    color: rgb(135, 135, 135) !important ;
}
.pa-2{
    margin-bottom: 150px;
}

.card {
  margin-bottom: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
}

</style>