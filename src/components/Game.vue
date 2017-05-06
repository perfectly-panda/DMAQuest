<template>
  <div id="game">
    Loading...
  </div>
</template>

<script>
// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
import Game from '../game/game'
// decorat vue class
@Component({
    beforeCreate: function () {
        this.game = new Game()
        this.game.load()
        this.game.game()
    },
    beforeDestroy: function () {
        this.game.stop()
    }
})
export default class App extends Vue {
  game

}
</script>
