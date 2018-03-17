<template>
  <div id="Glide" class="glide">

    <div class="glide__arrows">
      <button class="glide__arrow prev" data-glide-dir="<">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
      <button class="glide__arrow next" data-glide-dir=">">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </button>
    </div>

    <div class="glide__wrapper">
      <ul class="glide__track">
        <div class="glide__slide" v-for="slide in slides" :key="slide._key">
          <div class="box" style="background-color: #34B67A;">
            <router-link :to="/article/ + slide.slide.articleUid" target="_blank">
              <img :src="slide.slide.img">
              <div class="info">
                <div class="title">
                  {{ slide.slide.title }}
                </div>
                <div class="abstract">
                  {{ slide.slide.abstract }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </ul>
    </div>

    <div class="glide__bullets"></div>

  </div>
</template>

<style scoped>
  .glide {
    margin-top: 20px;
    height: auto
  }

  .box {
    color: #fff;
    height: 350px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 6px;
    overflow: hidden;

    text-align: center;
  }

  .box img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }

  .box .info {
    position: absolute;
    text-align: left;
    bottom: 15px;
    line-height: 30px;
    padding-left: 20px;
  }

  .box * {
    color: #fff;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }

  .box .title {
    font-size: 2.4em;
  }

  .box .abstract {
    font-size: 1.3em
  }

</style>

<script>
  export default {
    mounted: function () {
      $("#Glide").glide({
        type: "carousel"
      })
    },
    data() {
      let nextSlideId = 0
      return {
        slides: [{
            _key: nextSlideId++,
            slide: {
              articleUid: 9347,
              title: "吃荔枝对身体有好处",
              abstract: "强身健体。太棒啦！~",
              img: "https://tse1-mm.cn.bing.net/th?id=OIP.3iTMNkANw-FFI-x8vJqD4wHaDF&p=0&o=5&pid=1.1",
            }
          },
          {
            _key: nextSlideId++,
            slide: {
              articleUid: 12353,
              title: "吃荔枝对身体有好处",
              abstract: "这次绝对是真的。",
              img: "http://www.semantic-ui.cn/examples/assets/images/avatar/nan.jpg",
              uid: 12323
            }
          }
        ]
      }
    }
  }

</script>
