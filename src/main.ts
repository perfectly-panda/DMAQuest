declare var require: any

import Vue from 'vue'
import App from './components/App.vue'

new Vue({
  el: '#app', 
  components: {App},
  render: h => h(App)
})
