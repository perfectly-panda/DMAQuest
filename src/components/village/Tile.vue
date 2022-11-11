<template>
  <div class="tile">
    <div v-if="tile" @click="selectTile">
      {{tile.name}}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { VillageBuilding } from '@/models/VillageBuilding';
  import { useVillageStore } from '@/stores/VillageStore';

  const villageStore = useVillageStore();

   const props = defineProps({
    tile: {
      type: VillageBuilding, 
      required: false
    },
  })

  function selectTile() {
    villageStore.selectedBuilding = props.tile
  }
</script>

<style scoped>

.tile {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>