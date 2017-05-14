<template>
  <div id="tabs">
    <div class="story tab" v-if="tabs.story.flags.visible" v-bind:class="{ active: currentView == 'story' }" @click="onClick('story')">{{tabs.story.name}}</div>
    <div class="upgrades tab" v-if="tabs.upgrades.flags.visible" v-bind:class="{ active: currentView == 'upgrades' }" @click="onClick('upgrades')">{{tabs.upgrades.name}}</div>
    <div class="shop tab" v-if="tabs.shop.flags.visible" v-bind:class="{ active: currentView == 'shop' }" @click="onClick('shop')">{{tabs.shop.name}}</div>
    <div class="village tab" v-if="tabs.village.flags.visible" v-bind:class="{ active: currentView == 'village' }" @click="onClick('village')">{{tabs.village.name}}</div>
  </div>
</template>

<script>

// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
// decorat vue class
@Component({
    props: ['tabs', 'currentView']
})
export default class Tab extends Vue {
    onClick = function(item){
            this.$emit('clickedTab', item)
    }
}
</script>

<style scoped>

#tabs {
    width:10%;
    padding-left: 5px;
}

.tab {
    min-height: 20px;
    padding: 10px;
    text-align: center;

    border-radius: 15px 0px 0px 15px;
    -moz-border-radius: 15px 0px 0px 15px;
    -webkit-border-radius: 15px 0px 0px 15px;
    border: 0px solid #000000;
}

.story {
    background-color: blue;
}

.upgrades {
    background-color: orange;
}

.shop {
    background-color: green;
}

.village {
    background-color: brown;
}

.active {
    background-color: black;
    color: white;
    font-weight: bold;
}

</style>