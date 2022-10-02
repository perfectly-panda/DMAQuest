
<template>
  <Sidebar
    :currentTab="currentTab"
    :tabs="tabs"
    @tabChange="tabChange"
    class="sidebar"
  />
  <div class="main">
    <TitleBar />
    <div class="currentTab">{{currentTab}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'
import TitleBar from './components/TitleBar.vue'

export default defineComponent({
    name: "App",
    components: { Sidebar,
      TitleBar },
    data: () => ({
      "currentTab": "Story",
      "tabs": ["Story"],
      "game": "test"
    }),
    methods: {
      tabChange(tab: string) {
        this.currentTab = tab
      }
    }
})
</script>

<style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #eee;
  }
  .main {
    margin-left: 200px;
  }
</style>
