
<template>
  <div>
  <Sidebar
    class="sidebar"
  />
  <div class="main">
    <TitleBar />
    <Story v-if="gameStore.tabs.currentTab === 'Story'"/>
    <Store v-if="gameStore.tabs.currentTab === 'Store'"/>
    <Phone v-if="gameStore.tabs.currentTab === 'Phone'" :game="game"/>
    <Village v-if="gameStore.tabs.currentTab === 'Village'"/>

    <DevConsole v-if="gameStore.tabs.currentTab === 'Dev Console'"
      :game="game"/>
  </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import TitleBar from './components/TitleBar.vue'
import Game from "./models/Game";
import { useGameStore } from './stores/GameStore';

import Story from './components/story/Story.vue'
import Store from "./components/store/Store.vue"
import DevConsole from './components/DevConsole.vue'
import Phone from './components/phone/Phone.vue'
import Village from './components/village/Village.vue'

const gameStore = useGameStore()

let game = new Game()
setTimeout(() => {
  game.initialize()
}, 1000)

if(window.location.href.includes('localhost')||
window.location.href.includes('127.0.0.1')){
  gameStore.flags.globals.push("devMode")
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
