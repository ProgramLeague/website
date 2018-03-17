<template>
  <div id="app">
    <NavBar/>
    <div class="ui container content">
      <Slide :slides="slides" />
      <div class="ui vertical stripe segment">
        <ul class="article-cards">
          <ArticleCard v-for="articleCard in articleCards" :key="articleCard.id" :info="articleCard" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .article-cards {
    display: block;
    margin-left: 1.5%;
    margin-right: 2.5%;
    padding: 0;
    list-style: none;
    /* margin-left: -20px; */
  }

</style>

<script>
  import Slide from './components/Slide'
  import NavBar from './components/NavBar'
  import ArticleCard from './components/ArticleCard'

  export default {
    name: 'App',
    components: {
      Slide,
      NavBar,
      ArticleCard
    },
    data() {
      let nextCardId = 0
      let nextSlideId = 0
      return {
        articleCards: [{
          id: nextCardId++,
          title: "吃荔枝对身体有好处",
          abstract: "就是有好处啦~",
          category: ["a", "b"],
          headerImg: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1",
          author: {
            id: "Alpha",
            avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            href: "/user/alpha"
          },
          href: "https://bing.cn"
        }, {
          id: nextCardId++,
          title: "吃荔枝对身体有好处",
          abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。",
          category: ["a", "b"],
          headerImg: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1",
          author: {
            id: "Beta",
            avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            href: "/user/beta"
          },
          href: "https://bing.cn"
        }],
        slides: [{
            id: nextSlideId++,
            title: "吃荔枝对身体有好处",
            abstract: "强身健体。太棒啦！~",
            img: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1",
            href: "https://bing.com"
          },
          {
            id: nextSlideId++,
            title: "吃荔枝对身体有好处",
            abstract: "这次绝对是真的。",
            img: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            href: "https://bing.com"
          }
        ]
      }
    }
  }

</script>
