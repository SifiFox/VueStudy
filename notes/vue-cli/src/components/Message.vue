<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props:{
    message: {
      type: String,
      required: true,
      default: 'empty message'
    }
  }
}
</script>

<style lang="scss" scoped>
    .message{
      color: red;
      text-align: center;
    }
</style>