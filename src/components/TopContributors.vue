<template>
  <div class="outer have-border have-hover-border">
    <div class="top-contributors">
      <div class="top">
        <p class="identifier">Top 1</p>

        <div class="content">
          <div class="author">
            <img class="avatar-img" :src="data.top.avatar">
          </div>
          <div class="info">
            <router-link :to="'/user/' + data.top.id" class="router-link" target="_blank">
              <div class="inner">
                <p class="nickname">{{ data.top.nickname }}</p>
                <div class="metadata">
                  <p>
                    <i class="file icon"></i> 总文章数：{{ data.top.counter.totalArticles }}</p>
                  <p>
                    <i class="heart icon"></i> 总喜爱数：{{ data.top.counter.totalLikes }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="ui divider"></div>
      <div>
        <div class="ui two column grid authors">
          <div class="eight wide column first">
            <div v-for="(row, index) in data.authors" v-if="index < 4" :key="row.order" class="row authors-inner-row">
              <span class="identifier">{{ index + 2 }}.</span>
              <router-link :to="'/user/' + row.id" target="_blank" class="router-link">
                <img class="avatar-img" :src="row.avatar">
                <div class="info">
                  <span class="nickname">{{ row.nickname }}</span>
                  <div class="metadata">
                    <span>
                      <i class="outline file icon"></i>{{ row.counter.totalArticles }}
                    </span>
                    <span>
                      <i class="outline heart icon"></i>{{ row.counter.totalLikes }}
                    </span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <div class="eight wide column second">
            <div id="articles-divider-outer">
              <div id="articles-divider"></div>
            </div>
            <div v-for="(row, index) in data.authors" v-if="index >= 4" :key="row.order" class="row authors-inner-row">
              <span class="identifier">{{ index + 2 }}.</span>
              <router-link :to="'/user/' + row.id" target="_blank" class="router-link">
                <img class="avatar-img" :src="row.avatar">
                <div class="info">
                  <span class="nickname">{{ row.nickname }}</span>
                  <div class="metadata">
                    <span>
                      <i class="outline file icon"></i>{{ row.counter.totalArticles }}
                    </span>
                    <span>
                      <i class="outline heart icon"></i>{{ row.counter.totalLikes }}
                    </span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .router-link {
    color: black;
  }

  .router-link:hover {
    color: var(--theme-color) !important
  }

  #articles-divider {
    height: .5px;
    background-color: rgba(0, 0, 0, 0.16);
    transform: rotate(90deg);
    position: relative;
    top: 75px;
    left: -84px;
    width: 152px;
  }

  .authors-inner-row .identifier {
    position: relative;
    top: -8px;
    font-weight: 600;
  }

  .authors .second {
    margin-top: -1px;
    margin-left: -6px;
  }

  .authors-inner-row .metadata {
    opacity: .7;
    display: inline-block;
    position: relative;
    top: -8px;
    left: 10px;
  }

  @media(max-width: 767px) {
    .authors-inner-row .metadata {
      display: none
    }
  }

  .authors-inner-row .info .nickname {
    position: relative;
    overflow: hidden;
    top: -8px;
    margin-left: 4px;
  }


  .authors-inner-row .info {
    display: inline-block;
  }

  .authors-inner-row {
    padding-top: 3px;
    padding-left: 3px;
    padding-bottom: 0;
  }

  .authors-inner-row .avatar-img {
    width: 30px;
    height: 30px;
  }

  .top .identifier {
    font-size: 22px;
    font-weight: 600;
    margin-top: -6px;
    margin-bottom: 6px;
  }

  .top .content {
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .top .content .info {
    display: inline-block;
  }

  .top .content .info .inner {
    position: relative;
    top: -15px;
    margin-left: 12px;
    text-align: left;
  }

  .top .content .info .inner .metadata {
    margin-top: -4px;
    color: rgba(0, 0, 0, 0.6);
  }

  .top .content .info .inner * {
    margin: 0px
  }

  .top .author {
    display: inline-block;
  }

  .top .content .author .avatar-img {
    width: 120px;
    height: 120px;
  }

  .top .content .info .nickname {
    font-size: 26px;
    font-weight: 500;
  }

  .avatar-img {
    border-radius: 50%;
  }

  .top-contributors {
    padding: 12px;
    margin: 0;
  }

  .divider {
    margin: 0
  }

  .outer {
    height: 92%;
    width: 100%;
  }

  .top {
    text-align: center;
    border-radius: 6px;
  }

</style>

<script>
  import {
    FakeData
  } from '../utils/utils'

  export default {
    data: function () {
      var _ = require('lodash')
      let author = FakeData.author
      let authorArray = Array()
      let data = {}
      author.joinTime = '2014-12-23'
      author.counter = {}
      author.counter.totalArticles = 23
      author.counter.totalLikes = 453

      data.top = _.cloneDeep(author)

      for (let i = 0; i < 8; i++) {
        author.order = i
        authorArray.push(_.cloneDeep(author))
      }
      data.authors = []
      data.authors = authorArray
      return {
        data: data
      }
    }
  }

</script>
