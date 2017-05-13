<template>
  <div id="village">
    <resources :resources="game.resources"></resources>
    <div id="container" class="">
        <div id="buildings">
        </div>
        <div id="quests">
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

// decorat vue class
@Component({
    props: ['game'],
    components: { Resources }
})
export default class Upgrade extends Vue {
    helpers = Helpers

    onClick = function(item){
        if(item.available && !item.completed){
            this.$emit('clickedUpgrade', item)
        }
    }
}
</script>

<style scoped>

#buildings {
    display: block;
    width: 50%;
    border-right: 1px solid black;
}

.noBorder {
    border: none !important;
}

</style>