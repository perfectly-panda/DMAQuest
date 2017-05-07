<template>
  <div id="game">
    <tabs :tabs = "game.tabs" :currentView = "currentView"
    @clickedTab = "tabClicked"></tabs>
    <component 
      v-bind:is="currentView" 
      id="content" 
      :game="game"
      @clickedStory = "storyClicked"
      @clickedUpgrade = "upgradeClicked">
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
import Upgrades from './Tabs/Upgrades'
import Calculator from '../game/logic/calculator'

// decorat vue class
@Component({
    beforeMount: function () {
        this.game.initalize()
    },
    beforeDestroy: function () {
        this.game.stop()
    },
    components: {
      Tabs, Story, Upgrades
    }

})
export default class GameView extends Vue {
  message = "Loading..."

  game = new Game()

  currentView = 'story'

  storyClicked (item) {
    this.game.actions.buyPlotItem(this.game, item)
  }

  upgradeClicked (item) {
    this.game.actions.buyUpgradeItem(this.game, item)
  }

  tabClicked(item) {
    this.currentView = item
  }
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
    -webkit-flex: 11 0 auto;
    -ms-flex: 11 0 auto;
    flex: 11 0 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;

     background-color: white;
    border: 1px solid #000000;
    height: 100%;
}

</style>
