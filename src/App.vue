<template>
  <v-app>
    <v-main>
      <v-navigation-drawer expand-on-hover rail class="bg-deep-purple">
        <v-list density="compact" nav>
          <router-link to="/">
            <v-list-item prepend-icon="mdi-home" title="Accueil" value="home"></v-list-item></router-link>
          <router-link to="/list">
            <v-list-item prepend-icon="mdi-format-list-bulleted" title="Listes des Astres"></v-list-item>
          </router-link>
          <router-link to="/system">
            <v-list-item prepend-icon="mdi-white-balance-sunny" title="Système Solaire"></v-list-item></router-link>
          <router-link to="/favorites">
            <v-list-item prepend-icon="mdi-star-face" title="Astres Favoris" value="starred"></v-list-item> </router-link>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.app {
  height: 100%;
  background-image: url('./assets/space-background.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.v-list-item-title {
  text-decoration: none;
  color: white;
}

.v-list-item__prepend > .v-icon {
    color: white;
}
</style>

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
