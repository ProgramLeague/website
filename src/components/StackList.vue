<template>
  <div class="this-content">
    <div v-for="stack in stacks" :key="stack._key" :style="{ backgroundColor: stack.color }" class="stack-item">
      <router-link :to="'/stack/' + stack.uid" target="_blank">
        <div>
          <img class="icon" :src="stack.icon">
        </div>
        <div class="name">
          <span>{{ stack.name }}</span>
        </div>
        <div class="description">
          <span class="need-fonts">{{ stack.description }}</span>
        </div>
      </router-link>
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

    border: 0;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.4);
    opacity: 0.9;
  }

  .stack-item:hover {
    opacity: 1;
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
    font-size: 1.3em;
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

  @media(max-width: 1140px) {
    .stack-item .description {
      font-size: .8em;
    }
  }

  @media(max-width: 995px) {
    .stack-item .description {
      display: none;
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
            name: "Java",
            description: "广泛使用的后端语言",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "teal"
          },
          {
            _key: nextStackId++,
            uid: 1,
            name: "Scala",
            description: "驱动大数据",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "thistle"
          },
          {
            _key: nextStackId++,
            uid: 2,
            name: "Kotlin",
            description: "更好的Java和的Scala",
            icon: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
            color: "skyblue"
          },
          {
            _key: nextStackId++,
            uid: 3,
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
