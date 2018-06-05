<template>
  <div class="outer">
    <div class="date">
      <p>{{ article.date }}</p>
    </div>

    <div class="sized have-border have-hover-border">
      <div class="header">
        <router-link :to="'/article/' + article.uid" target="_blank">
          <img :src="article.header" :alt="article.title">
        </router-link>

        <div class="stack solid-bg">
          <router-link :to="'/stack/' + article.stack.name" target="_blank">
            <div class="color" style="display: inline-block" :style="{ backgroundColor: article.stack.color }"></div>
            <span>{{ article.stack.name }}</span>
          </router-link>
        </div>

        <div class="tags solid-bg">
          <i class="hashtag icon"></i>
          <router-link v-for="tag in article.tags" :key="tag" :to="'/search?tag=' + tag" target="_blank">
            <span>{{ tag }}</span>
          </router-link>
        </div>
      </div>

      <div class="content">
        <div class="title need-fonts">
          <router-link :to="'/article/' + article.uid" target="_blank">
            <span>{{ article.title }}</span>
          </router-link>
        </div>

        <div class="abstract need-fonts">
          <router-link :to="'/article/' + article.uid" target="_blank">
            <p class="to-truncate">{{ article.abstract }}</p>
          </router-link>
        </div>
      </div>

      <div class="bottom">
        <div class="author">
          <router-link :to="'/user/' + author.id" target="_blank">
            <div class="avatar">
              <img v-bind:src="author.avatar">
            </div>
          </router-link>

          <div class="info">
            <router-link :to="'/user/' + author.id" target="_blank">
              <span class="nickname">{{ author.nickname }}</span>
            </router-link>
            <router-link :to="'/user/' + author.id" target="_blank">
              <p class="bio">{{ author.bio }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .author .info * {
    color: rgba(0, 0, 0, .7);
  }

  .author .nickname {
    color: black;
  }

  .author .info {
    display: inline-block;
    margin-left: 6px;
  }

  .author .avatar {
    display: inline-block;
    position: relative;
    top: 4px;
    width: 34px;
    height: 34px;
  }

  .author .avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .author {
    padding: 10px;
  }

  .header .stack {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 10px;
    font-size: 15px;
  }

  .header .stack span {
    color: white;
  }

  .header .stack span:hover {
    text-decoration: underline;
  }

  .header .stack .color {
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }

  .header .tags {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding-right: 0;
    color: white;
    font-size: 15px;
  }

  .header .tags:hover {
    opacity: .9;
  }

  .header .tags a {
    color: white;
    margin-right: 10px;
  }

  .header .tags a:hover {
    text-decoration: underline;
  }

  .header .solid-bg {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 4px;
    border-radius: 4px;
    opacity: .8;
  }

  .header .solid-bg:hover {
    opacity: 1;
  }

  .bottom {
    position: absolute;
    bottom: 0;
  }

  .date {
    text-align: right;
    opacity: .65;
    margin-bottom: 2px;
  }

  .abstract p {
    opacity: .65;
    color: black;
    font-size: 15px;
    line-height: 1.8;
    margin-top: 6px;
    overflow: hidden;
  }

  .abstract p:hover {
    opacity: .75;
  }

  .title span {
    color: #333;
    font-size: 23px;
    font-weight: bold;
    line-height: 1.2;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: .9;

  }

  .title span:hover {
    opacity: 1;
    padding-left: 2px;
    margin-left: -6px;
    border-left: var(--theme-color) solid 4px;
  }

  .content {
    padding: 10px;
  }

  .header {
    width: 100%;
    position: relative;
  }

  .header img {
    width: auto;
    height: auto;
    max-height: 180px;
  }

  .sized {
    height: 364px;
    position: relative;
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
