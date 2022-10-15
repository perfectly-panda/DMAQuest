
<template>
  <Sidebar
    class="sidebar"
  />
  <div class="main">
    <TitleBar />
    <Story v-if="gameStore.tabs.currentTab === 'Story'"/>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import TitleBar from './components/TitleBar.vue'
import Story from './components/story/Story.vue'
import Game from "./models/Game";
import { useGameStore } from './stores/GameStore';

const gameStore = useGameStore()

let game = new Game()
game.initialize()

if(window.location.href.includes('localhost')){
  gameStore.flags.globals.push("devMode")
  gameStore.tabs.options.push("Dev Console")
}

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
