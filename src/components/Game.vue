<template>
  <div id="game">
    <tabs :tabs = "game.tabs" :currentView = "currentView"></tabs>
    <component v-bind:is="currentView" id="content">
      {{message}}
    </component>
  </div>
</template>

<script>
// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
import Game from '../game/game'
import Tabs from './Tabs'
import Story from './Tabs/Story'
// decorat vue class
@Component({
    beforeCreate: function () {
        this.game = new Game()
        this.game.load()
        this.game.game()
    },
    beforeDestroy: function () {
        this.game.stop()
    },
    components: {Tabs, story: Story}

})
export default class GameView extends Vue {
  message = "Loading..."
  game

  currentView = 'story'

}
</script>

<style scoped>

#game {
  display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}

#content {
  -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 11 1 auto;
    -ms-flex: 11 1 auto;
    flex: 11 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;

    background-color: pink;
    height: 100%;
}

</style>
