<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">404 Page not found!</h1>
        <p>
          Go to
          <router-link class="link" to="/">Home page</router-link>
        </p>

      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.wrapper-content{
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>