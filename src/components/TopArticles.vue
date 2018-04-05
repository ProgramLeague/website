<template>
  <div class="outer have-border have-hover-border">
      
  </div>
</template>

<style scoped>
  .outer {
    height: 92%;
    width: 100%;
  }

</style>

<script>
  import {
    FakeData
  } from '../utils/utils'

  export default {
    data: function () {
      let articleArray = new Array(6)
      let articles = {}
      for (let i = 0; i < 7; i++) {
        let thisArticle = FakeData.article
        thisArticle.order = i
        articleArray.push(thisArticle)
      }
      articles.articles = articleArray
      return articles
    }
  }

</script>
