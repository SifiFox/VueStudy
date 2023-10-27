//default
import Vue from 'vue'
import Router from 'vue-router'

//pages
import Home from "@/pages/Home.vue";
import Example from "@/pages/Example.vue";
import NotFound from "@/pages/404.vue"

Vue.use(Router)

//Routering
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/example',
            name: 'Example',
            component: Example
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ]
})