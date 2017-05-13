<template>
  <div id="upgrades">
    <div id="resources" class="listContainer">
        <span v-for="resource in game.resources" v-if="resource.visible" class="list">
            {{resource.name}}: {{helpers.roundToFour(resource.value)}}
        </span>
    </div>
    <div id="purchasable" class="buttonContainer">
        <button v-for="item in game.upgrades" v-if="item.visible" class="button" @click="onClick(item)" v-bind:class="{disabled: !item.available, completed: item.value}">
            {{ item.name }}
        </button>
    </div>
  </div>
</template>

<script>

// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
import Helpers from '../../helpers'

// decorat vue class
@Component({
    props: ['game'],
    components: { }
})
export default class Upgrade extends Vue {
    helpers = Helpers

    onClick = function(item){
        if(item.available && !item.completed){
            this.$emit('clickedUpgrade', item)
        }
    }

    resourceCost = function(item) {
        
    }
}
</script>

<style scoped>

#resources {
    border-bottom: 1px solid black;
    font-weight: bold;
}

.noBorder {
    border: none !important;
}

</style>