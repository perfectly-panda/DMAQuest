
<template>
  <Sidebar
    class="sidebar"
  />
  <div class="main">
    <TitleBar />
    <Story v-if="gameStore.tabs.currentTab === 'Story'"/>

    <div class="currentTab">{{gameStore.tabs.currentTab}}</div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import TitleBar from './components/TitleBar.vue'
import Story from './components/Story.vue'
import Game from "./models/Game";
import { useGameStore } from './stores/GameStore';
import { useResourceStore } from './stores/ResourceStore';

const gameStore = useGameStore()
const resourceStore = useResourceStore()

let game = new Game(resourceStore, gameStore)
game.start()

window.addEventListener('focus', () => {
  console.log('focus')
 // game.stop()
 // game.start()
})

</script>

<style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #eee;
  }
  .main {
    margin-left: 200px;
  }
</style>
