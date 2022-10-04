<template>
  <LogContainer></LogContainer>
  <div id="buttons">
    <Button 
      :text="'Wait'"
      :class="'available-action'"
      ></Button>
    <Button v-if="!gameStore.flags.story.includes('chairs')"
      :text="'Look for a chair'"
      :class="'available-action'"
      @click="findChair"
    ></Button>
    <Button v-if="gameStore.flags.story.includes('chairs') &&
      !gameStore.flags.story.includes('sit') &&
      resourceStore.chairs.count >= 1"
      :text="'Sit down'"
      :class="'available-action'"
      @click="findChair"
    ></Button>
  </div>
</template>

<script setup lang="ts">
  import { useResourceStore } from '@/stores/ResourceStore'
  import { useGameStore } from '@/stores/GameStore'

  import Flag from '@/models/Flag'

  import Button from '@/components/Button.vue'
  import LogContainer from '@/components/story/LogContainer.vue'

  const resourceStore = useResourceStore()
  const gameStore = useGameStore()

  function findChair() {
    gameStore.addStoryFlag(new Flag('chairs', 1))
    resourceStore.chairs.perSecond = .1
  }

</script>