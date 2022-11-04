<template>
  <h3>Battery Remaining: {{compCharge}}</h3>

  <Button
      :text="'Charge phone'"
      :class="resourceStore.battery.count < 100 ? 'available-action': 'unavailable-action'"
      @click="chargePhone"
    ></Button>
</template>

<script setup lang="ts">

import { useResourceStore } from '@/stores/ResourceStore'
import { computed } from 'vue';
import Button from '@/components/Button.vue'

const resourceStore = useResourceStore()

const compCharge = computed(() => (resourceStore.battery.count.toFixed(2) ?? 0).toString())

function chargePhone() {
    resourceStore.battery.addStatic(10)
  }

</script>