<template>
<div>
  <h3>Apps</h3>
  <div v-if="appStore.activeApp && appStore.isAppInstalled(appStore.activeApp.id) && appStore.activeApp.id !== 'mystery'">
    <h4>{{ appStore.activeApp.name}}</h4>
    <a @click.prevent="closeApp">(X) Close App</a>
    <div v-if="appStore.activeApp.id === 'resourceApp'">
      <ResourceMonitor></ResourceMonitor>
    </div>
    <div v-else-if="appStore.activeApp.id === 'delivery'">
      <Delivery></Delivery>
    </div>
  </div>
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
import ResourceMonitor from '@/components/phone/ResourceMonitor.vue'
import Delivery from '@/components/phone/apps/DeliveryApp.vue'

const appStore = useAppStore()

function closeApp() {
  appStore.activeApp = undefined
}

</script>

<style scoped>
  .appsContainer {
    display: flex;
    flex-wrap: wrap;
  }
</style>