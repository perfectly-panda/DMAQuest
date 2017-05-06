<template>
  <div id="tabs">
    <div class="story tab" v-if="tabs.story.visible" v-bind:class="{ active: currentView == 'story' }">{{tabs.story.name}}</div>
  </div>
</template>

<script>

// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
// decorat vue class
@Component({
    props: ['tabs', 'currentView'],
    created: function () {
        console.log(this.tabs)
    }
})
export default class Tab extends Vue {

}
</script>

<style scoped>

#tabs {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    padding-left: 5px;
}

.tab {
    min-height: 20px;
    padding: 10px;

    border-radius: 15px 0px 0px 15px;
    -moz-border-radius: 15px 0px 0px 15px;
    -webkit-border-radius: 15px 0px 0px 15px;
    border: 0px solid #000000;
}

.story {
    background-color: blue;
}

.active {
    background-color: black;
    color: white;
    font-weight: bold;
}

</style>