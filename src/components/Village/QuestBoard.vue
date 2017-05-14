<template>
  <div id="questBoard">
    <h3 class="header">Quest Board</h3>
    <div v-if='quest == "none"'>Quest List</div>
    <div v-else>Current Quest</div>
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
    props: [],
    components: { Resources }
})
export default class Upgrade extends Vue {
    helpers = Helpers
    quest = 'none'

    onClick = function(item){
        if(item.flags.available && !item.flags.completed){
            this.$emit('clickedUpgrade', item)
        }
    }

    resourceCost = function(item) {
        
    }
}
</script>

<style scoped>

.header {
    border-bottom: 1px groove black;
    font-weight: bold;
    width: 100%;
}

.noBorder {
    border: none !important;
}

</style>