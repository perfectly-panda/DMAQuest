<template>
  <div id="intro">
    <p v-if="!gameStore.globals.includes('hideText')">{{storyStore.intro.en}}</p>
  </div>
  <div id="waitTime">
    <p v-if="!gameStore.globals.includes('hideText')">{{storyStore.waitTime.en[0]}} <Value :resValue="waitTime" /> {{storyStore.waitTime.en[1]}}</p>
    <p v-else>{{storyStore.waitTime.en[2]}}: <Value :resValue="waitTime" /></p>
  </div>
  <div id="wait">
    <Button 
      :text="'Wait'"
      :class="'available-action'"
      />
  </div>
  <div id="chairs">
    <div v-if="gameStore.flags.story.includes('chairs')">
    </div>
    <Button v-else
      :text="'Find a chair'"
      :class="'available-action'"
      @click="findChair"
      />
    </div>
</template>

<script setup lang="ts">
  import { useResourceStore } from '@/stores/ResourceStore'
  import { useGameStore } from '@/stores/GameStore'
  import { useStoryStore } from '@/stores/StoryStore'

  import Value from '@/components/Value.vue'
  import Button from '@/components/Button.vue'

  import { computed } from 'vue';

  const resourceStore = useResourceStore()
  const gameStore = useGameStore()
  const storyStore = useStoryStore()

  const waitTime = computed(() => (resourceStore.waitTime.count / 60).toFixed(2))

  function findChair() {
    addFlag('chairs')
  }

  function addFlag(flag: string) {
    console.log(flag)
    if(!gameStore.flags.story.includes(flag)) {
      gameStore.flags.story.push(flag)
    }
  }

</script>