<template>
  <div class="outer size have-border have-hover-border narrow-hidden">
    <a :href="data.to" target="_blank">
      <div class="size" :style="{ backgroundImage: 'url(' + data.img + ')' }"></div>
    </a>
    <a :href="data.to" target="_blank">
      <div class="size" :style="{ backgroundImage: 'url(' + data.img + ')' }"></div>
    </a>
  </div>
</template>

<style scoped>
  .size {
    width: 160px;
    height: 364px;
    overflow: hidden;
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
