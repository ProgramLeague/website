<template>
  <div class="this-content">
    <div v-for="stack in stacks" :key="stack._key" :style="{ backgroundColor: stack.color }" class="stack-item">
      <div>
        <img class="icon" :src="stack.icon">
      </div>
      <div class="name">
        <span class="need-fonts">{{ stack.name }}</span>
      </div>
      <div class="description">
        <span class="need-fonts">{{ stack.description }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .this-content {
    margin-top: 24px;
  }

  .stack-item {
    height: 40px;
    width: 100%;
    border-radius: 6px;
    margin-top: 8px;
  }

  .stack-item .icon {
    position: absolute;
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  .stack-item .name {
    font-size: 1.6em;
    line-height: 40px;
    margin-left: 45px;
    font-weight: 500;
    color: white;
  }

  .stack-item .description {
    font-size: 1em;
    float: right;
    color: white;
    margin-top: -30px;
    margin-right: 10px;
  }

</style>

<style>
  .need-fonts {
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }

</style>

<script>
  export default {
    data() {
      let nextStackId = 0;
      return {
        stacks: [{
            _key: nextStackId++,
            id: 0,
            name: "Java",
            description: "广泛使用的后端语言",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "teal"
          },
          {
            _key: nextStackId++,
            id: 1,
            name: "Scala",
            description: "驱动大数据",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "thistle"
          },
          {
            _key: nextStackId++,
            id: 2,
            name: "Kotlin",
            description: "更好的Java和的Scala",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "skyblue"
          },
          {
            _key: nextStackId++,
            id: 3,
            name: "Haskell",
            description: "拉丁语般",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "royalblue"
          }
        ]
      }
    }
  }

</script>
