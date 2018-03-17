<template>
  <div class="ui large borderless menu">
    <div class="header item">
      <img src="http://www.semantic-ui.cn/images/logo.png">
    </div>
    <div class="ui container" id="header-items">
      <a class="active item" href="/">首页</a>
      <a class="item" v-for="item in items" :key="item._key" :href="item.item.href">{{ item.item.content }}</a>
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
