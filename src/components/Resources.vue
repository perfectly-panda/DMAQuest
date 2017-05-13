<template>
    <div id="resources" class="listContainer">
        <span v-for="resource in resources" v-if="resource.visible" class="list">
            {{resource.name}}: {{helpers.roundToFour(resource.value)}}
        </span>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Helpers from '../helpers'

@Component({
    props: ['resources'],
    components: { }
})

export default class Resources extends Vue {
    helpers = Helpers
}

</script>

<style>

#resources {
    border-bottom: 1px solid black;
    font-weight: bold;
}

</style>