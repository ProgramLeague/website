<template>
  <div class="ui equal width grid stackable container">
    <router-link :to="'/stack/' + stack.id" target="_blank" v-for="stack in stacks" :key="stack._key" :style="{ backgroundColor: stack.color }"
      class="stack-item column">
      <div>
        <img class="icon" :src="stack.icon">
      </div>
      <div class="name">
        <span>{{ stack.name }}</span>
        <div class="description">
          <span class="need-fonts">{{ stack.description }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
  .stack-item {
    display: inline-block;
    margin-right: 13px;
    border-radius: 6px;
    margin-top: 12px;

    border: 0;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.4);
    opacity: 0.9;
  }

  .stack-item:hover {
    opacity: 1;
  }

  .stack-item .icon {
    position: absolute;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .stack-item .name {
    font-size: 16px;
    margin-left: 45px;
    font-weight: 500;
    color: white;
  }

  .stack-item .name .description {
    float: right;
    width: 100%;
    overflow: hidden;
    color: white;
    opacity: .84;
    font-size: 16px;
  }

  .stack-item .description span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media(max-width: 1040px) {
    .stack-item .name * {
      font-size: 15px;
    }
  }

  @media(max-width: 991px) {
    .stack-item .description {
      display: none;
    }

    .stack-item .icon {
      margin-top: -5px;
      margin-left: -5px;
      width: 30px;
      height: 30px;
    }

    .stack-item .name {
      margin-left: 34px;
    }
  }

  @media(max-width: 767px) {
    .stack-item {
      margin-top: 10px !important;
      border-radius: 0;
    }

    .container {
      border-radius: 6px;
      overflow: hidden;
    }
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
            uid: 0,
            id: "java",
            name: "Java",
            description: "广泛使用的后端语言",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "teal"
          },
          {
            _key: nextStackId++,
            uid: 1,
            id: "scala",
            name: "Scala",
            description: "驱动大数据",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "thistle"
          },
          {
            _key: nextStackId++,
            uid: 2,
            ud: "kotlin",
            name: "Kotlin",
            description: "更好的Java",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "skyblue"
          },
          {
            _key: nextStackId++,
            uid: 3,
            id: "haskell",
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
