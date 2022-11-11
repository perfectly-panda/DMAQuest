<template>
  <p><button @click="showAllTabs">Show all tabs</button></p>
  <p>
    <button @click="game.stop()">Pause</button>
    <button @click="game.start()">Start</button>
  </p>

  <select v-model="tabToActivate">
    <option v-for="tab in tabs" :value="tab">{{ tab }}</option>
  </select>
  <button @click="activateTab(tabToActivate)">Activate tab</button>

  <p>
    <span>Time: {{resourceStore.waitTime.count}}</span>
  </p>
</template>
<script setup lang="ts">
  import { useResourceStore} from '@/stores/ResourceStore'
  import { useGameStore } from '@/stores/GameStore'
  import { useStoryStore } from '@/stores/StoryStore'
  import Game from '@/models/Game';

  const props = defineProps({
    game: { type: Game, required: true}
  })

  const gameStore = useGameStore()
  const storyStore = useStoryStore()
  const resourceStore = useResourceStore()

  const tabs = ["Story", "Phone", "Village", "Options", "Dev Console"]

  let tabToActivate = "Story"

  function showAllTabs() {
    gameStore.tabs.options = tabs
  }

  function activateTab(tab) {
    gameStore.addTab(tab)
  }

</script>