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

        <div class="narrow-hidden">
          <span class="function-name">技术栈</span>
          <a class="function-more" target="_blank" href="">更多 >></a>
          <stack-list/>
        </div>
      </div>

      <div v-for="column in columns" :key="column._key">
        <div class="parallax-window" data-parallax="scroll" :data-image-src="column.img" data-z-index="-1">

          <div class="link" v-if="column.to">
            <router-link :to="column.to" class="inner" target="_blank">
              <div data-balloon="单击以查看更多" data-balloon-pos="up" class="text">
                <p class="title">{{ column.name }}</p>
                <p v-if="column.description" class="description">{{ column.description }}</p>
              </div>
            </router-link>
          </div>
          <template v-else>
            <div class="text">
              <p class="title">{{ column.name }}</p>
              <p v-if="column.description" class="description">{{ column.description }}</p>
            </div>
          </template>
        </div>

        <div class="ui container">
          <div class="article-list ui vertical stripe segment content">
            <!-- TODO：显示问题。 <span class="function-name narrow-hidden">最新文章</span> -->
            <div class="article-cards ui three column stackable grid">
              <new-article-card class="five wide column" v-for="article in column.articles" :key="article._key" :article="article.article"
                :author="article.author" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  .parallax-window {
    width: 100%;
    height: 200px;
    line-height: 200px;
    margin-bottom: 40px;
    margin-top: 40px;
    text-align: center;
  }

  .parallax-window .text .title {
    color: white;
    opacity: .86;
    font-size: 54px;
    font-weight: 500;
    height: 200px;
    line-height: 200px;
    text-shadow: 5px 5px 6px hsla(0, 0%, 0%, 0.4);
  }

  .parallax-window .text .description {
    margin-top: -122px;
    color: hsla(0, 0%, 100%, 0.7);
    font-size: 20px;
    text-shadow: 4px 4px 6px hsla(0, 0%, 0%, 0.4);
  }

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

  .article-list {
    margin-top: 24px !important;
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

  .article-cards {
    margin-top: -30px !important;
    list-style: none;
    margin-left: 3%;
    padding: 0;
  }

  .article-cards * {
    display: inline-block;
  }

</style>

<script>
  import ADCard from '../components/ADCard'
  import CornerBar from '../components/CornerBar'
  import TopComments from '../components/TopComments'
  import Slide from '../components/Slide'
  import NavBar from '../components/NavBar'
  import Footer from '../components/Footer'
  // import ArticleCard from '../components/ArticleCard'
  import NewArticleCard from '../components/NewArticleCard'
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
      NewArticleCard,
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
