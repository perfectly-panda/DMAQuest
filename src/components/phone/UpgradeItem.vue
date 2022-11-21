<template>
 <div class="upgrade">
   <div class="upgradeName">{{ upgrade.name }}</div>
   <div class="upgradePrice">{{ upgrade.cost}} {{upgrade.costResource}}</div>
  </div>
</template>
<script setup lang="ts">
import type { Upgrade } from '@/models/Upgrade';

const props = defineProps<{
  upgrade: Upgrade
}>()
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