import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Pleasure Events",
    Events: []
  },
  mutations: {
    SET_EVENTS(state,payload){
      state.Events = payload
    }
  },
  actions: {
    featureEvents({commit}){
      axios.get('https://agenda-balaguer.herokuapp.com/api/event')
      .then(res => {console.log(res) 
        const payload = res.data.values
        console.log(payload)
        commit("SET_EVENTS", payload)
      })
      .catch(err => {console.log(err)})
    }
  },
  modules: {
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
