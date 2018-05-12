<template>
  <div>
    <nav-bar/>
    <div class="parallax-window header-parallax" data-parallax="scroll" data-z-index="-1">
      <div class="parallax-slider">
        <div class="ui active dimmer">
          <div class="cover" :style="{ backgroundImage: 'url(' + article.backgroundImg + ')' }"></div>
        </div>
        <div class="background" :style="{ backgroundImage: 'url(' + article.backgroundImg + ')' }"></div>
      </div>
      <div class="title">
        <p>{{ article.title }}</p>
      </div>
      <div class="ui container" id="author-outer">
        <div class="content">
          <div class="ui basic segment aligned">
            <div class="author">
              <router-link :to="'/user/' + author.id" class="avatar" target="_blank">
                <img v-bind:src="author.avatar">
              </router-link>
              <div class="info">
                <router-link :to="'/user/' + author.id" target="_blank">
                  <div class="nickname">{{ author.nickname }}</div>
                  <div class="bio">{{ author.bio }}</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui container">
      <div class="content">
        <div id="article-markdown" class="ui basic segment aligned" v-html="article.content"></div>
      </div>
    </div>
    <recommend-articles/>
    <div class="ui container">
      <div class="content">
        <article-comments id="article-comments" />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  #author-outer {
    position: relative;
    top: 332px;
  }

  .parallax-slider .background {
    position: relative;
    width: 100%;
    height: 100%;
    background: black 50% 50% repeat;
    color: #fff;
    text-align: center;
    z-index: -2;
  }

  .parallax-slider .dimmer {
    opacity: .7;
    /* 两侧的暗度调这个！越高越暗 */
  }

  .parallax-slider .dimmer {
    text-align: center;
    width: 100%;
  }

  .parallax-slider .dimmer .cover {
    height: 100%;
    width: 100%;
    background: 50% 50% no-repeat;
    z-index: -1;
  }

  .header-parallax .title {
    position: absolute;
    text-align: center;
    width: 100%;
  }

  .header-parallax .title p {
    height: 400px;
    line-height: 400px;
    color: white;
    font-size: 54px;
    font-weight: 500;
    text-shadow: 5px 5px 6px hsla(0, 0%, 0%, 0.4);
  }

  .header-parallax {
    width: 100%;
    height: 400px;
    line-height: 200px;
    margin-top: -1px;
    text-align: left;
  }

  .title {
    font-size: 34px;
    font-weight: bold
  }

  .aligned {
    margin-left: -12px;
  }

  .background-img {
    text-align: center;
    margin-top: -19px;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    max-height: 440px;
    overflow: hidden;
  }

  .background-img img {
    display: block;
    margin: 16px auto 0;
    width: 690px;
  }

  @media (max-width: 690px) {
    .background-img img {
      margin-top: 0;
      width: 100%;
    }
  }

  .content * {
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }

  .content {
    width: 690px;
    margin: 10px auto;
  }

  .container {
    display: block;
  }

  .author {
    height: 44px;
    line-height: 44px;
  }

  .author .avatar {
    position: relative;
    top: -4px;
  }

  .author .avatar,
  .author .avatar img {
    width: 36px;
    height: 36px;
  }

  .author .avatar img {
    border-radius: 50%;
  }

  .author .info {
    display: inline-block;
    height: 100%;
    margin-left: 6px;
    margin-bottom: 36px;
    line-height: 22px;
    vertical-align: middle;
    opacity: .8;
  }

  .author .info * {
    font-size: 16px;
    color: white;
    text-shadow: 3px 3px 3px hsla(0, 0%, 0%, .4);
  }

  .author .info:hover {
    opacity: 1;
  }

  .author .info .nickname {
    font-weight: 500
  }

  .author .info .bio {
    opacity: .74;
  }

</style>

<script>
  import NavBar from '../components/NavBar'
  import Footer from '../components/Footer'
  import RecommendArticles from '../components/RecommendArticles'
  import ArticleComments from '../components/ArticleComments'

  import {
    FakeData
  } from '../utils/utils'

  export default {
    name: 'Article',
    components: {
      NavBar,
      Footer,
      RecommendArticles,
      ArticleComments
    },
    mounted: function () {
      $('.author .info').mouseenter(() => $('.author .info *').css('opaciaty', '1'))
      $('.author .info').mouseleave(() => $('.author .info *').css('opaciaty', '.8'))
    },
    data() {
      return {
        article: {
          uid: 9347,
          title: "吃荔枝对身体有好处",
          abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。",
          category: ["a", "b"],
          backgroundImg: FakeData.img,
          content: "<p>对对对，就是这样。</p> <p>asdsd</p><h1>ALPHA</h1><h3>beta</h3></br><p>khj</p>"
        },
        author: {
          id: "beta",
          nickname: "Beta",
          avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
          bio: "祈愿的碎片啊，请成为永恒的存在。"
        }
      }
    }
  }

</script>
