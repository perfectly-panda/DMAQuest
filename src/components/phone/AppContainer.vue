<template>
  <div class="appContainer" @click="openApp">
    <b>{{ app.name }}</b>
    <p>{{ app.description }}</p>
    <p> Space Required: {{ app.appSize }}</p>

    <div v-if="app.installed" class="appActions">
      <Button
        :text="'Uninstall'"
        :class="app.installed && app.canRemove ? 'available-action': 'unavailable-action'"
        :action="uninstallApp"
        class="appAction"
      ></Button>
    </div>
    <div v-else class="appActions">
      <Button
        :text="'Install'"
        :class="app.available && !app.installed && app.space <= resourceStore.memory.count ? 'available-action': 'unavailable-action'"
        :action="installApp"
        class="appAction"
      ></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PhoneApp } from '@/models/PhoneApp'
import { useAppStore } from '@/stores/AppStore'

import Button from '@/components/Button.vue'
import { useResourceStore } from '@/stores/ResourceStore';

const appStore = useAppStore()
const resourceStore = useResourceStore()

const props = defineProps<{
  app: PhoneApp
}>()

function uninstallApp() {
  appStore.removeApp(props.app.id)
}
function installApp() {
  appStore.installApp(props.app.id)
}

function openApp() {
  if (props.app.installed) {
    appStore.activeApp = props.app
  }
}
</script>

<style scoped>
 .appContainer {
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    float: left;
    min-width: 50px;
    max-width: 200px;
 }
 .appActions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
 }
 .appAction {
 }

</style>