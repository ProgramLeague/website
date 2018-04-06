<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="slide in slides" :key="slide._key">
        <div class="box">
          <router-link :to="/article/ + slide.slide.articleUid" target="_blank">
            <img :src="slide.slide.img">
          </router-link>
        </div>
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button swiper-button-prev">
      <span class="fa fa-angle-left"></span>
    </div>
    <div class="swiper-button swiper-button-next">
      <span class="fa fa-angle-right"></span>
    </div>
  </div>
</template>

<style>
  .swiper-button-next,
  .swiper-button-prev {
    background-image: none !important;
    display: none;
    line-height: 420px;
    position: absolute;
    top: 0;
    bottom: 0;
    color: rgba(255, 255, 255, 0.3);
    font-size: 80px;
    z-index: 900;
    text-decoration: none;
    font-weight: bolder;

    margin-left: 24px;
    margin-right: 24px;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: rgba(255, 255, 255, 0.85);
  }

  .swiper-container {
    margin-top: -2px;
    height: auto;
    max-height: 420px;
  }

  .swiper-pagination-bullet-active {
    border: 1px solid #fff;
    background: #fff;
  }

  .swiper-pagination-bullet {
    color: white;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    margin: 0 10px;
    cursor: pointer;
  }

  .box {
    color: #fff;
    overflow: hidden;
  }

  .box img {
    height: 100%;
    width: 100%;
  }

</style>

<script>
  import Swiper from 'swiper'
  import {
    immediateFileCommand
  } from '../../node_modules/_node-notifier@5.2.1@node-notifier/lib/utils';
  export default {
    mounted: function () {
      new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoHeight: false,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      })

      let swiperContainer = $('.swiper-container')
      let buttons = $(".swiper-button-next,.swiper-button-prev")

      swiperContainer.mouseenter(() => buttons.show())
      swiperContainer.mouseleave(() => buttons.hide())
    },
    data() {
      let nextSlideId = 0
      let img = "https://raw.githubusercontent.com/ProgramLeague/website/master/img/kafai-liu-485751-unsplash.jpg"
      return {
        slides: [{
            _key: nextSlideId++,
            slide: {
              articleUid: 9347,
              img: img,
            }
          },
          {
            _key: nextSlideId++,
            slide: {
              articleUid: 12353,
              img: img
            }
          }
        ]
      }
    }
  }

</script>
