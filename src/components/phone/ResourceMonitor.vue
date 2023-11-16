<template>
  <div v-for="resource in resourceStore.visibleResources()" :key="resource.id">
    <p><b>{{resource.name}}:</b></p>
    <ul>
      <li>{{resource.displayCount}} / {{resource.max}}</li>
      <li>{{(resource.count / resource.max * 100).toFixed(2)}}%</li>
      <li>per second: {{resource.displayPerSecond}}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useResourceStore } from '@/stores/ResourceStore';

const resourceStore = useResourceStore()
</script>
