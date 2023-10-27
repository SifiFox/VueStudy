<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Example</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message: null
    }
  },
  created() {
    this.message = this.$store.getters.getMessage
  },
  methods: {
    setMessage(){
      this.$store.dispatch('setMessage', this.message)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>