<template>
  <div class="column">
    <div class="parallax-window" data-parallax="scroll" :data-image-src="column.img" data-z-index="-1">

      <div class="text">
        <p class="title">{{ column.name }}</p>
        <p v-if="column.description" class="description">{{ column.description }}</p>
      </div>
    </div>

    <div class="ui container">
      <div class="article-list ui vertical stripe segment content">
        <!-- TODO：显示问题。 <span class="function-name narrow-hidden">最新文章</span> -->
        <div class="article-cards ui three column stackable grid">
          <new-article-card class="five wide column" v-for="article in column.articles" :key="article._key" :article="article.article"
            :author="article.author" />
        </div>

        <div class="more" v-if="column.to">
          <router-link :to="column.to" class="text" target="_blank">
            <button class="ui basic button fluid">更多</button>
          </router-link>
        </div>
      </div>
    </div>
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

  .article-list {
    margin-top: 24px !important;
  }

  .article-list .more {
    width: 160px;
    margin-top: 26px;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
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
  import NewArticleCard from '../components/NewArticleCard'
  export default {
    components: {
      NewArticleCard
    },
    props: {
      column: {
        type: Object,
        required: true
      }
    }
  }

</script>
