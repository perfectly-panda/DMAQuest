<template>
  <div class="appContainer">
    <b>{{ app.name }}</b>
    <p>{{ app.description }}</p>
    <p> Space Required: {{ app.appSize }}</p>

    <div v-if="app.installed">
      <Button
        :text="'Uninstall'"
        :class="app.installed && app.canRemove ? 'available-action': 'unavailable-action'"
        @click="uninstallApp"
      ></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PhoneApp } from '@/models/PhoneApp'
import { useAppStore } from '@/stores/AppStore'

import Button from '@/components/Button.vue'

const appStore = useAppStore()

  const props = defineProps<{
    app: PhoneApp
  }>()

  function uninstallApp() {
    appStore.removeApp(props.app.id)
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
 }
</style>