<template>
  <button 
    class="button"
    @click.native="clicked"
    :class="state">
    {{text}}
  </button>
</template>

<script setup lang="ts">

const props = defineProps({
  text: { type: String, required: true },
  state: { type: String, default: 'default' },
})


const emit = defineEmits(["click"])
function clicked() {
  emit("click")}

</script>

<style scoped>
  .button {
    margin:10px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    width: 100px;
    border: 1px solid black;
  }

  .available-action {
        background-color: #eee;
  }

  .active {
    background-color: rgb(217, 217, 217);
  }

  .action {
    background-color: rgb(217, 217, 217);
  }
</style>