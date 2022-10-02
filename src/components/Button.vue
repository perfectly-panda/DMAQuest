<template>
  <div 
    class="button"
    :click="clicked"
    :class="state">
    {{text}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    text: { type: String, required: true },
    state: { type: String, default: 'default' },
  },
  data: () => ({
    
  }),
  emits: ["click"],
    methods: {
      clicked() {
        this.$emit("click")
      }
    }
})
</script>

<style scoped>
  .button {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .active {
    background-color: rgb(217, 217, 217);
  }
</style>