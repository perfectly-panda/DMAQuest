<template>
  <div v-for="storyItem in gameStore.getStoryFlags">
    <Log
      :tag="storyItem"
      :content="storyStore[storyItem].en"
      :shortVersion="gameStore.flags.globals.includes('hideText')"
      :resValue="resourceStore[storyItem].count"
      :maxValue="resourceStore[storyItem].max"
    ></Log>
  </div>
  <div id="intro">
    <p v-if="!gameStore.flags.globals.includes('hideText')">{{storyStore.intro.en[0]}}</p>
  </div>
</template>

<script setup lang="ts">
  import { useResourceStore} from '@/stores/ResourceStore'
  import { useGameStore } from '@/stores/GameStore'
  import { useStoryStore } from '@/stores/StoryStore'

  import Log from '@/components/story/Log.vue'

  const gameStore = useGameStore()
  const storyStore = useStoryStore()
  const resourceStore = useResourceStore()
</script>

