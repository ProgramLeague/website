<template>
  <div>
    <NavBar/>
    <Slide/>
    <div class="content">
      <div id="header">
        <div class="ui container">
          <div class="ui stackable three column grid">
            <div id="hot-comments" class="column">
              <span class="function-name">热门评论</span>
              <TopComments class="inner" />
            </div>
            <div class="column"></div>
            <div class="column">
              <ADCard :data="ads" />
            </div>
          </div>
        </div>
        <div class="narrow-hidden">
          <div class="ui container">
            <span class="function-name">技术栈</span>
            <a class="function-more" target="_blank" href="">更多 >></a>
            <StackList/>
          </div>
        </div>
      </div>

      <div v-for="column in columns" :key="column._key">
        <div class="parallax-window" data-parallax="scroll" :data-image-src="column.img" data-z-index="-1">

          <div class="link" v-if="column.to">
            <router-link :to="column.to" class="inner" target="_blank">
              <div data-tooltip="单击以查看更多" data-inverted="" data-position="top left" class="text">
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
              <ArticleCard class="five wide column" v-for="article in column.articles" :key="article._key" :article="article.article" :author="article.author"
              />
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

  .have-border {
    border: 1px solid rgba(0, 0, 0, .05);
    border-radius: 3px;
  }

  .have-hover-border:hover {
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.1);
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

  #header {
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 40px;
  }

  #hot-comments {
    margin-top: 10px;
    margin-bottom: 24px;
  }

  #hot-comments .inner {
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
  import TopComments from '../components/TopComments.vue'
  import Slide from '../components/Slide'
  import NavBar from '../components/NavBar'
  import Footer from '../components/Footer'
  import ArticleCard from '../components/ArticleCard'
  import StackList from '../components/StackList'

  import {
    FakeData
  } from '../utils/utils'

  export default {
    name: 'Home',
    components: {
      ADCard,
      Slide,
      NavBar,
      ArticleCard,
      StackList,
      Footer,
      TopComments
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
      let img = "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1"
      let articles = FakeData.articles
      return {
        columns: [{
          _key: nextColumnId++,
          name: '编程',
          description: '一种崭新的装逼方式。',
          img: img,
          articles: articles
        }],
        ads: {
          img: img
        }
      }
    }
  }

</script>
