<template>
  <nav>
    <div class="tab" v-for="tab in tabs" :key="tab" @click="selectTab(tab)">
      <Button
        :text="tab"
        :state="tab === currentTab ? 'active' : 'defualt'"
      />
    </div>
  </nav>  
</template>

<script setup lang="ts">
import Button from './Button.vue'

const props = defineProps({
  currentTab: { type: String, required: true },
  tabs: { type: Array<string>, required: true },
})

const emit = defineEmits(['tabChange'])

const active = 'rgb(153, 153, 153)'

function selectTab(tab: string) {
  emit("tabChange", tab)
}
</script>

<style scoped>
  .tab {
    text-align: center;
    margin: 10px;
    cursor: pointer;
  }

</style>