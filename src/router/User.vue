<template>
  <div>
    <NavBar/>
    <div class="container">
      <div class="parallax-window" data-parallax="scroll" :data-image-src="header">
        <div class="ui basic segment aligned content">
          <div class="author">
            <div class="avatar">
              <img v-bind:src="avatar">
            </div>
            <div class="info">
              <div class="nickname have-text-shadow">{{ nickname }}</div>
              <div class="bio">
                <span class="have-text-shadow">{{ bio }}</span>
                <div class="gender" :data-tooltip="_gender.tooltip" data-position="top right">
                  <i :class="_gender.class"></i>
                </div>
              </div>
              <div v-if="this['show-email'] || blog !== '' || Object.keys(links).length > 0" class="links have-text-shadow">
                <a v-if="blog !== ''" :href="blog" target="_blank">
                  <i class="icon linkify"></i>
                </a>
                <a v-if="this['show-email']" :href="'mailto:' + email" target="_blank">
                  <i class="icon mail square"></i>
                </a>
                <span v-if="(this['show-email'] || blog !== '') && Object.keys(links).length > 0" style="margin: 4px">|</span>
                <a v-if="links.StackOverflow" :href="links.StackOverflow" target="_blank">
                  <i class="icon stack overflow"></i>
                </a>
                <a v-if="links.GitHub" :href="links.GitHub" target="_blank">
                  <i class="icon github"></i>
                </a>
                <a v-if="links.V2EX" :href="links.V2EX" target="_blank">
                  <i class="icon iconfont icon-v2ex1193414easyiconnet"></i>
                </a>
                <a v-if="links.ZhiHu" :href="links.ZhiHu" target="_blank">
                  <i class="icon iconfont icon-zhihusquare1193435easyiconnet"></i>
                </a>
              </div>
            </div>
            <!-- <div class="introduction">{{ introduction }}</div> -->
          </div>
        </div>
      </div>
      <div class="content">
        <div class="ui pointing secondary menu">
          <a class="item active" data-tab="first">First</a>
          <a class="item" data-tab="second">Second</a>
          <a class="item" data-tab="third">Third</a>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  @import url('../assets/fonts/iconfont.css');

  .content .menu .item.active {
    border-color: var(--theme-color) !important
  }

  .author .info .links * {
    color: white;
    opacity: .86;
  }

  .author .info .links>a:hover {
    /* color: var(--theme-color); */
    opacity: 1;
    cursor: pointer;
  }

  .author .info .links {
    font-size: 20px;
  }

  .author .info .bio .gender {
    display: inline-block;
    position: relative;
    top: -28px;
    left: -44px;
    color: white;
    font-size: 36px;
  }

  .author .bio {
    font-size: 20px;
  }

  .author .nickname {
    font-size: 50px;
  }

  .author .info {
    display: inline-block;
    height: 100%;
    line-height: 28px;
    margin-left: 10px;
  }

  .author .avatar {
    display: inline-block;
    position: relative;
    top: 5px;
  }

  .author .avatar img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }

  .have-text-shadow {
    text-shadow: 3px 3px 3px hsla(0, 0%, 0%, .4);
  }

  .author {
    position: relative;
    top: 160px;
    color: white;
  }

  .parallax-window {
    min-height: 320px;
    background: transparent;
  }

  .container {
    margin-top: -1px;
  }

  .content {
    width: 1000px;
    margin: 10px auto;
  }

</style>

<script>
  import NavBar from '../components/NavBar'
  import Footer from '../components/Footer'

  import {
    FakeData
  } from '../utils/utils'
  import {
    cloneDeep
  } from 'lodash'

  export default {
    data: function () {
      let data = cloneDeep(FakeData.detailed.author)
      if (!data.links) {
        data.links = {}
      }
      if (!data.blog) {
        data.blog = ""
      }
      return data
    },
    computed: {
      _gender: function () {
        let temp = {}
        if (this.gender === 0) {
          temp.class = "fa fa-genderless"
          temp.tooltip = "性别保密"
        } else if (this.gender === 1) {
          temp.class = "fa fa-mars"
          temp.tooltip = "男性"
        } else if (this.gender === 2) {
          temp.class = "fa fa-venus"
          temp.tooltip = "女性"
        } else {
          temp.class = "fa fa-mars-stroke"
          temp.tooltip = "其它性别"
        }
        // 参见API简述和http://www.semantic-ui.cn/elements/icon.html
        return temp
      },
      _pro: function () {
        let prop = ""
        if (this.gender === 1)
          prop = "他"
        else if (this.gender === 2)
          prop = "她"
        else prop = "这位用户"
        return prop
      }
    },
    components: {
      NavBar,
      Footer
    }
  }

</script>
