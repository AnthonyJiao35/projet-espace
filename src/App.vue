<template>
  <v-app>
    <v-main>
      <v-navigation-drawer expand-on-hover rail class="bg-deep-purple">
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home"
            title="Accueil"
            value="home"
            href="/"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-format-list-bulleted"
            title="Listes des Astres"
            href="/list"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-white-balance-sunny"
            title="Système Solaire"
            href="/system"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-star-face"
            title="Astres Favoris"
            value="starred"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-main>
  </v-app>

<!-- A merge les deux -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/astres">Astres</router-link> |
    <router-link to="/favorites">Favoris</router-link>
  </nav>
  <router-view :key="$route.fullPath" />


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
