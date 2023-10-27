import './js/common'
import './css/main.css'
import './scss/main.scss'


// Variants of import
import Vue from "vue";
// import 'vue'
window.Vue = require('vue')
import store from './store'

Vue.component('example-component', require('./components/Example.vue').default)
const app =  new Vue({
    data(){
      return{
          component: false
      }
    },
    el: '#app',
    store
})