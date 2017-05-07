<template>
<p>Even with all those people, there were only {{ helpers.roundToFour(resources.chairs.value) }} chairs to sit in.</p>
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