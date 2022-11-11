<template>
  <div class="map">
    <div v-for="row in villageStore.grid" class="row">
      <Tile v-for="tile in row" :tile="tile"></Tile>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useVillageStore } from '@/stores/VillageStore'
  import Tile from '@/components/village/Tile.vue'

  const villageStore = useVillageStore()
</script>