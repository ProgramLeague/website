<template>
  <div>
    <NavBar/>
    <div class="header" :style="{ backgroundImage: geopattern() }">
      <div class="ui container">
        <div class="icon stackable_">
          <img :src="info.icon" :alt="info.name">
        </div>
        <div class="content stackable_">
          <div class="metadata">
            <span class="type">{{ info.type }}</span>
          </div>
          <span class="header">{{ info.name }}：</span>
          <span class="description">{{ info.description }}</span>
          <p class="introduction" style="text-align: left">{{ info.introduction }}</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  .header .icon {
    margin-right: 14px;
    float: left;
  }

  .header .icon img {
    width: 124px;
    height: 124px;
    box-shadow: 0 2px 6px hsla(0, 0%, 0%, .2);
    border-radius: 4px;
  }

  @media(max-width: 767px) {
    .stackable_ {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    .header {
      text-align: center;
    }

    .header .content .metadata .type {
      display: none;
    }
  }

  .header .content .metadata .type {
    opacity: .6;
  }

  .header .content .header {
    font-size: 36px;
    line-height: 1;
    font-weight: bolder;
    background-color: transparent;
  }

  .header .content .description {
    font-size: 36px;
    font-weight: 100;
    line-height: 1;
  }

  .header .content .introduction {
    padding-top: 8px;
    font-size: 16px;
    line-height: 1.2;
  }

  .header .content {
    padding-left: 40px;
  }

  .header .container {
    position: relative;
    padding: 40px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 2px 3px 10px hsla(0, 0%, 0%, .4);
  }

  .header {
    position: relative;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: transparent;
  }

</style>

<script>
  import NavBar from '../components/NavBar'
  import Footer from '../components/Footer'
  import ArticleCard from '../components/ArticleCard.vue'

  var GeoPattern = require('geopattern')
  var _ = require('lodash')

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
          color: "#939",
          icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg"
        }
      }
    },
    methods: {
      geopattern: function () {
        let generators = ['plaid', 'hexagons', 'chevrons', 'mosaicSquares']
        return GeoPattern.generate('GitHub', {
          color: this.info.color,
          generator: _.sample(generators)
        }).toDataUrl()
      }
    }
  }

</script>
