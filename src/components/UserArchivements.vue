<template>
  <div class="archivements have-border">
    <div class="ui equal width grid container">
      <div class="column influence">
        <div class="header">
          <i class="fa fa-diamond"></i>
          <span class="text">影响力</span>
        </div>
        <p class="value" :style="{ color: _color.influence }">{{ user.counter.influence.toLocaleString() }}</p>
      </div>

      <div class="row">
        <div class="column total-articles">
          <div class="header">
            <i class="outline file icon"></i>
            <span class="text">总文章数</span>
          </div>
          <p class="value" :style="{ color: _color.totalArticles }">{{ user.counter['total-articles'].toLocaleString() }}</p>
        </div>

        <div class="column total-likes">
          <div class="header">
            <i class="outline heart icon"></i>
            <span class="text">总赞数</span>
          </div>
          <p class="value" :style="{ color: _color.totalLikes }">{{ user.counter['total-likes'].toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @media (max-width: 767px) {
    .archivements .header .text {
      display: inline-block !important;
    }

    .archivements .value {
      font-size: 40px !important;
    }
  }

  @media (max-width: 1080px) {
    .archivements .header .text {
      display: none;
    }
  }

  .archivements .container .row {
    margin-top: -20px;
  }

  .archivements .value {
    font-size: 32px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.74);
  }

  .archivements .header {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }

  .archivements {
    text-align: center;
    padding: 20px 0 20px 0;
  }

  .icon {
    margin: 0;
  }

</style>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    computed: {
      _color: function () {
        let result = {};
        let handleRange = function (map, input, fallback) {
          for (let thisRange of map) {
            let range = thisRange[0].split('-').map((i) => parseInt(i))
            if (input >= range[0] && input < range[1])
              return thisRange[1]
          }
          return fallback
        }
        // influence
        result.influence = handleRange([
          ['0-500', 'rgba(0, 0, 0, 0.74)'],
          ['500-1000', '#65A5D1'],
          ['1000-2000', '#FFC273'],
          ['2000-3000', '#FF7373'],
          ['3000-4500', '#39E639'],
          ['4500-6000', '#00CC00'],
          ['6000-8000', '#0A64A4']
        ], this.user.counter.influence, '#FF4000')

        // total-articles
        result.totalArticles = handleRange([
          ['0-5', 'rgba(0, 0, 0, 0.74)'],
          ['5-10', '#65A5D1'],
          ['10-50', '#FFC273'],
          ['50-100', '#FF7373'],
          ['100-150', '#FF9000']
        ], this.user.counter['total-articles'], '#FF4000')

        // total-likes
        result.totalLikes = handleRange([
          ['0-100', 'rgba(0, 0, 0, 0.74)'],
          ['100-200', '#FF7373'],
          ['200-300', '#000000'],
          ['300-600', '#39E639'],
          ['600-1000', '#3E94DE'],
          ['1000-2000', '#00CC00'],
          ['2000-3000', '#0A64A4']
        ], this.user.counter['total-likes'], '#FF4000')
        return result
      }
    }
  }

</script>
