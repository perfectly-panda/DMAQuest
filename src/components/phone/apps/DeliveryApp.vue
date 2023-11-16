<template>
  <div>
    <h4>Available Resource</h4>
    <div v-for="resource in resourceStore.visibleResources('Phone')" :key="resource.id">
      {{resource.name}}: {{ resource.displayCount }} 
      <Button
        :text="'+1'"
        :class="'available-action'"
        :action="() => {purchaseResource(resource, 1)}"
      ></Button>
    </div>
    <h4>Availabile Upgrades</h4>
    <div v-for="upgrade in upgradeStore.getAvailableUpgrades()" :key="upgrade.id">
      <UpgradeItem 
        :upgrade="upgrade"
        :actionable="true"
      >
      </UpgradeItem>
    </div>
    <h4>Purchased Upgrades</h4>
    <div v-for="upgrade in upgradeStore.getPurchasedUpgrades('all')" :key="upgrade.id">
      <UpgradeItem 
        :upgrade="upgrade"
        :actionable="false"
      >
      </UpgradeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import UpgradeItem from '@/components/phone/apps/UpgradeItem.vue'
import Button from '@/components/Button.vue'
import { useUpgradeStore } from '@/stores/UpgradeStore'
import { useResourceStore } from '@/stores/ResourceStore'
import type { Resource } from '@/models/Resource';

const upgradeStore = useUpgradeStore()
const resourceStore = useResourceStore()

function purchaseResource(resource: Resource, amount: number){
  const purchaseResource = resourceStore.getResourceById(resource.purchaseResource)
  if (purchaseResource && purchaseResource.count >= resource.purchaseCost * amount) {
    resource.addStatic(amount)
    purchaseResource.addStatic(-resource.purchaseCost * amount)
  }
}
</script>

<style scoped>
.upgradePrice {
  text-transform: capitalize;
}
</style>