<template>
  <div class="ui large borderless menu">
    <div class="header item">
      <img src="http://www.semantic-ui.cn/images/logo.png">
    </div>
    <div class="ui container" id="header-items">
      <a class="active item" href="/">首页</a>
      <a class="item" v-for="item in items" :key="item.id" v-bind:href="item.href">{{ item.content }}</a>
    </div>
  </div>
</template>

<style scoped>
  #header-items .active {
    color: var(--theme-color)
  }

  #header-items a{
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
          id: itemId++,
          href: "alpha",
          content: "精选"
        }, {
          id: itemId++,
          href: "beta",
          content: "关于"
        }]
      }
    }
  }

</script>
