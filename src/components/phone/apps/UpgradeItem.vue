<template>
  <div class="upgrade">
    <div class="upgradeName">{{ upgrade.name }}</div>
    <div class="upgradePrice">{{ upgrade.upgradeCost}} {{upgrade.costResource}}</div>
    <div>{{ upgrade.purchased }}</div>
    <Button
      :text="'Purchase Upgrade'"
      :class="resourceStore.getResourceByName(upgrade.costResource)?.count ?? -1000 > upgrade.upgradeCost ? 'available-action': 'unavailable-action'"
      :action="purchaseUpgrade"
      class="appAction"
    ></Button>
  </div>
</template>
<script setup lang="ts">
import type { Upgrade } from '@/models/Upgrade';
import { useUpgradeStore } from '@/stores/UpgradeStore'
import { useResourceStore } from '@/stores/ResourceStore'
import Button from '@/components/Button.vue'

const props = defineProps<{
  upgrade: Upgrade
}>()

const upgradeStore = useUpgradeStore()
const resourceStore = useResourceStore()

function purchaseUpgrade() {
  upgradeStore.purchaseUpgrade(props.upgrade.id)
}

</script>
<style scoped>
  .upgradePrice {
    text-transform: capitalize;
  }
  .upgrade {
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
  }
</style>