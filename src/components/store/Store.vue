
<template>
  <div>
    <h3>Sell some sh*t!</h3>
    <div v-if="resourceStore.battery.count > 0">
      <div v-if="gameStore.flags.storeOpen">
        <Button 
          :text="'Close Store'"
          :action="() => {gameStore.flags.storeOpen = false}"
        ></Button>

        <ul>
          <li>Cardboard: {{resourceStore.cardboard.displayCount}}</li>
          <li>Cash: ${{ resourceStore.cash.displayCount }}</li>
          <li>Snacks:
            <ul>
              <li>Sales Per Second: {{ resourceStore.snacks.salesPerSecond.toFixed(3) }}</li>
              <li>Overall Per Second: {{ resourceStore.snacks.displayPerSecond }}</li>
              <li>Total Available: {{ resourceStore.snacks.count.toFixed(3) }}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-else>
        <Button 
          :text="'Open Store'"
          :action="() => {gameStore.flags.storeOpen = true}"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/stores/GameStore"
import { useResourceStore } from "@/stores/ResourceStore"
import Button from "@/components/Button.vue"

const gameStore = useGameStore()
const resourceStore = useResourceStore()
</script>