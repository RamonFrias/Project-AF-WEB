<template>
  <v-app id="inspire">
    <v-main>
      <router-view/>
    </v-main>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Games do momento</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Em promoção</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Contato</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Lore</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 
      <v-toolbar-title>Aurora Games</v-toolbar-title>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
      drawer: false,
      group: null,
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
