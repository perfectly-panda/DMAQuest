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

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Button
  },
  props: {
    currentTab: { type: String, required: true },
    tabs: { type: Array<string>, required: true },
  },
  data: () => ({
    active: 'rgb(153, 153, 153)'
  }),
  emits: ["tabChange"],
  methods: {
    selectTab(tab: string) {
      this.$emit("tabChange", tab)
    }
  }
})
</script>

<style scoped>
  .tab {
    text-align: center;
    margin: 10px;
    cursor: pointer;
  }

</style>