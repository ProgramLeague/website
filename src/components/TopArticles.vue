<template>
  <div class="outer have-border have-hover-border">
    <div class="top article">
      <div class="identifier">
        <span class="colored">1.</span>
      </div>
      <div class="content-outer">
        <div class="content">
          <div class="author">
            <router-link class="router-link" :to="'/user/' + top.author.id" target="_blank">
              <span class="nickname">{{ top.author.nickname }}</span>：
            </router-link>
          </div>
          <div class="need-font">
            <router-link class="router-link" :to="'/article/' + top.article.uid" target="_blank">
              <p class="title">{{ top.article.title }}</p>
              <div class="metadata">
                <span>
                  <i class="thumbs up icon"></i>{{ top.article.counter.like }}
                </span>
                <span class="hate">
                  <i class="thumbs down icon"></i>{{ top.article.counter.hate }}
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="ui divider"></div>

    <div class="articles">

      <div class="article" v-for="(article, index) in articles" :key="article.order">
        <div class="identifier" :class="{ colored: index < 2 }">
          <span>{{ index + 2 }}.</span>
        </div>
        <router-link :to="'/article/' + article.article.uid" target="_blank" class="router-link sub-no-margin">
          <div class="content sub-no-margin">
            <span class="nickname">{{ article.author.nickname }}：</span>
            <p class="title">{{ article.article.title }}</p>
          </div>

          <div class="metadata sub-no-margin">
            <p>
              <i class="outline thumbs up icon"></i>{{ article.article.counter.like }}
            </p>
            <p>
              <i class="outline thumbs down icon"></i>{{ article.article.counter.hate }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.articles .article .content .nickname {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
}

.articles .article .content p {
  font-size: 16px;
}

.articles .article .identifier {
  display: inline-block;
  font-size: 24px;
  margin-right: 6px;
}

.articles .article .content {
  display: inline-block;
}

.articles .article .metadata {
  float: right;
}

.articles .article {
  margin-top: 4px;
  height: 44px;
}

.top .content .metadata .hate {
  margin-left: 6px;
}

.top .content .title {
  font-size: 26px;
  font-weight: 500;
  margin: 0;
}

.top .content .author {
  display: inline-block;
  position: relative;
  left: -4px;
  bottom: -4px;
  margin-left: 4px;
}

.top .content .author .nickname {
  font-size: 22px;
  color: rgba(0, 0, 0, 0.7);
}

.top .content {
  text-align: left;
  width: 80%;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 8px;
}

.top .content-outer {
  width: 100%;
  margin-top: -14px;
}

.top .identifier {
  position: relative;
  left: -4px;
  top: 12px;
  font-size: 38px;
  font-weight: 500;
}

.avatar-img {
  border-radius: 50%;
}

.sub-no-margin * {
  margin: 0;
}

.colored,
.colored * {
  color: var(--theme-color) !important;
}

.outer {
  height: 92%;
  width: 100%;
  padding: 14px;
  border-top: 3px solid var(--theme-color);
}

.article .content {
  opacity: 0.8;
}

.article .content:hover {
  opacity: 1;
}

.article {
  transition: 0.1s ease-in-out;
}

.article:hover {
  transform: scale(1.03);
}

.metadata * {
  color: rgba(0, 0, 0, 0.7);
}

* {
  color: black;
}
</style>

<script>
import { FakeData } from "../utils/utils";

export default {
  data: function() {
    let articleArray = new Array();
    let articles = {};
    for (let i = 0; i < 4; i++) {
      let thisArticle = {};
      thisArticle.order = i;
      thisArticle.article = FakeData.article;
      thisArticle.article.counter = {};
      thisArticle.article.counter.like = 346;
      thisArticle.article.counter.hate = 4;
      thisArticle.author = FakeData.author;
      articleArray.push(thisArticle);
    }
    articles.top = {};
    articles.top.author = FakeData.author;
    articles.top.article = FakeData.article;
    articles.top.article.counter = {};
    articles.top.article.counter.like = 346;
    articles.top.article.counter.hate = 4;
    articles.articles = articleArray;
    return articles;
  }
};
</script>
