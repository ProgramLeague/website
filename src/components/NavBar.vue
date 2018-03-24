<template>
  <div class="outer">
    <div class="ui top fixed large borderless menu nav">
      <div class="header item">
          <img src="../assets/logo.png">
      </div>

      <div class="ui container" id="header-items">
        <a class="item active" href="/">首页</a>
        <a class="item" v-for="item in items" :key="item._key" :href="item.item.href">{{ item.item.content }}</a>
      </div>

      <div class="icon right menu">
        <a id="nav-sidebar-button" class="item">
          <i class="big content icon"></i>
        </a>
      </div>
    </div>

    <div class="ui right big sidebar inverted vertical menu" id="nav-sidebar">
      <a class="item active" href="/">首页</a>
      <a class="item" v-for="item in items" :key="item._key" :href="item.item.href">{{ item.item.content }}</a>

      <a class="item">
        技术栈
        <div class="ui container">
          <div id="nav-stack-list">
            <StackList/>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
  .nav .header {
    padding-right: 64px;
  }

  #nav-stack-list {
    margin-top: 20px;
    width: 246px;
    margin-left: -15px;
    margin-right: auto;
  }

  #header-items .active {
    color: var(--theme-color)
  }

  #header-items a {
    font-size: 1.1em
  }

  #nav-sidebar .item:hover {
    background-color: var(--theme-color)
  }

  #nav-sidebar-button {
    display: none
  }

  @media(max-width: 767px) {
    #nav-sidebar-button {
      display: block;
    }

    #nav-sidebar-button:hover {
      color: var(--theme-color)
    }

    #header-items a {
      display: none
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
    mounted: function () {
      $("#nav-sidebar-button").click(function () {
        // showing multiple
        $('#nav-sidebar')
          .sidebar('setting', 'transition', 'overlay')
          .sidebar('toggle');
      })
    },
    components: {
      StackList
    }
  }

</script>
