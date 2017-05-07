<template>
  <div id="story">
    <div id="items" class="buttonContainer">
        <button v-for="item in game.plot" v-if="item.visible" class="button" @click="onClick(item)" v-bind:class="{disabled: !item.available}">
            {{ item.name }}
        </button>
    </div>
    <div id="text">
        <component is="begining"></component>
        <component is="wait" v-if="game.story.Wait.visible" :resources="game.resources"></component>
        <component is="people" v-if="game.story.People.visible" :resources="game.resources"></component>
        <component is="chairs" v-if="game.story.Chairs.visible" :resources="game.resources"></component>
    </div>
  </div>
</template>

<script>

// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
import Begining from '../Story/Begining'
import Wait from '../Story/Wait'
import People from '../Story/People'
import Chairs from '../Story/Chairs'

// decorat vue class
@Component({
    props: ['game'],
    components: { Begining, Wait, People, Chairs }
})
export default class Story extends Vue {
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