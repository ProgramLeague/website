<template>
  <div class="outer">
    <div class="ui top fixed large borderless menu nav">
      <div class="header item">
        <img src="../assets/logo.png">
      </div>
      <a class="item nav-item" v-for="item in items" :class="{ active: isThisPage(item.item.href), 'active-nav-item': isThisPage(item.item.href) }"
        :key="item._key" :href="item.item.href">{{ item.item.content }}</a>

      <div class="right menu">
        <div class="ui right aligned item" id="nav-search">
          <div class="ui icon input">
            <input type="text" placeholder="搜索...">
            <i class="search link icon"></i>
          </div>
        </div>
        <div class="ui item" id="login-button">
          <button class="ui primary button" @click="showLoginModel">登录 / 注册</button>
        </div>

        <a class="item" id="nav-sidebar-button">
          <i class="big content icon"></i>
        </a>
      </div>
    </div>
    <login-model id="login-model" />

    <div class="ui right big sidebar vertical menu" id="nav-sidebar">
      <router-link class="item" v-for="item in items" :class="{ active: isThisPage(item.item.href) }" :key="item._key" :to="item.item.href">{{ item.item.content }}</router-link>

      <a class="item">
        当下流行
        <div class="ui container">
          <div id="nav-stack-list">
            <StackList/>
          </div>
        </div>
      </a>
      <router-link :to="'/stack/all'" id="nav-sidebar-stack-more" target="_blank" class="item">更多 >></router-link>

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
  #nav-sidebar-stack-more {
    float: right;
    font-size: 14px;
    opacity: .7;
    z-index: 2000;
  }

  .nav .header {
    padding-right: 38px
  }

  #nav-stack-list {
    width: 246px;
    margin-top: 30px;
    margin-bottom: 20px;
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

  #login-model {
    z-index: 1000;
    text-align: left;
  }

  .nav .active-nav-item {
    color: var(--theme-color) !important;
  }

  .nav .nav-item {
    font-size: 18px;
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
  import LoginModel from '../components/LoginModel'

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
              href: "/stack/all",
              content: "技术栈"
            }
          },
          {
            _key: itemId++,
            item: {
              href: "/about",
              content: "关于"
            }
          }
        ]
      }
    },
    methods: {
      isThisPage: function (href) {
        let thisName = "/" + window.location.href
          .replace(window.location.protocol + "//", "")
          .replace(window.location.host, "")
          .split("/")[1]
        return thisName === href
      },
      showLoginModel: function () {
        $('#login-model').dimmer('show')
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
      StackList,
      LoginModel
    }
  }

</script>
