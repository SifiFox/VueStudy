<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Shop</h1>

        <div class="item__wrapper">
          <shop-item
              v-for="product in shopList"
              :key="product.id"
              :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import shopItem from '@/components/ShopItem.vue'
import shop from "@/store/shop";
export default {
  computed: {
    shop() {
      return shop
    }
  },
    components:{
      shopItem
    },
    data(){
      return{
        shopList: null
      }
    },
    created() {
      this.shopList = this.$store.getters.getShopList
      console.log(this.shopList)
    }
}
</script>

<style lang="scss">
  .item__wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>