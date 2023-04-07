<template>
  <v-app>
    <v-main>
      <v-navigation-drawer expand-on-hover rail class="bg-deep-purple">
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Accueil" value="home" href="/"></v-list-item>
          <v-list-item prepend-icon="mdi-format-list-bulleted" title="Listes des Astres" href="/list"></v-list-item>
          <v-list-item prepend-icon="mdi-white-balance-sunny" title="Système Solaire" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star-face" title="Astres Favoris" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',


  data: () => ({
    //
  }),
}
</script>

<style>
.app {
  height: 100%;
  background-image: url('./assets/space-background.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>

