<template>
  <nav>
    <div class="tab" v-for="tab in gameStore.tabs.options" :key="tab" @click="selectTab(tab)">
      <Button
        :text="tab"
        :state="tab === gameStore.tabs.currentTab ? 'active' : 'default'"
      ></Button>
    </div>

    <Button v-if="local"
      :text="'Dev Console'"
      @click="gameStore.tabs.currentTab = 'Dev Console'">
    </Button>
    
  </nav>  
</template>

<script setup lang="ts">
  import Button from './Button.vue'
  import { useGameStore } from '@/stores/GameStore'

  const gameStore = useGameStore()

  const active = 'rgb(153, 153, 153)'

  function selectTab(tab: string) {
    gameStore.tabs.currentTab = tab
  }

  const local = window.location.href.includes('localhost')
</script>

<style scoped>
  .tab {
    text-align: center;
    margin: 10px;
    cursor: pointer;
  }

</style>