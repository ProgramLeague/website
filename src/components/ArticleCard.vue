<template>
  <li class="outer">
    <a class="wrap-image" v-bind:href="info.href">
      <img v-bind:src="info.headerImg">
    </a>

    <div class="ui basic segment content">
      <a class="title" target="_blank" v-bind:href="info.href">{{ info.title }}</a>
      <p class="abstract">{{ info.abstract }}</p>

      <div class="author">
        <a class="avatar" v-bind:href="info.author.href">
          <img v-bind:src="info.author.avatar">
        </a>
        <div class="info">
          <div class="id">{{ info.author.id }}</div>
        </div>
      </div>
    </div>
  </li>
  <!-- <div class="ui card fluid borderless">
    <a class="image" >
      
    </a>
    <div class="content">
    <a class="header" v-bind:href="info.href"><h1>{{ info.title }}</h1></a>

      <div class="meta">
        <span class="category">{{ info.category.join(' ') }}</span>
      </div>
      <div class="description">
        {{ info.description }}
      </div>
    </div>
    <div class="extra content">
      <div class="right floated author">
        <img class="ui avatar image" v-bind:src="info.author.avatar">{{ info.author.id }}
      </div>
    </div>
  </div> -->
</template>

<style scoped>
  .author {
    height: 32px;
    line-height: 32px;
  }

  .author .avatar,
  img {
    width: 32px;
    height: 32px;
  }

  .author .avatar img {
    border: 1px solid #ddd;
    border-radius: 50%;
  }

  .author .info {
    display: inline-block;
    padding-left: 10px;
    margin-top: -20px;
    vertical-align: middle
  }

  .author .info .id {
    color: rgb(121, 121, 121)
  }

  .content {
    width: 100%;
    height: 100%;
  }

  .content .title {
    color: #333;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    font-size: 1.7em;
    font-weight: bold;
    line-height: 1.5;
  }

  .content .title:hover{
    color: var(--theme-color);
    text-decoration: underline
  }

  .content .abstract {
    color: #333;
    margin-top: 10px;
    line-height: 24px;
  }

  .outer {
    position: relative;
    width: 100%;
    margin: 0 0 17px;
    padding: 0 2px 17px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
  }

  .wrap-image {
    float: right;
    bottom: 40px;
    width: 150px;
    height: 120px;
    overflow: hidden;
    max-height: 120px;
  }

  .wrap-image img {
    width: auto;
    height: auto;
    max-height: 120px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }

</style>

<script>
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    }
  }

</script>
