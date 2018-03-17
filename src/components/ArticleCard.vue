<template>
  <li class="outer">
    <router-link :to="article.uid" class="wrap-image">
      <img :src="article.headerImg">
    </router-link>

    <div class="ui basic segment content">
      <router-link :to="{ name: 'Article', params: { uid: article.uid }}" class="title" target="_blank" replace>
        {{ article.title }}
      </router-link>
      <p class="abstract">{{ article.abstract }}</p>

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
  </li>
</template>

<style scoped>
  .author {
    height: 34px;
    line-height: 34px;
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

  .content {
    width: 100%;
    height: 100%;
  }

  .content .title {
    color: #333;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    font-size: 1.7em;
    font-weight: bold;
    line-height: 1.5;
  }

  .content .title:hover {
    color: var(--theme-color);
    text-decoration: underline
  }

  .content .abstract {
    color: #333;
    margin-top: 10px;
    line-height: 24px;
  }

  .outer {
    position: relative;
    width: 100%;
    margin: 0 0 17px;
    padding: 0 2px 17px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
  }

  .wrap-image {
    float: right;
    bottom: 40px;
    width: 150px;
    height: 120px;
    overflow: hidden;
    max-height: 120px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    margin-left: 5px
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
