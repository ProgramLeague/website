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
        <div class="glide__slide" v-for="slide in slides" :key="slide.id">
          <div class="box" style="background-color: #34B67A;">
            <a :href="slide.href">
              <img :src="slide.img">
              <div class="info">
                <div class="title">
                  {{ slide.title }}
                </div>
                <div class="abstract">
                  {{ slide.abstract }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </ul>
    </div>

    <div class="glide__bullets"></div>

  </div>
</template>

<style scoped>
  .box {
    color: #fff;
    height: 350px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 6px;

    text-align: center;
  }

  .box img {
    width: 100%;
    height: auto;
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
    props: {
      slides: {
        type: Array,
        required: true
      }
    },
    mounted: function () {
      $("#Glide").glide({
        type: "carousel"
      })
    }
  }

</script>
