<template>
  <div class="outer have-border have-hover-border">
    <div class="top-contributors">
      <div class="top">
        <p class="identifier colored">Top 1</p>

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
                    <i class="file icon"></i>
                    <span> 总文章数：</span>
                    {{ data.top.counter['total-articles'] }}
                  </p>
                  <p>
                    <i class="diamond icon"></i>
                    <span> 总影响力：</span>
                    {{ data.top.counter.influence }}
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="ui divider"></div>
      <div class="authors-outer">
        <div class="authors">
          <div class="first">
            <div v-for="(row, index) in data.authors" :key="row.order" class="row authors-inner-row">
              <div class="identifier">
                <span :class="{ colored: index < 2 }">{{ index + 2 }}.</span>
              </div>
              <router-link :to="'/user/' + row.id" target="_blank" class="router-link">
                <img class="avatar-img" :src="row.avatar">
                <div class="info sub-no-margin">
                  <p class="nickname">{{ row.nickname }}</p>
                  <p class="bio">{{ row.bio }}</p>
                </div>
                <div class="metadata sub-no-margin">
                  <p>
                    <i class="outline file icon"></i>{{ row.counter['total-articles'] }}
                  </p>
                  <p>
                    <i class="fa fa-diamond"></i> {{ row.counter.influence }}
                  </p>
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

  .authors-inner-row .identifier {
    display: inline-block;
    position: relative;
    top: -8px;
    left: -3px;
    font-size: 24px;
    width: 18px;
    overflow: hidden;
  }

  .authors-inner-row .metadata {
    color: rgba(0, 0, 0, 0.7);
    float: right;
    height: 30px;
    line-height: 30px;
  }

  .authors-inner-row .info {
    display: inline-block;
    margin-left: 2px;
    width: 60% !important;
    overflow: hidden;
  }

  .authors-inner-row .info .bio {
    opacity: .7;
  }

  .authors-inner-row {
    padding-top: 3px;
    padding-left: 3px;
    padding-bottom: 0;
    margin-top: -1px;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  .authors-inner-row .avatar-img {
    width: 36px;
    height: 36px;
  }

  .authors {
    margin-top: -5px;
  }

  .authors-outer {
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 8px;
  }

  .top .identifier {
    font-size: 22px;
    font-weight: 600;
    margin-top: -6px;
    margin-bottom: 0;
  }

  .top .content {
    margin-bottom: 8px;
    white-space: nowrap;
  }

  .top .content .info {
    display: inline-block;
  }

  .top .content .info .inner {
    margin-left: 12px;
    text-align: left;
  }

  .top .content .info .inner .metadata {
    margin-top: -6px;
    font-size: 14px;
    opacity: .6;
  }

  @media (max-width: 991px) and (min-width: 767px) {
    .top .content .info .inner .metadata p span {
      display: none
    }

    .authors-inner-row .info {
      width: 100% !important;
    }

    .authors-inner-row .metadata {
      display: none;
    }
  }

  @media (max-width: 392px) {
    .authors-inner-row .metadata {
      display: none;
    }
  }

  .top .content .info .inner * {
    margin: 0px
  }

  .top .author {
    display: inline-block;
  }

  .top .content .author .avatar-img {
    width: 95px;
    height: 95px;
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

  .no-wrap {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  .sub-no-margin * {
    margin: 0;
  }

  .colored {
    color: orange
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
      author.counter['total-articles'] = 23
      author.counter.influence = 4930

      data.top = _.cloneDeep(author)

      for (let i = 0; i < 4; i++) {
        author.order = i
        authorArray.push(_.cloneDeep(author))
      }
      authorArray[2].nickname = "6alpha"
      data.authors = []
      data.authors = authorArray
      return {
        data: data
      }
    }
  }

</script>
