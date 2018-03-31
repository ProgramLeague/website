<template>
  <div>
    <NavBar/>
    <Slide/>
    <div class="ui container content">
      <div id="stacks">
          <div>
              <span class="function-name">技术栈</span>
              <a class="function-more" target="_blank" href="">更多 >></a>
            </div>
            <StackList id="stack-list" />
          </div>

      <div class="ui vertical stripe segment">
        <ul id="article-cards">
          <ArticleCard v-for="articleCard in articleCards" :key="articleCard._key" :article="articleCard.article" :author="articleCard.author"
          />
        </ul>
          </div>
        </div>
    <Footer/>
  </div>
</template>

<style scoped>
  #stack-list {
    margin-top: 4px;
    margin-bottom: 6px;
  }

  #stacks {
    margin-left: 2.5%;
    margin-right: 2.5%;
    padding: 0;
  }

  .content {
    padding-top: 30px !important;
  }

  .function-name {
    color: rgba(0, 0, 0, 0.6);
    font-size: 23px;
    font-weight: 500;
  }

  .function-more {
    float: right;
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    font-weight: 400;
  }

  .function-more:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  @media(max-width: 767px) {
    #stacks {
      display: none;
    }
  }

  #article-cards {
    display: block;
    margin-top: -30px !important;
    list-style: none;
    margin-left: 1.5%;
    margin-right: 2.5%;
    padding: 0;
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
    data() {
      let nextCardId = 0
      return {
        articleCards: [{
          _key: nextCardId++,
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
        }, {
          _key: nextCardId++,
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
        }]
      }
    }
  }

</script>
