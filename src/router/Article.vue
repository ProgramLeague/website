<template>
  <div>
    <NavBar/>
    <div class="header-img">
      <img v-bind:src="article.headerImg">
    </div>
    <div class="ui container">
      <div class="content">
        <div class="ui basic segment aligned">
          <h1 class="title">{{ article.title }}</h1>
          <div class="author">
            <router-link :to="'/user/' + author.id" class="avatar" target="_blank">
              <img v-bind:src="author.avatar">
            </router-link>
            <div class="info">
              <router-link :to="'/user/' + author.id" target="_blank">
                <div class="nickname">{{ author.nickname }}</div>
                <div class="bio">{{ author.bio }}</div>
              </router-link>
            </div>
          </div>
        </div>

        <div id="article-markdown" class="ui basic segment aligned" v-html="article.content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #article-markdown {
    font-size: 16px;
    line-height: 1.8;
  }

  .title {
    font-size: 34px;
    font-weight: bold
  }

  .aligned {
    margin-left: -12px;
  }

  .header-img {
    text-align: center;
    margin-top: -18px;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    max-height: 440px;
    overflow: hidden;
  }

  .header-img img {
    display: block;
    margin: 16px auto 0;
    width: 690px;
  }

  @media (max-width: 690px) {
    .header-img img {
      margin-top: 0;
      width: 100%;
    }
  }

  .content * {
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }

  .content {
    width: 690px;
    margin: 10px auto;
  }

  .container {
    display: block;
  }

  .author {
    height: 44px;
    line-height: 44px;
  }

  .author .avatar,
  .author .avatar img {
    width: 42px;
    height: 42px;
  }

  .author .avatar img {
    border: 1px solid #ddd;
    border-radius: 50%;
  }

  .author .info {
    display: inline-block;
    height: 100%;
    margin-left: 6px;
    margin-bottom: 36px;
    line-height: 22px;
    vertical-align: middle
  }

  .author .info * {
    font-size: 16px
  }

  .author .info .nickname {
    color: black;
    font-weight: 500
  }

  .author .info .bio {
    color: rgba(0, 0, 0, 0.74)
  }

</style>

<script>
  import NavBar from '../components/NavBar'
  export default {
    name: 'Article',
    components: {
      NavBar
    },
    data() {
      return {
        article: {
          uid: 9347,
          title: "吃荔枝对身体有好处",
          abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。",
          category: ["a", "b"],
          headerImg: "http://e.hiphotos.baidu.com/image/pic/item/b151f8198618367a266645d32c738bd4b21ce5d5.jpg",
          content: "<p>对对对，就是这样。</p> <p>asdsd</p>"
        },
        author: {
          id: "beta",
          nickname: "Beta",
          avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
          bio: "祈愿的碎片啊，请成为永恒的存在。"
        }
      }
    }
  }

</script>
