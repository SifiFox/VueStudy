//default
import Vue from 'vue'
import Router from 'vue-router'

//pages
import Home from "@/pages/Home.vue";
import Shop from "@/pages/Shop.vue";
import NotFound from "@/pages/404.vue"
import Product from "@/pages/Product.vue";

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
            path: '/shop',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/shop/:id',
            name: 'Product',
            component: Product
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ]
})