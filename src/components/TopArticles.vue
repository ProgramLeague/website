<template>
  <div class="outer have-border have-hover-border">
    <div class="top">
      <div class="identifier">
        <span class="colored">1.</span>
      </div>
      <div class="content-outer">
        <div class="content">
          <div class="author">
            <router-link class="router-link" :to="'/user/' + top.author.id" target="_blank">
              <img class="avatar-img" :src="top.author.avatar">
              <div class="inner">
                <span class="nickname">{{ top.author.nickname }}</span>：
              </div>
            </router-link>
          </div>
          <div class="article need-font">
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
        <div class="content sub-no-margin">
          <router-link :to="'/user/' + article.author.id" target="_blank" class="router-link">
            <span class="nickname">{{ article.author.nickname }}：</span>
          </router-link>
          <router-link :to="'/article/' + article.article.uid" target="_blank" class="router-link">
            <p class="title">{{ article.article.title }}</p>
          </router-link>
        </div>
        <div class="metadata sub-no-margin">
          <router-link :to="'/article/' + article.article.uid" target="_blank">
            <p>
              <i class="outline thumbs up icon"></i>{{ article.article.counter.like }}
            </p>
            <p class="hate">
              <i class="outline thumbs down icon"></i>{{ article.article.counter.hate }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .articles .article .content .nickname {
    opacity: .7;
    font-size: 16px;
  }

  .articles .article .content p {
    font-size: 16px;
  }

  .articles .article .identifier {
    font-size: 24px;
    margin-right: 6px;
  }

  .articles .article .metadata {
    float: right;
    overflow: hidden;
  }

  .articles .article .metadata a {
    color: rgba(0, 0, 0, 0.7);
  }

  .articles .article .metadata a:hover {
    color: rgba(0, 0, 0, 0.8);
  }

  .articles .article {
    overflow: hidden;
    margin-top: 4px;
    height: 44px;
  }

  .articles .article>div {
    display: inline-block;
  }

  .top .content .article .metadata {
    opacity: .6;
  }

  .top .content .article .metadata .hate {
    margin-left: 6px;
  }

  .top .content .article .title {
    font-size: 26px;
    font-weight: 500;
    margin: 0;
  }

  .top .content .author .avatar-img {
    width: 28px;
    height: 28px;
  }

  .top .content .author .inner {
    display: inline-block;
    position: relative;
    bottom: 8px;
    margin-left: 4px;
  }

  .top .content .author .inner .nickname {
    font-size: 16px;
  }

  .top .content .author {
    position: relative;
  }

  .top .content {
    margin-top: 4px;
    text-align: left;
    width: 80%;
    max-width: 100%;
    margin: 0 auto;
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

  .author .nickname {
    opacity: .7;
  }

  .avatar-img {
    border-radius: 50%;
  }

  .sub-no-margin * {
    margin: 0;
  }

  .colored {
    color: var(--theme-color)
  }

  .outer {
    height: 92%;
    width: 100%;
    padding: 14px;
  }

  .router-link {
    color: black
  }

  .router-link:hover {
    color: var(--theme-color)
  }

</style>

<script>
  import {
    FakeData
  } from '../utils/utils'

  export default {
    data: function () {
      let articleArray = new Array()
      let articles = {}
      for (let i = 0; i < 4; i++) {
        let thisArticle = {}
        thisArticle.order = i
        thisArticle.article = FakeData.article
        thisArticle.article.counter = {}
        thisArticle.article.counter.like = 346
        thisArticle.article.counter.hate = 4
        thisArticle.author = FakeData.author
        articleArray.push(thisArticle)
      }
      articles.top = {}
      articles.top.author = FakeData.author
      articles.top.article = FakeData.article
      articles.top.article.counter = {}
      articles.top.article.counter.like = 346
      articles.top.article.counter.hate = 4
      articles.articles = articleArray
      return articles
    }
  }

</script>
