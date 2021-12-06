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
            <v-list-item-title>Recommended trips </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Promotions</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>About us</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 
      <v-toolbar-title>Aurora Trips</v-toolbar-title>
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
