<template>
  <div>
    <nav-bar/>
    <new-article-card :article="article" :author="author" />
  </div>
</template>

<script>
  import NavBar from '../components/NavBar'
  import NewArticleCard from '../components/NewArticleCard'

  import {
    FakeData
  } from '../utils/utils'

  export default {
    components: {
      NavBar,
      NewArticleCard
    },
    data: function () {
      return {
        article: FakeData.article,
        author: FakeData.author
      }
    }
  }

</script>

<style>


</style>
