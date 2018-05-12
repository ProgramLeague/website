<template>
  <div class="parallax-window" data-parallax="scroll" :data-image-src="background" data-z-index="-1">
    <div class="outer">
      <div class="ui equal width stackable grid">
        <div v-for="article in articles" :key="article._key" class="column card have-border have-hover-border">
          <div class="header">
            <router-link :to="'/article/' + article.uid">
              <img :src="article.header" :alt="article.title">
            </router-link>
          </div>

          <div class="content">
            <div class="title need-fonts">
              <router-link :to="'/article/' + article.uid">
                <span>{{ article.title }}</span>
              </router-link>
            </div>

            <div class="abstract need-fonts">
              <router-link :to="'/article/' + article.uid">
                <p class="to-truncate_">{{ article.abstract }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

  .abstract p {
    color: rgba(0, 0, 0, 0.65);
    font-size: 15px;
    line-height: 1.4;
    margin-top: 6px;
    overflow: hidden;
  }

  .card .content {
    padding: 10px;
  }

  .header img {
    width: auto;
    height: auto;
    max-height: 160px;
  }

  .card {
    height: 282px;
    padding: 0 !important;
    margin-left: 20px;
    margin-right: 20px;
    overflow: hidden;
    background: white;
    border-radius: 6px;
    position: relative;

    transition: 0.1s ease-in-out;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 4px 0 hsla(0, 0%, 0%, 0.4);
  }

  .outer {
    padding-left: 130px;
    padding-right: 130px;
  }

  .parallax-window {
    padding-top: 40px;
    padding-bottom: 40px;
  }

</style>


<script>
  import ArticleCard from '../components/ArticleCard'

  import {
    FakeData
  } from '../utils/utils'

  export default {
    mounted: function () {
      $('.to-truncate_').dotdotdot({
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
        keep: $(".to-truncate_"),
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
    },
    data: function () {
      return {
        articles: [
          FakeData.article, FakeData.article, FakeData.article, FakeData.article
        ],
        background: FakeData.img
      }
    }
  }

</script>
