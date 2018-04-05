<template>
  <div class="outer have-border have-hover-border">
    <div class="card-content">
      <div class="image">
        <router-link class="image" :to="{ name: 'Article', params: { uid: article.uid }}" v-if="article.headerImg" replace>
          <img :src="article.headerImg" :alt="article.title">
        </router-link>
      </div>

      <div class="text">
        <div class="title">
          <router-link class="title" :to="{ name: 'Article', params: { uid: article.uid }}" target="_blank" replace>
            {{ article.title }}
          </router-link>
        </div>
        <p class="abstract to-truncate-80">{{ article.abstract }}</p>
      </div>

      <div class="author">
        <router-link :to="'/user/' + author.id" target="_blank">
          <div class="avatar">
            <img v-bind:src="author.avatar">
          </div>
          <div class="info">
            <div class="nickname">{{ author.nickname }}</div>
            <div class="bio">{{ author.bio }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .outer {
    overflow: hidden;
    width: 320px;
    height: 364px;
    margin-top: 16px;
    margin-bottom: 6px;
    margin-right: 16px;
  }

  .author {
    position: absolute;
    bottom: 14px;
    height: 32px;
  }

  .author .avatar {
    width: 32px;
    height: 32px;
  }

  .author .avatar img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-bottom: 4px;
  }

  .author .info {
    position: absolute;
    left: 36px;
    bottom: -4px;
    line-height: 20px;
  }

  .author .info * {
    white-space: nowrap;
  }

  .author .info .nickname {
    color: black;
    font-weight: 500;
  }

  .author .info .bio {
    color: rgba(0, 0, 0, 0.74);
  }

  @media(max-width: 767px) {

    .author .info .bio {
      display: none;
    }

    .author .info .nickname {
      color: black;
      font-size: 1.2em;
      font-weight: 300;
      line-height: 36px;
      margin-left: 4px;
    }
  }

  .card-content .text {
    position: relative;
    top: 180px;
  }

  .card-content .text .title {
    color: #333;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    font-size: 23px;
    font-weight: bold;
    line-height: 1.2;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-content .text .title:hover {
    color: var(--theme-color);
    text-decoration: underline
  }

  .card-content .text .abstract {
    width: 100%;
    height: 100%;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.8;
    margin-top: 6px;
  }

  .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 180px;
    max-height: 180px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .image img {
    width: auto;
    height: auto;
    max-height: 180px;
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
      $(".to-truncate-80").dotdotdot({
        callback: function () {},
        /* Function invoked after truncating the text.
           Inside this function, "this" refers to the wrapper. */
        ellipsis: "\u2026 ",
        /* The text to add as ellipsis. */
        height: 80,
        /* The (max-)height for the wrapper:
           null: measure the CSS (max-)height ones;
           a number: sets a specific height in pixels;
           "watch": re-measures the CSS (max-)height in the "watch". */
        keep: $(".to-truncate-80"),
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
