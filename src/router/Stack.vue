<template>
  <div>
    <NavBar/>
    <div class="header" :style="{ backgroundColor: info.color }">
      <div class="ui container">
        <div class="ui three column doubling stackable grid">
          <!-- 相关1 -->
          <div class="three wide column card" id="left-card" :style="{ backgroundColor: info.related.left.color }">
            <div class="meta">
              <div class="circle" :style="{ backgroundColor: info.related.left.color }"></div>
              <span class="type">{{ info.related.left.type }}</span>
            </div>
            <div class="image">
              <img :src="info.related.left.img">
            </div>
            <div class="content">
              <span class="header">{{ info.related.left.name }}</span>
              <p class="description">{{ info.related.left.description }}</p>
              <p class="relation">{{ info.related.left.relation }}</p>
            </div>
          </div>

          <!-- 主 -->
          <div class="nine wide column card" id="center-card" style="background-color: white">
            <div class="meta">
              <div class="circle" :style="{ backgroundColor: info.color }"></div>
              <span class="type">{{ info.type }}</span>
            </div>
            <div class="image">
              <img :src="info.headerImg">
            </div>
            <div class="content">
              <span class="header">{{ info.name }}</span>
              <p class="description">{{ info.description }}</p>
              <p class="introduction">{{ info.introduction }}</p>
            </div>
          </div>

          <!-- 相关2 -->
          <div class="three wide column card" id="right-card" :style="{ backgroundColor: info.related.right.color }">
            <div class="meta">
              <div class="circle" :style="{ backgroundColor: info.related.right.color }"></div>
              <span class="type">{{ info.related.right.type }}</span>
            </div>
            <div class="image">
              <img :src="info.related.right.img">
            </div>
            <div class="content">
              <span class="header">{{ info.related.right.name }}</span>
              <p class="description">{{ info.related.right.description }}</p>
              <p class="relation">{{ info.related.right.relation }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  .header {
    margin-top: -1px;
    padding-top: 20px;
    padding-bottom: 40px;

    margin-left: auto;
    margin-right: auto
  }

  .header .card {
    margin-top: 12px;
    margin-right: auto;
    margin-left: 5px;
    height: 310px;
    border-radius: 10px;
    text-align: center
  }

  /* TODO：需优化。先这么写着。 */

  .header .card .image {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 210px;
    overflow: hidden;
  }

  .header .card .meta {
    position: absolute;
    text-align: left;
    z-index: 2;
    top: 0px;
    left: 0px;
    padding: 10px;
    width: 100%;
  }

  .header .card .meta * {
    font-size: 15px !important;
    font-weight: 400;
    display: inline-block;
    height: 16px;
    line-height: 16px;
    vertical-align: middle;
  }

  .header .card .meta .type {
    font-size: 16px;
    height: 16px;
    line-height: 16px;
    opacity: .6;
  }

  .header .card .meta .circle {
    width: 14px;
    height: 14px;
    border-radius: 50%
  }

  .header .card .content {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 146px;
    font-size: 44px;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }

  .header .card .content .introduction {
    text-align: left;
    font-size: 14px;
    margin-top: -5px;
    padding-left: 12px;
    padding-right: 10px
  }

  .header .card .content .description {
    margin-top: 12px;
    font-size: 21px;
    font-weight: 500;
  }

  .header .card .content .relation {
    margin-top: -20px;
    font-size: 17px;
    font-weight: 300;
  }

  /* TODO：需优化。先这么写着。 */

  .header .card .image img {
    width: 100%;
    height: 100%;
  }

  #center-card .content .header {
    overflow: hidden;
    font-weight: 500;
  }

  #left-card,
  #right-card {
    overflow: hidden;
    font-weight: 300;
    margin-top: 50px;
    height: 240px;
  }

  #left-card .content .header,
  #right-card .content .header {
    font-size: 30px;
  }

</style>

<script>
  import NavBar from '../components/NavBar'
  import Footer from '../components/Footer'
  import ArticleCard from '../components/ArticleCard.vue'

  export default {
    name: 'Stack',
    components: {
      NavBar,
      Footer,
      ArticleCard
    },
    data() {
      let nextArticleId = 0
      return {
        articles: [{
          _key: nextArticleId++,
          article: {
            uid: 12323,
            title: "吃荔枝对身体有好处",
            abstract: "就是有好处啦~",
            category: ["a", "b"]
          },
          author: {
            id: "alpha",
            nickname: "Alpha",
            avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            bio: "祈愿的碎片啊，请成为永恒的存在。"
          }
        }],
        info: {
          uid: 1,
          id: "java",
          name: "Java",
          type: "语言",
          description: "广泛使用的后端语言",
          introduction: "由Sun开发，现归于Oracle。Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。",
          color: "teal",
          icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
          headerImg: "https://tse4-mm.cn.bing.net/th?id=OIP.2tNDQkxM3lM0oAS3oVxp3QHaEK&p=0&o=5&pid=1.1",
          related: {
            left: {
              uid: 199,
              name: "Oracle",
              type: "公司",
              description: "纯软件公司",
              relation: "Java的开发商",
              color: "rgb(129,211,123)",
              img: "https://tse4-mm.cn.bing.net/th?id=OIP.2tNDQkxM3lM0oAS3oVxp3QHaEK&p=0&o=5&pid=1.1"
            },
            right: {
              uid: 290,
              name: "JDK",
              type: "语言虚拟机",
              description: "Java虚拟机",
              relation: "Java的官方实现",
              color: "rgb(12,45,12)",
              img: "https://tse4-mm.cn.bing.net/th?id=OIP.2tNDQkxM3lM0oAS3oVxp3QHaEK&p=0&o=5&pid=1.1"
            }
          }
        }
      }
    }
  }

</script>
