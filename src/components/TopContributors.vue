<template>
  <div class="outer have-border have-hover-border">
    <div class="top-contributors">
      <div class="top">
        <div class="avatar">
          <img class="avatar-img" :src="data.top.avatar">
          <p class="nickname">{{ data.top.nickname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .outer {
    height: 92%;
    width: 100%;
  }

  .top {
    border-radius: 6px;
  }

  .top .avatar {
    width: 100%;
    height: 100px;
    text-align: center
  }

  .top .avatar .avatar-img {
    width: 100px;
    height: 100px;
  }

  .top .nickname {
    font-size: 20px;
    font-weight: 500;
  }

  .avatar-img {
    border-radius: 50%;
  }

  .top-contributors {
    padding: 12px;
    margin: 0;
  }

</style>

<script>
  import {
    FakeData
  } from '../utils/utils'

  export default {
    data: function () {
      let data = {}
      data.top = FakeData.author
      return {
        data: data
      }
    }
  }

</script>
