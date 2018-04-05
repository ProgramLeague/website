<template>
  <div class="outer have-border have-hover-border">
    <div class="ui minimal comments top-comments">
      <div v-for="comment in comments" :key="comment.order" class="comment">
        <a class="avatar">
          <img :src="comment.author.avatar">
        </a>
        <div class="content">
          <a class="author">{{ comment.author.nickname }}</a>
          <div class="metadata">
            <span class="date">{{ comment.time }}</span>
          </div>
          <div class="text">
            <p>{{ comment.content }}</p>
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
              </div>
              <div class="text">
                <p>{{ subComment.content }}</p>
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

</style>

<script>
  import {
    FakeData
  } from '../utils/utils'

  export default {
    data: function () {
      let author = FakeData.author
      return {
        comments: [{
          order: 0,
          author: author,
          comments: [{
            order: 0,
            content: "一条评论",
            author: author,
            time: "不久前"
          }],
          content: "一条评论",
          time: "不久前"
        }]
      }
    }
  }

</script>
