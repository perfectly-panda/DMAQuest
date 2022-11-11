<template>
    <div id="buttons">
    <Button v-if="!gameStore.checkStoryFlag('waitTime')"
      id="waitTime"
      :text="'Wait'"
      :class="'available-action'"
      @click="wait"
      ></Button>
    <Button v-if="gameStore.checkStoryFlag('waitTime')"
      id="findChair"
      :text="'Look for a chair'"
      :class="'available-action'"
      @click="findChair"
    ></Button>
    <Button v-if="!gameStore.checkStoryFlag('people')"
      :text="'Check the line'"
      :class="'available-action'"
      @click="checkLine"
    ></Button>
    <Button v-if="gameStore.checkStoryFlag('chairs') && !gameStore.checkStoryFlag('battery')"
      :text="'Sit down'"
      :class="resourceStore.chairs.count >= 1 ? 'available-action': 'unavailable-action'"
      @click="sitDown"
    ></Button>
    <Button v-if="gameStore.checkStoryFlag('battery')"
      :text="'Charge phone'"
      :class="resourceStore.battery.count < 100 ? 'available-action': 'unavailable-action'"
      @click="chargePhone"
    ></Button>
    <Button v-if="gameStore.checkStoryFlag('portal') && (!gameStore.checkStoryFlag('wizard') || !gameStore.checkStoryFlag('chipmunk'))"
      :text="'Portals?!?!?'"
      :class="resourceStore.battery.count < 100 ? 'available-action': 'unavailable-action'"
      @click="checkPortals"
    ></Button>
    <Button v-if="gameStore.checkStoryFlag('wizard')"
      :text="'Help the wizards.'"
      :class="resourceStore.battery.count < 100 ? 'available-action': 'unavailable-action'"
      @click="helpWizards"
    ></Button>
    <Button v-if="gameStore.checkStoryFlag('chipmunk')"
      :text="'Help the chipmunks.'"
      :class="resourceStore.battery.count < 100 ? 'available-action': 'unavailable-action'"
      @click="helpChipmunks"
    ></Button>
    <Button v-if="!gameStore.tabs.options.includes('Village') && gameStore.checkStoryFlag('portal')"
      :text="'Go through the portal.'"
      :class="resourceStore.battery.count < 100 ? 'available-action': 'unavailable-action'"
      @click="goThroughPortal"
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

  function sitDown() {
    gameStore.addStoryFlag(new Flag('battery', 3))
    gameStore.addTab("Phone")
    resourceStore.battery.perSecond = -0.1
  }

  function chargePhone() {
    resourceStore.battery.addStatic(10)
  }

  function checkPortals() {
    resourceStore.wizard.perSecond = .1
    resourceStore.chipmunk.perSecond = .1
    gameStore.addStoryFlag(new Flag('wizard', 4))
    gameStore.addStoryFlag(new Flag('chipmunk', 5))
  }

  function helpWizards() {
    resourceStore.wizard.perSecond += .01
  }

  function helpChipmunks() {
    resourceStore.chipmunk.perSecond += .01
  }

  function goThroughPortal() {
    gameStore.addTab("Village")
  }
</script>