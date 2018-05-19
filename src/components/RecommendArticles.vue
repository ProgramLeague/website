<template>
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
</template>

<style scoped>
  .title span {
    color: rgb(0, 0, 0);
    opacity: .8;
    font-size: 23px;
    font-weight: bold;
    line-height: 1.2;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title span:hover {
    opacity: 1;
  }

  .abstract p {
    color: black;
    font-size: 15px;
    line-height: 1.4;
    margin-top: 6px;
    overflow: hidden;

    opacity: .65;
  }

  .abstract p:hover {
    opacity: .75;
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
    box-shadow: 1px 4px 8px 0 hsla(0, 0%, 0%, 0.1);

    transition: 0.1s ease-in-out;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 1px 4px 4px 0 hsla(0, 0%, 0%, 0.2);
  }

  .outer .grid {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .outer {
    padding-left: 130px;
    padding-right: 130px;

    background-color: rgba(0, 0, 0, 0.08);
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
