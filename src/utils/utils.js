export {
  FakeData,
  DataHandler
}
var _ = require('lodash');

var DataHandler = {}
DataHandler.handle = function (array) {
  let arrayN = array
  let counter = 0
  for (let element of arrayN) {
    element['_key'] = counter++
      console.log(element)
  }
  return arrayN
}

var article = {
  uid: 9347,
  title: "吃荔枝对身体有好处",
  abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。特别是儿童。",
  category: ["a", "b"],
  headerImg: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1"
}
var author = {
  id: "beta",
  nickname: "Beta",
  avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
  bio: "祈愿的碎片啊，请成为永恒的存在。"
}
var articles = function () {
  let articles = []
  let articleGroup = {}
  articleGroup.article = article
  articleGroup.author = author

  for (let i = 0; i < 6; i++)
    articles.push(_.cloneDeep(articleGroup))
  return DataHandler.handle(articles)
}.call()

var FakeData = {
  article,
  author,
  articles
}
