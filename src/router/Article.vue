<template>
  <div>
    <nav-bar/>
    <div class="parallax-window header-parallax" data-parallax="scroll" data-z-index="-1">
      <div class="parallax-slider">
        <div class="ui active dimmer">
          <div class="cover" :style="{ backgroundImage: 'url(' + article.header + ')' }"></div>
        </div>
        <div class="background" :style="{ backgroundImage: 'url(' + article.header + ')' }"></div>
      </div>

      <div class="middle">
        <p class="title">{{ article.title }}</p>
        <div class="metadata">
          <div class="stack">
            <router-link :to="'/stack/' + article.stack.name" target="_blank" style="padding-left: 6px; padding-right: 6px;">
              <div style="display: inline-block; height: 13px; width: 13px; border-radius: 50%;" :style="{ backgroundColor: article.stack.color }"></div>
              <span>{{ article.stack.name }}</span>
            </router-link>
          </div>
          <div class="tags" style="margin-left: 8px">
            <i class="hashtag icon"></i>
            <router-link v-for="tag in article.tags" :key="tag" :to="'/search?tag=' + tag" target="_blank">
              <span style="margin-right: 8px">{{ tag }}</span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="ui container" id="author-outer">
        <div class="content">
          <div class="ui basic segment aligned">
            <div class="author animation-1" style="width: fit-content">
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
    <recommend-articles id="recommend-articles" />
    <div class="ui container">
      <div class="content">
        <article-comments id="article-comments" :article="article" />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
#recommend-articles {
  margin-top: 40px;
  margin-bottom: 20px;
}

#author-outer {
  position: relative;
  top: 12px;
  background-color: white;
  border-radius: 10px 10px 0 0;
  width: fit-content;
}

#author-outer .aligned {
  padding-top: 6px;
  margin-left: -4px;
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
  opacity: 0.7;
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

.header-parallax .middle .metadata > div {
  display: inline-block;
}

.header-parallax .middle .metadata a:hover {
  text-decoration: underline;
  opacity: 1;
}

.header-parallax .middle .metadata a {
  color: white;
  font-size: 18px;
  opacity: 0.8;
}

.header-parallax .middle .metadata {
  width: fit-content;
}

.header-parallax .middle .title {
  width: fit-content;
  font-size: 54px;
  font-weight: 500;
  text-shadow: 5px 5px 6px hsla(0, 0%, 0%, 0.4);
  margin: 0;
}

.header-parallax .middle {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  color: white;
  text-align: center;
  padding-top: 150px;
  padding-bottom: 90px;
}

.header-parallax {
  position: relative;
  width: 100%;
  margin-top: -2px;
  text-align: left;
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
  font-family: -apple-system, SF UI Display, Arial, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
}

.container .content {
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
  opacity: 0.9;
}

.author .info * {
  font-size: 16px;
  color: black;
}

.author .info:hover {
  opacity: 1;
}

.author .info .nickname {
  font-weight: 500;
}

.author .info .bio {
  opacity: 0.74;
}

.animation-1 {
  transition: 0.1s ease-in-out;
  opacity: 0.9;
}

.animation-1:hover {
  transform: scale(1.03);
  opacity: 1;
}
</style>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecommendArticles from "../components/RecommendArticles";
import ArticleComments from "../components/ArticleComments";

import { FakeData } from "../utils/utils";

export default {
  name: "Article",
  components: {
    NavBar,
    Footer,
    RecommendArticles,
    ArticleComments
  },
  mounted: function() {
    $(".author .info").mouseenter(() =>
      $(".author .info *").css("opaciaty", "1")
    );
    $(".author .info").mouseleave(() =>
      $(".author .info *").css("opaciaty", ".8")
    );
  },
  data() {
    return {
      article: {
        uid: 9347,
        title: "吃荔枝对身体有好处",
        abstract:
          "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。特别是儿童。",
        tags: ["a", "b"],
        stack: {
          name: "Java",
          color: "red"
        },
        date: "2018-04-12",
        header:
          "https://gitee.com/Ray-Eldath/Image/raw/master/Image/PL.website/kafai-liu-485751-unsplash.jpg",
        rate: {
          good: 125,
          bad: 20
        },
        content:
          "<p>对对对，就是这样。</p> <p>asdsd</p><h1>ALPHA</h1><h3>beta</h3></br><p>khj</p>"
      },
      author: {
        id: "beta",
        nickname: "Beta",
        avatar:
          "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
        bio: "祈愿的碎片啊，请成为永恒的存在。"
      }
    };
  }
};
</script>
