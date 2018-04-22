<template>
  <div>
    <NavBar/>
    <CornerBar/>
    <div class="container">
      <div class="parallax-window" data-parallax="scroll" :data-image-src="header">
        <div class="ui basic segment aligned content">
          <div class="labels">
            <div v-if="label.admin" class="label" data-balloon="管理员" data-balloon-pos="down">
              <img src="../assets/labels/admin.png">
            </div>
            <div v-if="label.genie" class="label" :data-balloon="'Genie：在类别 ' + _genie + ' 下'" data-balloon-pos="down">
              <img src="../assets/labels/genie.png">
            </div>
          </div>
          <div class="author">
            <div class="avatar">
              <img v-bind:src="avatar">
            </div>
            <div class="info">
              <span class="nickname have-text-shadow">{{ nickname }}</span>
              <!-- <div class="gender" :data-balloon="_gender.tooltip" data-balloon-pos="up">
                <i :class="_gender.class"></i>
              </div> -->
              <span class="have-text-shadow bio">{{ bio }}</span>
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
        <div class="ui stackable two column mobile reversed grid">
          <div class="twelve wide column activities have-border">
            <!-- <div class="ui basic segment">
              <span>{{ introduction }}</span>
            </div> -->
            <div class="ui pointing secondary menu">
              <a class="item active" data-tab="first">First</a>
              <a class="item" data-tab="second">Second</a>
              <a class="item" data-tab="third">Third</a>
            </div>
          </div>
          <div class="four wide column functions">
            <div class="archivements">
              <UserArchivements class="card" :user="this" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  @import url('../assets/fonts/iconfont.css');

  .content .intro-outer {
    padding: 0;
    margin-left: -14px;
  }

  .content .activities .menu {
    margin-top: -4px;
  }

  .content .activities {
    margin-top: 26px;
  }

  .content .functions>div {
    margin-top: 12px;
  }

  .content .function-name {
    color: rgba(0, 0, 0, 0.6);
    font-size: 23px;
    font-weight: 500;
    height: 20px;
    line-height: 20px;
  }

  .labels .label {
    display: inline-block;
    margin-left: 14px;
  }

  .labels .label img {
    width: 54px;
  }

  .labels {
    position: absolute;
    right: 0;
    top: 0;
  }

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

  .author .info .nickname .gender {
    float: right;
    color: white;
    font-size: 36px;
  }

  .author .bio {
    display: block;
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

  @media (max-width: 767px) {
    .content {
      text-align: center
    }

    .author {
      top: 40px !important;
      margin-left: auto;
      margin-right: auto;
      line-height: 40px;
    }

    .author .info {
      display: block;
    }

    .author .avatar {
      display: block;
    }
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
    width: 80%;
    margin: 10px auto;
  }

</style>

<script>
  import NavBar from '../components/NavBar'
  import Footer from '../components/Footer'
  import CornerBar from '../components/CornerBar'
  import UserArchivements from '../components/UserArchivements'

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
      },
      _genie: function () {
        if (this.label._genie)
          return ""
        return this.label.genie.join(', ')
      }
    },
    components: {
      NavBar,
      Footer,
      CornerBar,
      UserArchivements
    }
  }

</script>
