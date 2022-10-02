<template>
  <div 
    class="button"
    :click="clicked"
    :class="state">
    {{text}}
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  text: { type: String, required: true },
    state: { type: String, default: 'default' },
})


const emit = defineEmits(["click"])
function clicked() {emit("click")}

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