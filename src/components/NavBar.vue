<template>
  <div class="outer">
    <div class="ui top fixed large borderless menu nav">
      <template v-if="searching === true">
        <div class="item" id="nav-searching">
          <div class="ui transparent icon massive input">
            <input type="text" placeholder="搜索...">
            <i class="search icon"></i>
          </div>
          <i class="big close icon" @click="toggleSearching()"></i>
        </div>
      </template>

      <template v-else>
        <div class="header item narrow-hidden">
          <img src="../assets/logo.png">
        </div>

        <div id="narrow-nav" class="ui left dropdown item narrow-only" style="margin-left: 0 !important;">
          <i class="big content icon"></i>
          <div class="menu">
            <a class="item nav-item" v-for="item in items" :class="{ active: isThisPage(item.item.href), 'active-nav-item': isThisPage(item.item.href) }"
              :key="item._key" :href="item.item.href">{{ item.item.content }}</a>
            <div class="divider"></div>
            <div class="item">
              <button class="ui fluid primary button" @click="showLoginModel()">登录 / 注册</button>
            </div>
          </div>
        </div>

        <div class="narrow-only center menu" id="narrow-icon">
          <div class="item">
            <img src="../assets/logo.png">
          </div>
        </div>

        <a class="item nav-item narrow-hidden" v-for="item in items" :class="{ active: isThisPage(item.item.href), 'active-nav-item': isThisPage(item.item.href) }"
          :key="item._key" :href="item.item.href">{{ item.item.content }}</a>

        <div class="right menu item">
          <div class="narrow-only">
            <i class="big icon search" @click="toggleSearching()"></i>
          </div>
          <div class="ui right aligned item narrow-hidden" id="nav-search">
            <div class="ui icon input">
              <input type="text" placeholder="搜索...">
              <i class="search link icon"></i>
            </div>
          </div>
          <div class="ui item narrow-hidden" id="login-button">
            <button class="ui primary button" @click="showLoginModel()">登录 / 注册</button>
          </div>
        </div>
      </template>
    </div>
    <login-model id="login-model" />

    <!-- <div class="ui vertical menu" id="nav-sidebar">
      <router-link class="item" v-for="item in items" :class="{ active: isThisPage(item.item.href) }" :key="item._key" :to="item.item.href">{{ item.item.content }}</router-link>

      <div class="item">
        <div class="ui icon input" id="nav-sidebar-search">
          <input type="text" placeholder="搜索...">
          <i class="search link icon"></i>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
  #nav-searching .close {
    position: absolute;
    right: -50px;
    opacity: .6;
    font-size: 32px;
  }

  #nav-searching .input {
    width: 120% !important;
  }

  #nav-searching {
    height: 58px;
    position: relative;
  }

  .nav .header {
    padding-right: 38px
  }

  #header-items .active {
    color: var(--theme-color);
  }

  #header-items a {
    font-size: 1.1em
  }

  .narrow-only,
  .narrow-only * {
    display: none !important;
  }

  @media(max-width: 767px) {
    .narrow-only,
    .narrow-only * {
      display: block !important;
    }

    .narrow-hidden,
    .narrow-hidden * {
      display: none !important;
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
    height: 58px;
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
  import SearchModel from '../components/SearchModel'

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
        ],
        searching: false
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
      },
      showSearchModel: function () {
        $('#search-model').dimmer('show')
      },
      toggleSearching: function () {
        this.searching = !this.searching
        $('.ui .dropdown').dropdown()
      }
    },
    mounted: function () {
      $('.ui.dropdown').dropdown();
    },
    components: {
      StackList,
      LoginModel,
      SearchModel
    }
  }

</script>
