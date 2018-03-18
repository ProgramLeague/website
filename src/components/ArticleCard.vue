<template>
  <li class="outer">
    <router-link :to="'/article/' + article.uid" v-if="article.headerImg" class="wrap-image" replace>
      <img :src="article.headerImg" :alt="article.title">
    </router-link>

    <div class="ui basic segment card-content">
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

      <router-link :to="{ name: 'Article', params: { uid: article.uid }}" class="title" target="_blank" replace>
        {{ article.title }}
      </router-link>
      <p class="abstract">{{ article.abstract }}</p>
    </div>
  </li>
</template>

<style scoped>
  .author {
    height: 34px;
    line-height: 34px;
    margin-bottom: 20px;
  }

  .author .avatar,
  .author .avatar img {
    width: 34px;
    height: 34px;
  }

  .author .avatar img {
    border: 1px solid #ddd;
    border-radius: 50%;
  }

  .author .info {
    display: inline-block;
    height: 100%;
    margin-left: 6px;
    margin-bottom: 34px;
    line-height: 20px;
    vertical-align: middle
  }

  .author .info .nickname {
    color: black;
    font-weight: 500
  }

  .author .info .bio {
    color: rgba(0, 0, 0, 0.74)
  }

  @media(max-width: 767px) {
    .author .info .bio {
      display: none;
    }

    .author .info .nickname {
      color: black;
      font-size: 1.2em;
      font-weight: 300;
      margin-top: 11px;
    }
  }

  .card-content {
    width: 100%;
    height: 100%;
  }

  .card-content .title {
    color: #333;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    font-size: 1.8em;
    font-weight: bold;
    line-height: 1.2;
  }

  .card-content .title:hover {
    color: var(--theme-color);
    text-decoration: underline
  }

  .card-content .abstract {
    color: rgba(0, 0, 0, 0.75);
    font-size: 15px;
    line-height: 1.8;
    margin-top: 10px;
  }

  .outer {
    position: relative;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 6px;
    word-wrap: break-word;

    border: 0;
    border-radius: 6px;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.14);
    opacity: 0.86;
  }

  .outer:hover {
    opacity: 1;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  }

  .wrap-image {
    float: right;
    width: 150px;
    height: 120px;
    overflow: hidden;
    max-height: 120px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 20px
  }

  .wrap-image img {
    width: auto;
    height: auto;
    max-height: 120px;
  }

</style>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      },
      article: {
        type: Object,
        required: true
      }
    }
  }

</script>
