<template>
  <div>
    <div v-for="upgrade in upgradeStore.getAvailableUpgrades()" :key="upgrade.id">
      <UpgradeItem 
        :upgrade="upgrade"
      >
      </UpgradeItem>
    </div>
    <h4>Purchased Upgrades</h4>
    <div v-for="upgrade in upgradeStore.getPurchasedUpgrades('all')" :key="upgrade.id">
      <UpgradeItem 
        :upgrade="upgrade"
      >
      </UpgradeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import UpgradeItem from '@/components/phone/apps/UpgradeItem.vue'
import { useUpgradeStore } from '@/stores/UpgradeStore'

const upgradeStore = useUpgradeStore()
</script>

<style scoped>
.upgradePrice {
  text-transform: capitalize;
}
</style>