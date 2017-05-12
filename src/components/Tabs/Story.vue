<template>
  <div id="story">
    <div id="items" class="buttonContainer">
        <button 
        v-for="item in game.plot" 
        v-if="item.visible && !item.negated" 
        class="button" 
        @click="onClick(item)" 
        v-bind:class="{disabled: !item.available, decision: item.negates.length > 0 && item.purchased == false}">
            {{ item.name }}
        </button>
    </div>
    <div id="text">
        <component is="begining"></component>
        <component is="wait" v-if="game.story.Wait.visible" :resources="game.resources"></component>
        <component is="people" v-if="game.story.People.visible" :resources="game.resources"></component>
        <component is="chairs" v-if="game.story.Chairs.visible" :resources="game.resources"></component>
        <component is="lines" v-if="game.story.Lines.visible" :resources="game.resources"></component>
        <component is="battery" v-if="game.story.Battery.visible" :resources="game.resources"></component>
        <p v-if="game.story.Wizards.visible">And then {{ helpers.roundToFour(game.resources.wizards.value) }} wizards came into the waiting room.</p>
        <p v-if="game.story.Portals.visible">You wouldn't believe what happened. The wizards opened up {{ helpers.roundToFour(game.resources.wizards.value) }} portals and people started coming out of them.</p>
    </div>
  </div>
</template>

<script>

// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
import Helpers from '../../helpers'

import Begining from '../Story/Begining'
import Wait from '../Story/Wait'
import People from '../Story/People'
import Chairs from '../Story/Chairs'
import Lines from '../Story/Line'
import Battery from '../Story/Battery'

// decorat vue class
@Component({
    props: ['game'],
    components: { Begining, Wait, People, Chairs, Lines, Battery }
})
export default class Story extends Vue {
    helpers = Helpers

    onClick = function(item){
        if(item.available){
            this.$emit('clickedStory', item)
        }
    }

    resourceCost = function(item) {
        
    }
}
</script>

<style scoped>

#items {
    border-bottom: 1px solid #000000;
    max-height: 70%;
    width: 100%;
}

#text {
    font-family: 'Libre Baskerville', serif;
    padding: 15px;

}

</style>