export {
  FakeData,
  DataHandler
}
import {
  cloneDeep
} from "lodash";

var DataHandler = {}
DataHandler.handle = function (array) {
  let counter = 0
  for (let element of array) {
    element['_key'] = counter++
  }
  return array
}

var img = "https://gitee.com/Ray-Eldath/Image/raw/master/Image/PL.website/kafai-liu-485751-unsplash.jpg"
var article = {
  uid: 9347,
  title: "吃荔枝对身体有好处",
  abstract: "荔枝含天然葡萄糖多，还有蛋白质、碳水化合物、多种维生素。补脑，健身，益智；但是多吃上火，会引起体内糖代谢紊乱，造成“荔枝病”(即低血糖)，轻者恶心，出汗，口渴无力；重者头晕，昏迷。荔枝可强身，适当吃并不会导致肥胖。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。荔枝新鲜上市，味虽美却不宜多吃，特别是儿童。特别是儿童。特别是儿童。特别是儿童。",
  tags: ["a", "b"],
  stack: {
    name: "Java",
    color: "red"
  },
  date: "2018-04-12",
  header: img,
  rate: {
    good: 125,
    bad: 20
  }
}
var author = {
  id: "beta",
  nickname: "Beta",
  avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
  bio: "祈愿的碎片啊，请成为永恒的存在。"
}
var comment = {
  order: 0,
  author: author,
  article: article,
  reply: [{
    order: 0,
    author: author,
    content: "一条评论",
    time: "不久前",
    rate: 1230
  }],
  content: "一条评论",
  time: "不久前",
  rate: 1993
}
var articles = function () {
  let articleGroups = []
  let articleGroup = {}
  articleGroup.article = article
  articleGroup.author = author

  for (let i = 0; i < 6; i++)
    articleGroups.push(cloneDeep(articleGroup))
  return DataHandler.handle(articleGroups)
}.call()

var detailed = {}
detailed.author = {
  id: "beta",
  nickname: "Beta",
  gender: 4,
  avatar: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
  header: img,
  bio: "祈愿的碎片啊，请成为永恒的存在。请成为永恒的存在！",
  introduction: "这只是一个<br/>用于测试的<strong>带细节用户信息</strong>",
  email: 'notexist@noerrors.io',
  'show-email': true,
  blog: 'http://ray-eldath.github.io/',
  counter: {
    'total-articles': 123,
    'total-likes': 540,
    influence: 9563
  },
  label: {
    admin: true,
    genie: ['Kotlin', 'Java']
  },
  links: {
    ZhiHu: 'https://www.zhihu.com/people/eldath-ray/activities',
    GitHub: 'https://github.com/Ray-Eldath',
    StackOverflow: 'https://stackoverflow.com/users/8711684/ray-eldath?tab=profile',
    Twitter: 'https://twitter.com/ray_eldath'
  },
  articles: []
}
detailed.author.articles[0] = cloneDeep(article)
detailed.author.articles[1] = cloneDeep(article)
detailed.author.articles[0].order = 0
detailed.author.articles[1].order = 1

var FakeData = {
  article,
  author,
  comment,
  detailed,
  articles,
  img
}
