<template>
    <p>I must have been waiting in line for at least {{ helpers.roundToFour(resources.minutes.value) }} minutes.</p>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Helpers from '../../helpers'

@Component({
    props:['resources']
})
export default class Wait extends Vue {
    helpers = Helpers
}
</script>