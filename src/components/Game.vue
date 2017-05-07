<template>
  <div id="game">
    <tabs :tabs = "game.tabs" :currentView = "currentView"></tabs>
    <component 
      v-bind:is="currentView" 
      id="content" 
      :game="game"
      @clickedStory = "storyClicked">
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
import Calculator from '../game/calculator'

// decorat vue class
@Component({
    mounted: function () {
        this.game.load()
        this.game.game()
    },
    beforeDestroy: function () {
        this.game.stop()
    },
    components: {Tabs, Story}

})
export default class GameView extends Vue {
  message = "Loading..."

  game = new Game()

  currentView = 'story'

  storyClicked (item) {

    var buy = Calculator.buy(this.game.resources, item.pricing)

    if(buy[0]){
      this.game.story[item.name].visible = true
      item.available = !buy[1]

      for (var i = 0; i < item.bonuses.length; i++){
        var bonus = item.bonuses[i]
          Calculator.bonusFunc(this.game.resources, bonus[0], bonus[1], bonus[2])
      }
    }
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
