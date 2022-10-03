<template>
  <div id="intro">
    <p v-if="!gameStore.globals.includes('hideText')">{{storyStore.intro.en}}</p>
  </div>
  <div id="waitTime">
    <p v-if="!gameStore.globals.includes('hideText')">{{storyStore.waitTime.en[0]}} <Value :resValue="waitTime" /> {{storyStore.waitTime.en[1]}}</p>
    <p v-else>{{storyStore.waitTime.en[2]}}: <Value :resValue="waitTime" /></p>
  </div>
  <div id="chair" v-if="gameStore.flags.story.includes('chairs')">
    <p v-if="!gameStore.globals.includes('hideText')">{{storyStore.chairs.en[0]}} <Value :resValue="chairs" /> {{storyStore.chairs.en[1]}}</p>
    <p v-else>{{storyStore.chairs.en[2]}}: <Value :resValue="chairs" /></p>
  </div>
  <div id="buttons">
    <Button 
      :text="'Wait'"
      :class="'available-action'"
      />
    <Button v-if="!gameStore.flags.story.includes('chairs')"
      :text="'Look for a chair'"
      :class="'available-action'"
      @click="findChair"
    />
    <Button v-if="gameStore.flags.story.includes('chairs') &&
      !gameStore.flags.story.includes('sit') &&
      resourceStore.chairs.count >= 1"
      :text="'Sit down'"
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
  const chairs = computed(() => resourceStore.chairs.count.toFixed(2))

  function findChair() {
    addFlag('chairs')
    resourceStore.chairs.perSecond =.1
  }

  function addFlag(flag: string) {
    console.log(flag)
    if(!gameStore.flags.story.includes(flag)) {
      gameStore.flags.story.push(flag)
    }
  }

</script>