
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
    <Story v-if="currentTab === 'Story'"/>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import TitleBar from './components/TitleBar.vue'
import Story from './components/Story.vue'

let currentTab = 'Story'
let tabs = ['Story']
function tabChange(tab: string) {
  currentTab = tab
}
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
