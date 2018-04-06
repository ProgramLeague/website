<template>
  <div class="corner-bar">
    <div class="ad-switch">
      <button class="button">
        <div class="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 10 10" preserveAspectRatio="none">
            <path d="M 0 0 L 10 5.2" stroke-width="1.2" />
          </svg>
        </div>
        <span class="text">AD</span>
      </button>
    </div>
    <div class="b2t">
      <button class="button" data-tooltip="回到顶部" data-inverted="" data-position="left center">
        <i class="up arrow icon"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .corner-bar .ad-switch .button .text {
    width: 40px;
    font-weight: 600;
  }

  .corner-bar .ad-switch .button .svg {
    position: absolute;
    top: 26px;
    left: 12px;
    height: 20px;
    width: 20px;
    overflow: hidden;
    display: none;
    opacity: .7;
  }

  .corner-bar .ad-switch .button .svg svg {
    stroke: black
  }

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
    overflow: hidden;
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
      let adSwitch = $('.corner-bar .ad-switch')
      adSwitch.mouseenter(function () {
        $('.corner-bar .ad-switch .button .svg svg').css('stroke', 'var(--theme-color)')
      })
      adSwitch.mouseleave(function () {
        $('.corner-bar .ad-switch .button .svg svg').css('stroke', 'black')
      })
      adSwitch.click(function () {
        $('.corner-bar .ad-switch .button .svg').show()
      })
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
      });
    }
  }

</script>
