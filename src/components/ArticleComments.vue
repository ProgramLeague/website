<template>
  <div>
    <div id="write-comment-button">
      <div class="ui blurring basic segment">
        <button class="ui labeled icon positive large button" :class="{ disabled : !_logged}">
          <i class="edit icon"></i>撰写新评论
        </button>
        <div v-if="!_logged" id="dimmer" class="ui inverted dimmer">
          <p>请先
            <a href="/login">登录/注册</a>
            后再执行此操作~
          </p>
        </div>
      </div>
    </div>
    <div class="ui threaded comments">
      <div v-for="comment in data" :key="comment.order" class="comment outer-comment">
        <router-link class="avatar" :to="'/user/' + comment.author.id" target="_blank">
          <img :src="comment.author.avatar">
        </router-link>
        <div class="content">
          <router-link class="author" :to="'/user/' + comment.author.id" target="_blank">
            {{ comment.author.nickname }}
          </router-link>
          <div class="metadata">
            <span class="date">{{ comment.time }}</span>
            <div class="rating have-hover-color">
              <i class="outline heart icon"></i>{{ comment.rate }} 喜爱
            </div>
          </div>
          <div class="text">
            <p>{{ comment.content }}</p>
          </div>
          <div class="actions">
            <a class="reply">
              <i class="reply icon"></i>
              <span style="margin-left: -4px">回复</span>
            </a>

            <a class="like">
              <i class="heart icon"></i>
              <span style="margin-left: -4px">喜欢</span>
            </a>
          </div>
        </div>
        <div v-if="comment.reply" v-for="subComment in comment.reply" :key="subComment.order" class="comments">
          <div class="comment">
            <router-link class="avatar" :to="'/user/' + subComment.author.id" target="_blank">
              <img :src="subComment.author.avatar">
            </router-link>
            <div class="content">
              <router-link class="author" :to="'/user/' + subComment.author.id" target="_blank">
                {{ subComment.author.nickname }}
              </router-link>
              <div class="metadata">
                <span class="date">{{ subComment.time }}</span>
                <div class="rating have-hover-color">
                  <i class="outline heart icon"></i>{{ subComment.rate }} 喜爱
                </div>
              </div>
              <div class="text">
                <p>{{ subComment.content }}</p>
              </div>
              <div class="actions">
                <a class="like">
                  <i class="heart icon"></i>
                  <span style="margin-left: -4px">喜欢</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #write-comment-button .dimmer p a {
    color: var(--theme-color);
    text-decoration: underline;
  }

  #write-comment-button .dimmer p {
    font-size: 24px;
  }

  #write-comment-button .button {
    width: 400px;
  }

  #write-comment-button {
    text-align: center;
    height: 80px;
    line-height: 80px;
  }

  .comments {
    margin-top: 34px;
  }

</style>

<script>
  import {
    FakeData
  } from '../utils/utils'

  export default {
    data: function () {
      return {
        data: [
          FakeData.comment, FakeData.comment
        ]
      }
    },
    mounted: function () {
      $('#dimmer').dimmer({
        on: 'hover'
      })

      $('#dimmer').dimmer('show')
    },
    computed: {
      _logged: function () {
        return false;
        // TODO：写一个判断是否登录（Cookie）的通用.js。然后这儿调用。
      }
    }
  }

</script>
