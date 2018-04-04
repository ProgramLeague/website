<template>
  <div class="outer" :style="{ backgroundImage: 'url(' + data.img + ')' }"></div>
</template>

<style scoped>
  .outer {
    width: 160px;
    height: 364px;
  }

</style>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }

</script>
