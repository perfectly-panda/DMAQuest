<template>
  <div>
    <p><button @click="showAllTabs">Show all tabs</button></p>
    <p>
      <Button 
        :action="() => game.stop()"
        :text="'Pause'"
      ></Button>
      <Button 
        :action="() => game.start()"
        :text="'Start'"></Button>
      <Button 
        :action="() => game.save()"
        :text="'Save'"
      ></Button>
      <Button 
        :action="() => game.reset()"
        :text="'reset'"
      ></Button>
    </p>

    <select v-model="tabToActivate">
      <option v-for="tab in tabs" :value="tab">{{ tab }}</option>
    </select>
    <Button 
      :action="() => activateTab(tabToActivate)"
      :text="'Activate Tab'"
    ></Button>

    <p>
      <span>Time: {{resourceStore.waitTime.count}}</span>
    </p>
  </div>
</template>
<script setup lang="ts">
  import { useResourceStore} from '@/stores/ResourceStore'
  import { useGameStore } from '@/stores/GameStore'
  import { useStoryStore } from '@/stores/StoryStore'
  import Game from '@/models/Game';
  import Button from '@/components/Button.vue'

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

  function activateTab(tab: string) {
    gameStore.addTab(tab)
  }

</script>