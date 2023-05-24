<template>
  <v-main class="background">
    <div class="pa-1">
      <h2>Le Système Solaire
      </h2>
    </div>
    <v-item-group>
      <v-container class="systeme-container" justify="center" align="center">
        <systeme />
      </v-container>
    </v-item-group>
    <v-item-group class="groupe-bouton" selected-class="bg-primary">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="auto">
            <boutonPlanete href="/soleil">Soleil</boutonPlanete>
          </v-col>
          <v-col cols="auto">
            <boutonPlanete href="/mercure">Mercure</boutonPlanete>
          </v-col>
          <v-col cols="auto">
            <boutonPlanete href="/venus">Venus</boutonPlanete>
          </v-col>
          <v-col cols="auto">
            <boutonPlanete href="/terre">Terre</boutonPlanete>
          </v-col>
          <v-col cols="auto">
            <boutonPlanete href="/mars">Mars</boutonPlanete>
          </v-col>
          <v-col cols="auto">
            <boutonPlanete href="/jupiter">Jupiter</boutonPlanete>
          </v-col>
          <v-col cols="auto">
            <boutonPlanete href="/saturne">Saturne</boutonPlanete>
          </v-col>
          <v-col cols="auto">
            <boutonPlanete href="/uranus">Uranus</boutonPlanete>
          </v-col>
          <v-col cols="auto">
            <boutonPlanete href="/neptune">Neptune</boutonPlanete>
          </v-col>
          <v-col cols="auto">
            <boutonPlanete href="/pluton">Pluton</boutonPlanete>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-main>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import boutonPlanete from '../components/bouton-planete.vue';
import systeme from '../components/solar-systeme.vue';

export default defineComponent({
  name: 'systemeSolaire',

  components: {
    boutonPlanete,
    systeme,
  },
});
</script>

<style scoped>
@media (min-width: 1280px) {
  .systeme-container {
    max-width: 1000px;
  }
}

.background {
  height: 100%;
  background-image: url('../assets/space.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

h2{ 
  color: white;
  text-align: center;
  font-size: 60px;
  font-family: 'abel', sans-serif !important;
  font-weight: 100;
  margin-top: 40px;
}

.groupe-bouton {
  padding-bottom: 5vh;
}
</style>
