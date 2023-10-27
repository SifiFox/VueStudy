<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product-wrapper">
          <div class="product-slider">
<!--            <img :src="product.img" :alt="product.title" />-->
            <carousel
                :per-page="1"
                :pagination="enable"
                pagination-color="#b3b3b3"
                pagination-active-color="#494ce8"
            >
              <slide v-for="(slide,index) in product.gallery" :key="String(index) + slide.id">
                  <img :src="slide.img" :alt="slide.name">
              </slide>
            </carousel>
          </div>
          <div class="product-content">
            <h1 class="title">{{ product.title}}</h1>
            <p>{{product.description}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {enable} from "core-js/internals/internal-metadata";

export default {
  methods: {enable},
    data(){
      return{
        product: null
      }
    },
    created() {
        let id = this.$route.params.id
        this.product = this.$store.getters.getProduct(id)
    }
}
</script>

<style lang="scss">
    .product-wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;

    }

    .product-slider,
    .product-content{
      max-width: 48%;
      text-align: center;
    }

    .VueCarousel-inner{
      visibility: visible !important;
      flex-basis: 100% !important;
      width: 100% !important;
    }
</style>