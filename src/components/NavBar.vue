<template>
  <div class="outer">
    <div class="ui large borderless menu slide-down">
      <div class="header item">
        <img src="../assets/logo.png">
      </div>
      <div class="ui container" id="header-items">
        <a class="item active" href="/">首页</a>
        <a class="item" v-for="item in items" :key="item._key" :href="item.item.href">{{ item.item.content }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #header-items .active {
    color: var(--theme-color)
  }

  #header-items a {
    font-size: 1.1em
  }

  .slide-down {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1070;
    border-radius: 0 !important;
    background-color: rgba(255, 255, 255, 0.92);
  }

  .outer {
    margin-bottom: 60px;
  }

</style>

<style>
  :root {
    --theme-color: rgb(88, 133, 255)
  }

</style>

<script>
  export default {
    data() {
      let itemId = 0
      return {
        items: [{
          _key: itemId++,
          item: {
            href: "/goods",
            content: "精选"
          }
        }, {
          _key: itemId++,
          item: {
            href: "/about",
            content: "关于"
          }
        }]
      }
    }
  }

</script>
