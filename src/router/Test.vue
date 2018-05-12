<template>
  <div>
    <nav-bar/>
    <article-comments/>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar'
  import ArticleComments from '../components/ArticleComments'

  import {
    FakeData
  } from '../utils/utils'

  export default {
    components: {
      NavBar,
      ArticleComments
    }
  }

</script>

<style>


</style>
