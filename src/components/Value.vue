<template>
  <span class="value">{{resValue}}</span>
</template>

<script setup lang="ts">
  const props = defineProps({
    resValue: String
  })
</script>

<style scoped>
  .value {
    padding: 2px;
    background-color: rgb(217, 217, 217);
  }
</style>