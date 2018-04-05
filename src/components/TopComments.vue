<template>
  <div class="outer have-border have-hover-border">
    <div class="ui comments top-comments">
      <div v-for="comment in comments" :key="comment.order">
        <p class="article-title">在：
          <router-link class="link" :to="{ name: 'Article', params: { uid: comment.article.uid }}">
            {{ comment.article.title }}
          </router-link>
        </p>

        <div class="comment outer-comment">
          <a class="avatar">
            <img :src="comment.author.avatar">
          </a>
          <div class="content">
            <a class="author">{{ comment.author.nickname }}</a>
            <div class="metadata">
              <span class="date">{{ comment.time }}</span>
              <div class="rating have-hover-color">
                <i class="star icon"></i>{{ comment.rate }} 喜爱
              </div>
            </div>
            <div class="text">
              <p>{{ comment.content }}</p>
            </div>
            <div class="actions">
              <a class="like">
                <i class="star icon"></i>
                <span style="margin-left: -4px">我喜欢这个！</span>
              </a>
            </div>
          </div>
          <div v-if="comment.comments" v-for="subComment in comment.comments" :key="subComment.order" class="comments">
            <div class="comment">
              <a class="avatar">
                <img :src="subComment.author.avatar">
              </a>
              <div class="content">
                <a class="author">{{ subComment.author.nickname }}</a>
                <div class="metadata">
                  <span class="date">{{ subComment.time }}</span>
                  <div class="rating have-hover-color">
                    <i class="star icon"></i>{{ subComment.rate }} 喜爱
                  </div>
                </div>
                <div class="text">
                  <p>{{ subComment.content }}</p>
                </div>
                <div class="actions">
                  <a class="like">
                    <i class="star icon"></i>
                    <span style="margin-left: -4px">我喜欢这个！</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .outer {
    height: 92%;
    width: 100%;
  }

  .top-comments {
    padding: 12px;
    margin: 0;
  }

  .outer-comment {
    margin-top: -6px !important;
  }

  .comment .content .actions {
    margin-top: -3px;
  }

  .comment .content .actions:hover * {
    color: var(--theme-color);
  }

  .article-title,
  .article-title .link {
    font-size: 1em;
    margin: 0;
    color: rgba(0, 0, 0, .5);
  }

  .article-title .link:hover {
    color: var(--theme-color);
  }

</style>

<script>
  import {
    FakeData
  } from '../utils/utils'

  export default {
    data: function () {
      let author = FakeData.author
      let article = FakeData.article
      return {
        comments: [{
          order: 0,
          author: author,
          article: article,
          comments: [{
            order: 0,
            author: author,
            content: "一条评论",
            time: "不久前",
            rate: 1230
          }],
          content: "一条评论",
          time: "不久前",
          rate: 1993
        }]
      }
    }
  }

</script>
