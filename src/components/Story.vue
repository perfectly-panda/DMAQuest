<template>
  Hello World 
  {{ resourceStore.waitTime.count }}
</template>

<script setup lang="ts">
  import { useResourceStore } from '@/stores/ResourceStore'

  const resourceStore = useResourceStore()

  setTimeout(() => {
    resourceStore.waitTime.increment(1000)
  }, 1000)


</script>