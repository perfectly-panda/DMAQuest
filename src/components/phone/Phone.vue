<template>
  <h3>Battery Remaining: {{resourceStore.battery.displayCount}}</h3>
  <div>
    <Button
      :text="'Charge phone'"
      :class="resourceStore.battery.count < 100 ? 'available-action': 'unavailable-action'"
      :action="chargePhone"
    ></Button>
  </div>
  <span>Space Available: {{resourceStore.memory.displayCount}} GB / {{resourceStore.memory.max}} GB</span>

    <PhoneApps v-if="resourceStore.battery.count > 0"></PhoneApps>
</template>

<script setup lang="ts">

import { useResourceStore } from '@/stores/ResourceStore'
import { computed } from 'vue';
import Button from '@/components/Button.vue'
import PhoneApps from '@/components/phone/PhoneApps.vue'

const resourceStore = useResourceStore()

function chargePhone() {
    resourceStore.battery.addStatic(10)
  }

</script>