<template>
  <div v-for="storyItem in gameStore.flags.story">
    <Log
      :tag="storyItem.text"
      :content="storyStore[storyItem.text].en"
      :shortVersion="gameStore.flags.globals.includes('hideText')"
      :resValue="resourceStore[storyItem.text]?.count"
    ></Log>
  </div>
  <div id="intro">
    <p v-if="!gameStore.flags.globals.includes('hideText')">{{storyStore.intro.en}}</p>
  </div>
</template>

<script setup lang="ts">
import { useResourceStore } from '@/stores/ResourceStore'
import { useGameStore } from '@/stores/GameStore'
import { useStoryStore } from '@/stores/StoryStore'

import Log from '@/components/story/Log.vue'

const resourceStore = useResourceStore()
const gameStore = useGameStore()
const storyStore = useStoryStore()
</script>

