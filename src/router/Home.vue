<template>
  <div>
    <NavBar/>
    <Slide/>
    <div class="content">
      <div id="stacks" class="narrow-hidden">
        <div>
          <span class="function-name">技术栈</span>
          <a class="function-more" target="_blank" href="">更多 >></a>
        </div>
        <StackList id="stack-list" />
      </div>

      <div v-for="column in columns" :key="column._key">
        <div class="parallax-window" data-parallax="scroll" :data-image-src="column.img" data-z-index="-1">

          <div class="link" v-if="column.to">
            <router-link :to="column.to" class="inner" target="_blank">
              <div class="text">
                <p class="title">{{ column.name }}</p>
                <p v-if="column.description" class="description">{{ column.description }}</p>
              </div>
            </router-link>
          </div>
          <template v-else>
            <div class="text">
              <p class="title">{{ column.name }}</p>
              <p v-if="column.description" class="description">{{ column.description }}</p>
            </div>
          </template>

        </div>

        <div class="ui container">
          <div class="article-list ui vertical stripe segment content">
            <!-- TODO：显示问题。 <span class="function-name narrow-hidden">最新文章</span> -->
            <div class="article-cards ui three column stackable grid">
              <ArticleCard class="five wide column" v-for="article in column.articles" :key="article._key" :article="article.article" :author="article.author"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  .parallax-window {
    width: 100%;
    height: 200px;
    line-height: 200px;
    margin-bottom: 40px;
    margin-top: 40px;
    text-align: center;
  }


  .parallax-window .text .title {
    color: white;
    opacity: .86;
    font-size: 54px;
    font-weight: 500;
    height: 200px;
    line-height: 200px;
    text-shadow: 5px 5px 6px hsla(0, 0%, 0%, 0.4);
  }

  .parallax-window .text .description {
    margin-top: -122px;
    color: hsla(0, 0%, 100%, 0.7);
    font-size: 20px;
    text-shadow: 4px 4px 6px hsla(0, 0%, 0%, 0.4);
  }

  #stack-list {
    margin-top: 4px;
    margin-bottom: 6px;
  }

  #stacks {
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 40px;
    padding: 0;
  }

  .content {
    margin-top: 20px !important;
    vertical-align: bottom;
  }

  .article-list {
    margin-top: 24px !important;
    margin-left: 2%;
  }

  .function-name {
    color: rgba(0, 0, 0, 0.6);
    font-size: 23px;
    font-weight: 500;
    height: 20px;
    line-height: 20px;
  }

  .function-more {
    float: right;
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
  }

  .function-more:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  @media(max-width: 767px) {
    .narrow-hidden {
      display: none;
    }
  }

  .article-cards {
    margin-top: -30px !important;
    list-style: none;
    margin-left: 1.5%;
    margin-right: 2.5%;
    padding: 0;
  }

  .article-cards * {
    display: inline-block;
  }

</style>

<script>
  import Slide from '../components/Slide.vue'
  import NavBar from '../components/NavBar'
  import Footer from '../components/Footer.vue'
  import ArticleCard from '../components/ArticleCard'
  import StackList from '../components/StackList.vue'

  export default {
    name: 'Home',
    components: {
      Slide,
      NavBar,
      ArticleCard,
      StackList,
      Footer
    },
    mounted: function () {
      let link = $('.parallax-window .link')
      let title = $('.parallax-window .text .title')
      let window = $('.parallax-window')

      link.mouseenter(() => {
        title.animate({
          opacity: 1,
          fontSize: "64px"
        }, 400)
        window.css({
          boxShadow: "0 2px 6px 0 hsla(0, 0%, 0%, 0.4)"
        })
      })

      link.mouseleave(() => {
        title.animate({
          opacity: .86,
          fontSize: "54px"
        }, 300)
        window.css({
          boxShadow: "none"
        })
      })
    },
    data() {
      let nextColumnId = 0
      let nextArticleId = 0
      let img = "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1"
      let articles = [{
        _key: nextArticleId++,
        article: {
          uid: 9347,
          title: "吃荔枝对身体有好处",
          abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。特别是儿童。",
          category: ["a", "b"],
          headerImg: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1"
        },
        author: {
          id: "beta",
          nickname: "Beta",
          avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
          bio: "祈愿的碎片啊，请成为永恒的存在。"
        }
      }, {
        _key: nextArticleId++,
        article: {
          uid: 9347,
          title: "吃荔枝对身体有好处",
          abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。特别是儿童。",
          category: ["a", "b"],
          headerImg: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1"
        },
        author: {
          id: "beta",
          nickname: "Beta",
          avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
          bio: "祈愿的碎片啊，请成为永恒的存在。"
        }
      }, {
        _key: nextArticleId++,
        article: {
          uid: 9347,
          title: "吃荔枝对身体有好处",
          abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。特别是儿童。",
          category: ["a", "b"],
          headerImg: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1"
        },
        author: {
          id: "beta",
          nickname: "Beta",
          avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
          bio: "祈愿的碎片啊，请成为永恒的存在。"
        }
      }, {
        _key: nextArticleId++,
        article: {
          uid: 9347,
          title: "吃荔枝对身体有好处",
          abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。特别是儿童。",
          category: ["a", "b"],
          headerImg: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1"
        },
        author: {
          id: "beta",
          nickname: "Beta",
          avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
          bio: "祈愿的碎片啊，请成为永恒的存在。"
        }
      }, {
        _key: nextArticleId++,
        article: {
          uid: 9347,
          title: "吃荔枝对身体有好处",
          abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。特别是儿童。",
          category: ["a", "b"],
          headerImg: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1"
        },
        author: {
          id: "beta",
          nickname: "Beta",
          avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
          bio: "祈愿的碎片啊。祈愿的碎片啊。祈愿的碎片啊。祈愿的碎片啊。"
        }
      }]
      return {
        columns: [{
          _key: nextColumnId++,
          name: '编程',
          description: '一种崭新的装逼方式。',
          img: img,
          articles: articles
        }, {
          _key: nextColumnId++,
          name: 'beta',
          description: "啦啦啦",
          img: img,
          to: '/stack/all',
          articles: articles
        }]
      }
    }
  }

</script>
