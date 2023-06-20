<template>
  <v-card>
    <v-layout>
      <v-main style="height: 100vh" class="app">
        <div class="pa-2">
          <h2 >Venez decouvrir
            <br> le monde incroyable du système solaire
          </h2>
        </div>
        <div>
          <p>
            Grâce à cette application vous pourrez découvrir les astres qui composent notre magnifique système solaire.<br>
            Decouvrez les planètes, les étoiles, les comètes, les astéroïdes et bien d'autres encore.<br>
            Vous pourrez également créer vos propres listes d'astres favoris.
          </p>
        </div>
        <v-row justify="center" class="btn">
          <v-col cols="12" sm="6" md="3">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-btn block rounded="xl" size="x-large" color="deep-purple" href="/system" :dark="hover">Commencer l'aventure</v-btn>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({

  }),
}
</script>

<style>

p{
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: 'abel', sans-serif !important;
  font-weight: 100;
  margin-top: 25px;
}

h2 {
  color: white;
  text-align: center;
  font-size: 60px;
  font-family: 'abel', sans-serif !important;
  font-weight: 100;
  margin-top: 100px;
}



.btn {
  margin-top: 100px;
}
</style>
