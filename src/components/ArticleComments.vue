<template>
  <div>
    <div id="write-comment-button">
      <div class="ui blurring basic segment">
        <button @click="setReplyTo(article.title)" class="ui labeled icon positive large button" :class="{ disabled : !_logged}">
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
              <span class="to-reply" @click="setReplyTo('@' + comment.author.nickname)" style="margin-left: -4px">回复</span>
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

    <div id="new-comment">
      <div class="ui page dimmer">
        <div class="content">
          <div class="metadata">
            <i class="reply icon"></i>
            <span>回复：{{ _replyTo() }}</span>
          </div>
          <div id="comment-editor"></div>
          <div class="ui buttons">
            <button class="ui positive button submit">提交</button>
            <div class="or"></div>
            <button class="ui button cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #new-comment .content .buttons .submit {
    width: 140px;
  }

  #new-comment .content .buttons {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  #new-comment .metadata {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 4px;
    font-size: 18px;
  }

  #new-comment .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    color: black;
    text-align: left;
    padding-left: 134px;
    padding-right: 134px;
  }

  #write-comment-button .dimmer p a {
    color: var(--theme-color);
    text-decoration: underline;
  }

  #write-comment-button .dimmer p {
    font-size: 24px;
  }

  #write-comment-button .dimmer {
    z-index: 0;
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
  import {
    cloneDeep
  } from 'lodash'

  export default {
    data: function () {
      let comment2 = cloneDeep(FakeData.comment)
      comment2.order = 1
      return {
        data: [
          FakeData.comment, comment2
        ],
        VUEreplySpan: ""
      }
    },
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    mounted: function () {
      this.VUEreplySpan = this.article.title

      let buttonDimmer = $('#dimmer')
      let newCommentDimmer = $('#new-comment .dimmer')
      $('#new-comment .dimmer').dimmer({
        transition: 'slide up'
      })
      buttonDimmer.dimmer({
        on: 'hover'
      })
      buttonDimmer.dimmer('show')

      $('.comments .actions .to-reply').click(function () {
        newCommentDimmer.dimmer('show')
      })

      $('#write-comment-button .segment .button').click(function () {
        newCommentDimmer.dimmer('show')
      })
      $('#new-comment .buttons .cancel').click(function () {
        newCommentDimmer.dimmer('hide')
      })
      $('#new-comment .buttons .submit').click(function () {
        alert(editor.getHtml()) // TODO
      })

      require('codemirror/lib/codemirror.css') // codemirror
      require('tui-editor/dist/tui-editor.css'); // editor ui
      require('tui-editor/dist/tui-editor-contents.css'); // editor content
      require('highlight.js/styles/github.css'); // code block highlight

      var Editor = require('tui-editor');

      var editor = new Editor({
        el: document.querySelector('#comment-editor'),
        initialEditType: 'markdown',
        previewStyle: 'tab',
        height: '240px',
        language: 'zh_CN',
        exts: ['scrollSync']
      })
    },
    computed: {
      _logged: function () {
        return true;
        // TODO：写一个判断是否登录（Cookie）的通用.js。然后这儿调用。
      }
    },
    methods: {
      setReplyTo: function (value) {
        this.VUEreplySpan = value
      },
      _replyTo: function () {
        return this.VUEreplySpan
      }
    }
  }

</script>
