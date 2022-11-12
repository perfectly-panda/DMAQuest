<template>
  <button 
    class="button"
    @click.stop="() => {action()}"
    :class="state">
    {{text}}
  </button>
</template>

<script setup lang="ts">

const props = defineProps({
  text: { type: String, required: true },
  state: { type: String, default: 'default' },
  action: {type: Function, required: true}
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
    width: 125px;
    border: 1px solid black;
  }

  .available-action {
        background-color: #eee;
  }

  .unavailable-action {
        background-color: #ccc;
  }

  .active {
    background-color: rgb(217, 217, 217);
  }

  .action {
    background-color: rgb(217, 217, 217);
  }
</style>