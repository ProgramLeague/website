<template>
  <router-view/>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  :root {
    --theme-color: #5885FF;
    --theme-color-light: rgb(227, 235, 255);
  }

  .need-fonts {
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }

  .have-border {
    border: 0;
    border: 1px solid rgba(0, 0, 0, .05);
    border-radius: 3px;
    overflow: hidden;
  }

  .have-hover-border:hover {
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.1);
  }

  .have-hover-color:hover {
    color: var(--theme-color)
  }

  .router-link {
    color: black;
  }

  [data-balloon]:after {
    padding: 0 !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
    height: 26px !important;
    line-height: 26px !important;
  }

</style>
