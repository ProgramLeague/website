<template>
  <div class="corner-bar">
    <div class="b2t">
      <button class="button" data-balloon="回到顶部" data-balloon-pos="left">
        <i class="up arrow icon"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .corner-bar>div>button {
    height: 44px;
    width: 44px;
  }

  .corner-bar {
    position: fixed;
    bottom: 12px;
    right: 12px;
    z-index: 400;
  }

  .corner-bar button {
    opacity: .7;
    margin-top: 10px;
    background-color: white;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.4);
  }

  .corner-bar button * {
    margin-left: auto;
    margin-right: auto;
  }

  .corner-bar button:hover {
    opacity: 1;
    color: var(--theme-color);
    background-color: white;
    cursor: pointer;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.4);
  }

  .corner-bar .b2t {
    display: none
  }

</style>

<script>
  export default {
    mounted: function () {
      let b2t = $('.corner-bar .b2t')
      b2t.click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 600);
      })
      $(window).on('scroll', function () {
        let scrollValue = $(window).scrollTop();
        if (scrollValue > 600) {
          b2t.fadeIn();
        } else {
          b2t.hide();
        }
      })
    }
  }

</script>
