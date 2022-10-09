<template>
 <div class="title">DMA Quest - {{gameStore.tabs.currentTab}}</div>
</template>

<script setup lang="ts">import { useGameStore } from '@/stores/GameStore';


const gameStore = useGameStore()
</script>

<style>
.title {
  display: flex;
  text-align: center;
  margin: auto;
  font-size: 2em;
  font-weight: bold;
}
</style>
