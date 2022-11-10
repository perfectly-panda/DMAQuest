<template>
<div>
  <h3>Apps</h3>
  <h4>Installed</h4>
  <div class="appsContainer">
    <AppContainer  v-for="app in appStore.installedApps"
      :app="app"
    ></AppContainer>
  </div>
  <h4>Available</h4>
  <div class="appsContainer">
    <AppContainer  v-for="app in appStore.availableApps"
      :app="app"
    ></AppContainer>
  </div>
</div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/AppStore'
import AppContainer from '@/components/phone/AppContainer.vue'

const appStore = useAppStore()

</script>

<style scoped>
  .appsContainer {
    display: flex;
    flex-wrap: wrap;
  }
</style>