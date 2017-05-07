<template>
  <div id="app">
    <h1>DMA Quest</h1>
    <game></game>
  </div>
</template>

<script>
// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
import Game from './Game.vue'
// decorat vue class
@Component({
  components: { Game }
})
export default class App extends Vue {
}
</script>

<style>
  h1 {
    font-family: 'Open Sans', sans-serif;
    padding-left: 10px; 
  }
</style>
