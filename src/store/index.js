import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: ["God of War", "Overwatch", "Rainbow Six Siege", "Ghostbusters", "Just Couse 3", "Borderlands 3", "Terraria", "Minecraft", "League of Legends deluxe"],
    title: "Games"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
