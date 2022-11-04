<template>
  <p><button @click="showAllTabs">Show all tabs</button></p>
  <p>
    <button @click="game.stop()">Pause</button>
    <button @click="game.start()">Start</button>
  </p>

  <span>Time: {{resourceStore.waitTime.count}}</span>
</template>
<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useResourceStore} from '@/stores/ResourceStore'
  import { useGameStore } from '@/stores/GameStore'
  import { useStoryStore } from '@/stores/StoryStore'
  import Game from '@/models/Game';

  const props = defineProps({
    game: Game
  })

  const gameStore = useGameStore()
  const storyStore = useStoryStore()
  const resourceStore = useResourceStore()

  function showAllTabs() {
    gameStore.tabs.options = ["Story", "Phone", "Options", "Dev Console"]
  }

</script>