<template>
  <div>
    <nav-bar/>
    <slide/>
    <corner-bar/>
    <div class="content">
      <div id="header">
        <div class="ui three column stackable grid">
          <div class="aliged four wide column">
            <span class="function-name">热门评论</span>
            <a class="function-more" target="_blank" href="">更多 >></a>
            <top-comments class="inner" />
          </div>

          <div class="aliged center six wide column">
            <span class="function-name">全站最佳</span>
            <a class="function-more" target="_blank" href="">更多 >></a>
            <top-contributors id="top-contributors" class="inner" />
          </div>

          <div class="aliged six wide column">
            <span class="function-name">热门文章</span>
            <a class="function-more" target="_blank" href="">更多 >></a>
            <top-articles class="inner" />
          </div>
        </div>

        <div>
          <span class="function-name">技术栈</span>
          <a class="function-more" target="_blank" href="">更多 >></a>
          <stack-list/>
        </div>
      </div>

      <div v-for="column in columns" :key="column._key">
        <home-column :column="column" />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  #stack-list {
    margin-top: 4px;
    margin-bottom: 6px;
  }

  #top-contributors {
    border-top: 3px solid orange;
  }

  #header {
    margin-left: 11%;
    margin-right: 11%;
    margin-bottom: 40px;
  }

  #header .aliged {
    margin-top: 10px;
    margin-bottom: 24px;
    height: 400px;
  }

  #header .aliged .inner {
    margin-top: 10px;
  }

  .content {
    margin-top: 20px !important;
    vertical-align: bottom;
  }

  .function-name {
    color: rgba(0, 0, 0, 0.6);
    font-size: 23px;
    font-weight: 500;
    height: 20px;
    line-height: 20px;
  }

  .function-more {
    float: right;
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
  }

  .function-more:hover {
    color: rgba(0, 0, 0, 0.6);
  }

  @media(max-width: 767px) {
    .narrow-hidden {
      display: none;
    }
  }

</style>

<script>
  import ADCard from '../components/ADCard'
  import CornerBar from '../components/CornerBar'
  import TopComments from '../components/TopComments'
  import Slide from '../components/Slide'
  import NavBar from '../components/NavBar'
  import Footer from '../components/Footer'
  import HomeColumn from '../components/HomeColumn'
  import StackList from '../components/StackList'
  import TopContributors from '../components/TopContributors'
  import TopArticles from '../components/TopArticles'

  import {
    FakeData
  } from '../utils/utils'

  export default {
    name: 'Home',
    components: {
      ADCard,
      CornerBar,
      Slide,
      NavBar,
      // ArticleCard,
      HomeColumn,
      StackList,
      Footer,
      TopComments,
      TopContributors,
      TopArticles
    },
    mounted: function () {
      let link = $('.parallax-window .link')
      let title = $('.parallax-window .link .text .title')
      let window = $('.parallax-window')

      link.mouseenter(() => {
        title.animate({
          opacity: 1,
          fontSize: "64px"
        }, 400)
        window.css({
          boxShadow: "0 2px 6px 0 hsla(0, 0%, 0%, 0.4)"
        })
      })

      link.mouseleave(() => {
        title.animate({
          opacity: .86,
          fontSize: "54px"
        }, 300)
        window.css({
          boxShadow: "none"
        })
      })
    },
    data() {
      let nextColumnId = 0
      let img = FakeData.img
      let articles = FakeData.articles
      return {
        columns: [{
          _key: nextColumnId++,
          name: '编程',
          description: '一种崭新的装逼方式。',
          img: img,
          articles: articles
        }, {
          _key: nextColumnId++,
          name: '谁知道我是啥',
          description: '哈 谁知道呢？',
          to: '/stack/what?',
          img: img,
          articles: articles
        }],
        ads: {
          img: img,
          to: 'https://cn.bing.com'
        }
      }
    }
  }

</script>
