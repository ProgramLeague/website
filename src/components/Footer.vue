<template>
  <div class="footer">
    <div id="footer-content">
      <h3 class="ui header inverted prompt">Know us on</h3>

      <div class="icons">
        <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=3c5f0b075ea4ce03168c88454c14e261c081d707e15f60cd59ecd327f09f184f">
          <i class="icon qq link"></i>
        </a>
        <a target="_blank" href="https://github.com/ProgramLeague">
          <i class="icon github link"></i>
        </a>
      </div>
    </div>
    <p class="copyright">©. 2018. NoError(s). All reights reversed.</p>
  </div>
</template>

<style scoped>
  .footer {
    width: 100%;
    height: 200px;
    text-align: center;
    color: white;
    background-color: rgb(112, 112, 113);
    border-bottom: 6px solid var(--theme-color);
  }

  #footer-content {
    margin-top: 6px;
  }

  #footer-content .prompt {
    height: 50px;
    line-height: 50px;
    background: var(--theme-color);
    font-size: 26px;
    font-weight: 500;
  }

  #footer-content .icons {
    margin-left: 12px;
  }

  #footer-content .icon {
    display: inline-block;
    margin-right: 10px;
    font-size: 1.7em;
    color: white;

    border-radius: 500em !important;
    line-height: 2em !important;
    box-shadow: 0 0 0 .1em white inset;
    width: 2em !important;
    height: 2em !important;
  }

  .copyright {
    display: block;
    color: rgba(255, 255, 255, 0.5);
    height: 26px;
    line-height: 26px;
    margin-top: 50px;
    margin-bottom: 0;
  }

</style>

<script>
  export default {}

</script>
