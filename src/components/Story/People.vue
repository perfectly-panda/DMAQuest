<template>
    <p>As usual, there were something like {{ helpers.roundToFour(resources.people.value) }} people waiting in line.</p>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Helpers from '../../helpers'

@Component({
    props:['resources']
})
export default class People extends Vue {
    helpers = Helpers
}
</script>