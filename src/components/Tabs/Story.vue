<template>
  <div id="story">
  </div>
</template>

<script>

// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
// decorat vue class
@Component({
    props: [],
    created: function () {
        console.log("story")
    }
})
export default class Story extends Vue {

}
</script>

<style scoped>

#story {
    background-color: white;
    border: 1px solid #000000;
    height: 100%;
}

</style>