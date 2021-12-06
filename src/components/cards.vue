<template>
<v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Event
        </div>
        <v-card-title>{{cardInfo.title}}</v-card-title>
        <v-card-text class="description">{{cardInfo.description}}</v-card-text>
      </v-list-item-content>
      <v-list-item-avatar
        tile
        size="80" 
      >
      <v-img
        height="100%"
        src="http://www.procon.mt.gov.br/documents/4804190/4982624/Viagem/2fbb2952-0598-402d-bddc-8e94dade6c0b?t=1481645408218+&imageThumbnail=3"
        /></v-list-item-avatar>
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

<style scoped>
  .description {
    max-height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>