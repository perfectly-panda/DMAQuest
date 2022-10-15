<template>
    <div id="buttons">
    <Button v-if="!gameStore.checkStoryFlag('waitTime')"
      :text="'Wait'"
      :class="'available-action'"
      @click="wait"
      ></Button>
    <Button v-if="gameStore.checkStoryFlag('waitTime')"
      :text="'Look for a chair'"
      :class="'available-action'"
      @click="findChair"
    ></Button>
    <Button v-if="!gameStore.checkStoryFlag('people')"
      :text="'Check the line'"
      :class="'available-action'"
      @click="checkLine"
    ></Button>
    <Button v-if="gameStore.checkStoryFlag('chairs')"
      :text="'Sit down'"
      :class="resourceStore.chairs.count >= 1 ? 'available-action': 'unavailable-action'"
      @click="checkLine"
    ></Button>
  </div>
</template>

<script setup lang="ts">
  import { useResourceStore } from '@/stores/ResourceStore'
  import { useGameStore } from '@/stores/GameStore'

  import Flag from '@/models/StoryFlag'

  import Button from '@/components/Button.vue'

  const resourceStore = useResourceStore()
  const gameStore = useGameStore()

  function findChair() {
    gameStore.addStoryFlag(new Flag('chairs', 1))
    resourceStore.chairs.addStatic(1)
  }
  
  function wait() {
    gameStore.addStoryFlag(new Flag('waitTime', 0))
  }

  function checkLine() {
    gameStore.addStoryFlag(new Flag('people', 2))
    resourceStore.people.perSecond = .05
  }
</script>