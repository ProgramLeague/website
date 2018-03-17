<template>
  <li class="outer">
    <router-link :to="info.article.uid" class="wrap-image">
      <img :src="info.article.headerImg">
    </router-link>

    <div class="ui basic segment content">
      <router-link :to="'/article/' + info.article.uid" class="title" target="_blank">
        {{ info.article.title }}
      </router-link>
      <p class="abstract">{{ info.article.abstract }}</p>

      <div class="author">
        <router-link :to="'/user/' + info.author.id" class="avatar" target="_blank">
          <img v-bind:src="info.author.avatar">
        </router-link>
        <div class="info">
          <router-link :to="'/user/' + info.author.id" target="_blank">
            <div class="nickname">{{ info.author.nickname }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped>
  .author {
    height: 32px;
    line-height: 32px;
  }

  .author .avatar,
  img {
    width: 32px;
    height: 32px;
  }

  .author .avatar img {
    border: 1px solid #ddd;
    border-radius: 50%;
  }

  .author .info {
    display: inline-block;
    padding-left: 10px;
    margin-top: -20px;
    vertical-align: middle
  }

  .author .info .nickname {
    color: rgb(121, 121, 121)
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
      info: {
        type: Object,
        required: true
      }
    }
  }

</script>
