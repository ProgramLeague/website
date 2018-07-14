<template>
  <div class="outer have-border have-hover-border">
    <div class="ui comments top-comments">
      <div v-for="comment in comments" :key="comment.order">
        <div class="comment outer-comment">
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
              <a class="like">
                <i class="heart icon"></i>
                <span style="margin-left: -4px">我喜欢这个！</span>
              </a>
            </div>
          </div>
          <div v-if="comment.reply" v-for="subComment in comment.reply" :key="subComment.order" class="comments">
            <div class="comment">
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
                    <span style="margin-left: -4px">我喜欢这个！</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="article-title">在：
          <router-link class="link" :to="{ name: 'Article', params: { uid: comment.article.uid }}" target="_blank">
            {{ comment.article.title }}
          </router-link>
        </p>
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
  color: rgba(0, 0, 0, 0.5);
}

.article-title .link:hover {
  color: var(--theme-color);
}

.article-title {
  margin-top: 0px;
}
</style>

<script>
import { FakeData } from "../utils/utils";

export default {
  data: function() {
    return {
      comments: [FakeData.comment]
    };
  }
};
</script>
