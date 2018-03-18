<template>
  <div class="outer">
    <div class="ui stackable top fixed large borderless menu nav">
      <div class="header item">
        <img src="../assets/logo.png">
      </div>
      <div class="ui container" id="header-items">
        <a class="item active" href="/">首页</a>
        <a class="item" v-for="item in items" :key="item._key" :href="item.item.href">{{ item.item.content }}</a>
      </div>
      <div class="ui container">
        <div class="item">
          <StackList id="nav-stack-list" />
        </div>
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

  #nav-stack-list {
    display: none
  }

  @media(max-width: 767px) {
    #nav-stack-list {
      display: block;
      width: 100% !important;
    }
  }

  .nav {
    z-index: 1070;
    border-radius: 0 !important;
    background-color: rgba(255, 255, 255, 0.92);

    border-bottom: 3px solid var(--theme-color)
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
  import StackList from '../components/StackList'
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
    },
    components: {
      StackList
    }
  }

</script>
