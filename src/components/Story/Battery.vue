<template>
    <p>I managed to hunt down a place to plug in my phone, because it only had {{ helpers.roundToFour(resources.battery.value) }}% left.</p>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Helpers from '../../helpers'

@Component({
    props:['resources']
})
export default class Battery extends Vue {
    helpers = Helpers
}
</script>