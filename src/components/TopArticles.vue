<template>
  <div class="outer have-border have-hover-border">
    <div class="top">
      <span class="top-1">Top 1</span>
    </div>
  </div>
</template>

<style scoped>
  .top .top-1 {
    font-size: 20px;
    font-weight: 600;
  }

  .outer {
    height: 92%;
    width: 100%;
    padding: 14px;
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
      for (let i = 0; i < 7; i++) {
        let thisArticle = {}
        thisArticle.order = i
        thisArticle.article = FakeData.article
        thisArticle.author = FakeData.author
        articleArray.push(thisArticle)
      }
      articles.top = {}
      articles.top.author = FakeData.author
      articles.top.article = FakeData.article
      articles.articles = articleArray
      return articles
    }
  }

</script>
