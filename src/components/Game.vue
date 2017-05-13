<template>
<div id="app">
  <div id="header" class="clear">
    <h1 class="titleBar">DMA Quest</h1>
    <ul class="actionBar">
      <li @click="saveClicked()" >Save 
        <span class="warning" v-if="game.resources.battery.value == 0">(Autosave Off!!!)</span>
        <span class="warning" v-if='game.resources.battery.value &gt; 0 && game.resources.battery.value &lt; 15'>(Battery Low)</span>
      </li>
      <li @click="resetClicked()">
        Clear Save
      </li>
    </ul>
  </div>

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
import Shop from './Tabs/Shop'
import Village from './Tabs/Village'
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
      Tabs, Story, Upgrades, Shop, Village
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

  saveClicked() {
    this.game.save()
  }

  resetClicked() {
    this.game.reset()
    this.game.stop()

    this.game

    delete(this.game)

    console.log(this.game)

    this.game = new Game()

    console.log(this.game.resources.minutes.value)
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

.warning {
  color: red;
  font-weight: bold;
}

</style>
