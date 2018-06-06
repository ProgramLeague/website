<template>
  <div class="ui page dimmer" id="login-model">
    <div class="content">
      <i class="fa fa-close fa-2x close-button" aria-hidden="true"></i>
      <div class="title">
        <i class="fa fa-sign-in" aria-hidden="true" style="margin-right: 2px"></i>
        <span>登录到NoError(s)</span>
      </div>
      <form class="ui form">
        <div class="field">
          <label>用户名或注册邮箱</label>
          <input name="uid" placeholder="别乱来！" type="text">
        </div>
        <div class="field">
          <label>密码
            <a class="forget" href="">忘记密码？</a>
          </label>
          <input name="password" placeholder="你猜我猜不猜？" type="password">
        </div>
        <div class="inline field">
          <div class="ui checkbox">
            <input type="checkbox" name="checkbox">
            <label>15天内免登录</label>
          </div>
        </div>
        <div class="ui fluid positive icon submit button">走起！~</div>
        <div class="ui error message"></div>
      </form>

      <!-- TODO：合作网站登录 -->
    </div>
  </div>
</template>
<style scoped>
  .content .close-button {
    color: black;
    font-size: 22px;
    position: absolute;
    right: 16px;
    top: 12px;
    cursor: pointer;
  }

  .content .form .forget {
    float: right;
  }

  .content .title {
    margin-bottom: 14px;
    color: black;
  }

  .content .form {
    margin-left: 16px;
    margin-right: 16px;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    /* 这居中丑死了 就没有什么好看的方案么 */
    width: 360px;
    background-color: white;
    border-radius: 14px;
    padding: 18px;
  }

  #login {
    position: relative;
  }

</style>
<script>
  export default {
    mounted: function () {
      $('#login-model .content .form').form({
        on: 'blur',
        inline: true,
        fields: {
          uid: {
            identifier: 'uid',
            rules: [{
              type: 'empty',
              prompt: '请键入您的用户名或注册邮箱 =^_^='
            }]
          },
          password: {
            identifier: 'password',
            rules: [{
              type: 'regExp[/^[\x00-\xff]{6,16}$/]',
              prompt: '请键入合法的密码！要求均为单字节字符，6-16位（´□｀川）'
            }]
          }
        }
      })
      $('.content .close-button').click(function () {
        $('#login-model').dimmer('hide')
      })
    }
  }

</script>
