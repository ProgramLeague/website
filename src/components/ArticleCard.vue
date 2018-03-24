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
      <p class="abstract to-truncate">{{ article.abstract }}</p>
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
    margin-top: -10px;
    padding-bottom: 20px;
  }

  .card-content .title {
    color: #333;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    font-size: 23px;
    font-weight: bold;
    line-height: 1.2;
  }

  .card-content .title:hover {
    color: var(--theme-color);
    text-decoration: underline
  }

  .card-content .abstract {
    height: 100%;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.8;
    margin-top: 8px;

    text-overflow: ellipsis;
    overflow: hidden;
  }

  .outer {
    position: relative;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 6px;
    word-wrap: break-word;

    border-bottom: 1px solid #e6e6e6;
    border-radius: 6px;
  }

  .wrap-image {
    float: right;
    width: 160px;
    height: 120px;
    overflow: hidden;
    max-height: 120px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    margin-top: 70px;
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
    },
    mounted: function () {
      $(".to-truncate").dotdotdot({
        callback: function () {},
        /* Function invoked after truncating the text.
           Inside this function, "this" refers to the wrapper. */
        ellipsis: "\u2026 ",
        /* The text to add as ellipsis. */
        height: 100,
        /* The (max-)height for the wrapper:
           null: measure the CSS (max-)height ones;
           a number: sets a specific height in pixels;
           "watch": re-measures the CSS (max-)height in the "watch". */
        keep: $(".to-truncate"),
        /* jQuery-selector for elements to keep after the ellipsis. */
        tolerance: 0,
        /* Deviation for the measured wrapper height. */
        truncate: "letter",
        /* How to truncate the text: By "node", "word" or "letter". */
        watch: "window",
        /* Whether to update the ellipsis: 
           true: Monitors the wrapper width and height;
           "window": Monitors the window width and height. */
      })
    }
  }

</script>
