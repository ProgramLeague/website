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
          <div class="introduction">
            <span class="author-gender" :data-balloon="_gender.tooltip" data-balloon-pos="up">
              <i :class="_gender.class"></i>
            </span>
            <div v-html="introduction"></div>
          </div>

          <div class="ui modal intro-modal">
            <div class="header">{{ _pro }}的资料</div>
            <div class="content">
              <div class="author-gender-mobile" :data-balloon="_gender.tooltip" data-balloon-pos="up">
                <i :class="_gender.class"></i>：{{ _gender.tooltip }}
              </div>
              <div v-html="introduction"></div>
            </div>
            <div class="actions">
              <div class="ui black deny button">关闭</div>
            </div>
          </div>

          <div class="author">
            <div class="avatar">
              <img v-bind:src="avatar">
            </div>
            <div class="info">
              <span class="nickname have-text-shadow">{{ nickname }}</span>
              <span class="have-text-shadow bio">{{ bio }}</span>
              <button class="circular ui icon toggle button">
                <i class="inverted icon content"></i>
              </button>
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
          </div>
        </div>
      </div>
      <div class="content">
        <div class="ui stackable two column mobile reversed grid">
          <div class="twelve wide column activities">
            <p class="card-name">{{ _pro }}的文章</p>
            <div class="articles have-border">
              <div class="ui stackable two column grid">
                <div class="column article-item" v-for="article in articles" :key="article.order">
                  <span class="date">{{ article.date }}</span>
                  <router-link class="router-link" :to="{ name: 'Article', params: { uid: article.uid }}" target="_blank" replace>
                    <img class="image" :src="article.header" :alt="article.title">
                    <span class="title have-hover-text">{{ article.title }}</span>
                    <div class="abstract to-truncate">
                      <p>{{ article.abstract }}</p>
                    </div>
                  </router-link>
                </div>
              </div>
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

  .article-item .date {
    float: left;
    margin-bottom: 6px;
    opacity: .7;
  }

  .article-item .abstract {
    font-size: 16px;
    color: black;
    opacity: .7;
    line-height: 1.4;
    padding-top: 10px;
    overflow: hidden;
    width: 94%;
  }

  .article-item .title {
    color: black;
    font-size: 30px;
  }

  .article-item .title:hover {
    color: var(--theme-color)
  }

  .article-item .image {
    width: 92%;
    border-radius: 6px;
    margin-bottom: 10px;
  }

  .article-item {
    width: 90%;
    text-align: left;
    border-radius: 6px;
    overflow: hidden;
    line-height: 1;
    margin-bottom: 34px;
  }

  .content .activities .articles {
    padding: 10px;
    padding-top: 18px;
  }

  .content .activities>div {
    margin-top: 14px;
  }

  .content .activities .card-name {
    font-size: 26px;
    margin-bottom: 0;
    text-align: center;
    opacity: .7;
  }

  .content .introduction {
    display: none;
    float: right;
    position: absolute;
    bottom: -76px;
    right: 2px;
    min-height: 120px;
    max-height: 144px;
    width: 38%;
    padding: 6px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
  }

  .author .info .button[class~=active] {
    background-color: white !important;
  }

  .author .info .button[class~=active] i {
    color: black;
  }

  .author .info .button {
    float: right;
    position: relative;
    top: -68px;
    left: -6px;
    background: rgba(0, 0, 0, 0.4);
  }

  .content .intro-outer {
    padding: 0;
    margin-left: -14px;
  }

  .content .activities {
    margin-top: 16px;
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

  .author-gender i {
    float: left;
    margin-top: 2px;
    margin-right: 4px;
    font-size: 22px;
  }

  .author-gender-mobile i {
    font-size: 16px;
    font-weight: bold;
  }

  .author-gender-mobile {
    font-size: 14px;
    font-weight: 600;
    margin: 10px;
    padding: 4px;
    border-top: solid rgba(0, 0, 0, 0.3) 1px;
    border-bottom: solid rgba(0, 0, 0, 0.3) 1px;
  }

  .author-gender-mobile i {
    font-size: 16px;
    font-weight: bold;
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

    .author .info .button {
      top: -10px;
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

  .have-hover-text:hover {
    color: var(--theme-color);
    border-bottom: solid var(--theme-color) 2px;
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
  import ArticleCard from '../components/ArticleCard'
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
  import device from 'current-device'

  export default {
    mounted: function () {
      let toggleButton = $('.author .info .button')
      let introduction = $('.content .introduction')
      let buttonClick = $(window).width() <= 767 ?
        (() => $('.intro-modal').modal('show')) :
        (() => {
          toggleButton.toggleClass('active')
          introduction.fadeToggle()
        })
      toggleButton.click(buttonClick)
      $(".to-truncate").dotdotdot({
        callback: function () {},
        /* Function invoked after truncating the text.
           Inside this function, "this" refers to the wrapper. */
        ellipsis: "\u2026 ",
        /* The text to add as ellipsis. */
        height: 100,
        /* The (max-)height for the wrapper:
           null: measure the CSS (max-)height ones;
           a number: sets a specific height in pixels;
           "watch": re-measures the CSS (max-)height in the "watch". */
        keep: $(".to-truncate"),
        /* jQuery-selector for elements to keep after the ellipsis. */
        tolerance: 0,
        /* Deviation for the measured wrapper height. */
        truncate: "letter",
        /* How to truncate the text: By "node", "word" or "letter". */
        watch: "window",
        /* Whether to update the ellipsis: 
           true: Monitors the wrapper width and height;
           "window": Monitors the window width and height. */
      })
    },
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
        else prop = "TA"
        return prop
      },
      _genie: function () {
        if (this.label._genie)
          return ""
        return this.label.genie.join(', ')
      }
    },
    components: {
      ArticleCard,
      NavBar,
      Footer,
      CornerBar,
      UserArchivements
    }
  }

</script>
