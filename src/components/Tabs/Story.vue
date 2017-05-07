<template>
  <div id="story">
    <div id="items">
        <button v-for="item in game.plot" v-if="item.visible" class="button" @click="onClick(item)" v-bind:class="{disabled: !item.available}">
            {{ item.name }}
        </button>
    </div>
    <div id="text">
        <component is="begining"></component>
        <component is="wait" v-if="game.story.Wait.visible" :resources="game.resources"></component>
        <component is="people" v-if="game.story.People.visible" :resources="game.resources"></component>
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

// decorat vue class
@Component({
    props: ['game'],
    components: { Begining, Wait, People }
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

#content {
    background-color: white;
    border: 1px solid #000000;
    height: 100%;
}

#items {
    border-bottom: 1px solid #000000;
    max-height: 70%;
    width: 100%;

     display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}

#text {
    font-family: 'Libre Baskerville', serif;
    padding: 15px;

}

.button {
    margin:15px 7.5px 15px 7.5px;
    padding: 10px;
    min-width: 5%;
    float: left;
    border: 1px solid #000000;
    text-align: center;
    background-color: white;
    text: black;

    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
}

.disabled {
    background-color: lightgray;
    text: darkgray;
}

</style>