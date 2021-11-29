<template>
  <div>
    <h1>{{title}}</h1>
    <v-row>
      <v-col
        v-for="(data,i) in Cards"
        :key="i"
        cols="12"
        sm="4"
      >
        <cards :cardid="i"  :cardInfo="data"></cards>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cards from '../components/cards.vue'
  
  export default {
    name: 'Home',

    data(){
      return{
        titlev: this.$store.state.title
      }
    },
    computed:{
      Cards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      }
    },

    components: {
        Cards
    }
  }
</script>
