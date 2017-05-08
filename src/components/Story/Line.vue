<template>
    <p>And they only had {{ helpers.roundToFour(resources.lines.value) }} windows open serving customers.</p>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Helpers from '../../helpers'

@Component({
    props:['resources']
})
export default class Lines extends Vue {
    helpers = Helpers
}
</script>