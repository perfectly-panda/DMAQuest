<template>
  <div id="village">
    <resources :resources="game.resources"></resources>
    <div id="container" class="splitContainer">
        <div id="buildings" class="split leftSide">
            <button 
            v-for="item in game.village" 
            v-if="item.flags.visible" 
            class="button" 
            @click="onClick(item)">
                {{ item.name }}
            </button>
        </div>
        <div id="quests" class="split" v-bind:is="currentView">
            Quests
        </div>
    </div>
  </div>
</template>

<script>

// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
import Helpers from '../../helpers'
import Resources from '../Resources'
import QuestBoard from '../Village/QuestBoard'
import Blank from '../Blank'

// decorat vue class
@Component({
    props: ['game'],
    components: { Resources, QuestBoard, Blank }
})
export default class Upgrade extends Vue {
    helpers = Helpers

    currentView = "Blank"

    onClick = function(item){
        this.currentView = item.tab
    }
}
</script>

<style scoped>

.noBorder {
    border: none !important;
}

</style>