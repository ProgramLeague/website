<template>
  <div class="outer">
    <div class="date">
      <p>{{ article.date }}</p>
    </div>

    <div class="sized have-border">
      <div class="header">
        <router-link :to="'/article/' + article.uid" target="_blank">
          <img :src="article.header" :alt="article.title">
        </router-link>

        <div class="tags">
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
    color: black;
    opacity: .8;
  }

  .author .info .nickname {
    opacity: 1;
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

  .header .tags {
    position: absolute;
    top: 10px;
    left: 10px;
    opacity: .8;
    color: white;
    font-size: 15px;

    background-color: rgba(0, 0, 0, 0.5);
    padding: 4px;
    padding-right: 0;
    border-radius: 4px;
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
    color: rgba(0, 0, 0, 0.65);
    font-size: 15px;
    line-height: 1.8;
    margin-top: 6px;
    overflow: hidden;
  }

  .title span {
    color: #333;
    font-size: 23px;
    font-weight: bold;
    line-height: 1.2;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title span:hover {
    color: var(--theme-color);
    text-decoration: underline;
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
