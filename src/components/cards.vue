<template>
<v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Game
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{cardInfo}}
        </v-list-item-title>
        <v-list-item-subtitle>In promotion</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Show More
      </v-btn>
      <v-btn>
          {{
              cardid
          }}
      </v-btn>
    </v-card-actions>
  </v-card>
  </template>

<script>
  export default {
      props: ['cardid', 'cardInfo']
  }
</script>