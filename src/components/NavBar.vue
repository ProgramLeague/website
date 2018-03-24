<template>
  <div class="outer">
    <div class="ui top fixed large borderless menu nav">
      <div class="header item">
        <img src="../assets/logo.png">
      </div>

      <div class="ui container" id="header-items">
        <a class="item" v-for="item in items" :class="{ active: isThisPage(item.item.href) }" :key="item._key" :href="item.item.href">{{ item.item.content }}</a>
      </div>

      <div class="icon right menu">
        <div class="item" id="nav-search">
          <div class="ui icon input">
            <input type="text" placeholder="搜索...">
            <i class="search link icon"></i>
          </div>
        </div>

        <a class="item" id="nav-sidebar-button">
          <i class="big content icon"></i>
        </a>
      </div>
    </div>

    <div class="ui right big sidebar vertical menu" id="nav-sidebar">
      <a class="item" v-for="item in items" :class="{ active: isThisPage(item.item.href) }" :key="item._key" :href="item.item.href">{{ item.item.content }}</a>

      <a class="item">
        技术栈
        <div class="ui container">
          <div id="nav-stack-list">
            <StackList/>
          </div>
        </div>
      </a>

      <div class="item">
        <div class="ui icon input" id="nav-sidebar-search">
          <input type="text" placeholder="搜索...">
          <i class="search link icon"></i>
        </div>
      </div>
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
    color: var(--theme-color);
  }

  #header-items a {
    font-size: 1.1em
  }

  #nav-sidebar {
    opacity: .9;
    background-color: var(--theme-color);
  }

  #nav-sidebar .item {
    color: white
  }

  #nav-sidebar .active {
    font-weight: 600;
  }

  #nav-sidebar .item:hover {
    opacity: 1;
  }

  #nav-sidebar #nav-sidebar-search {
    opacity: .8;
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

    #nav-search {
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

<script>
  import StackList from '../components/StackList'
  export default {
    data() {
      let itemId = 0
      return {
        items: [{
          _key: itemId++,
          item: {
            href: "/",
            content: "首页"
          }
        }, {
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
    methods: {
      isThisPage: function (href) {
        let thisName = "/" + window.location.href
          .replace(window.location.protocol + "//", "")
          .replace(window.location.host, "")
          .split("/")[1]
        return thisName === href
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
