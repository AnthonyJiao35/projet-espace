import { createStore } from 'vuex'

export default createStore({
  state: {
    favorites: [],
  },
  mutations: {
    ADD_TO_FAVORITES(state, astre) {
      state.favorites.push(astre);
    },
    REMOVE_FROM_FAVORITES(state, astre) {
      state.favorites = state.favorites.filter((item) => item.id !== astre.id);
    },
  },
  actions: {
    addToFavorites({ commit }, astre) {
      commit("ADD_TO_FAVORITES", astre);
    },
    removeFromFavorites({ commit }, astre) {
      commit("REMOVE_FROM_FAVORITES", astre);
    },
  },
  getters: {
    getFavorites: (state) => state.favorites,
  },
})