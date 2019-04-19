<template>
  <div id="login">
    <div class="verify-phone">
      <div class="form-box">
        <input type="text" maxlength="11" placeholder="请输入账号" v-model="username">
        <i class="form-clear"></i>
      </div>
      <div class="form-box">
        <input type="password" maxlength="11" placeholder="输入密码" v-model="password">
        <i class="form-clear"></i>
      </div>
      <div class="form-protocol">
        <span class="form-protocol-checkbox"></span>
        <div class="form-protocol-label">
          <i>我已认真阅读、理解并同意</i>
          <i class="form-protocol-link">《每日优鲜用户协议》</i>
          <i>及</i>
          <i class="form-protocol-link">《每日优鲜隐私策略》</i>
        </div>
      </div>
      <div class="form-submit">
        <button class="form-submit-btn" @click="submit">登录</button>
      </div>
    </div>
    <h2 class="login-tip">为方便您及时查询订单信息，需要验证您的手机号来登录</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    submit () {
      window.isLogin = true
      var redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  }
}
</script>

<style lang="less">
@import "../styles/common/reset.less";

#login{
  padding-top: 114px;
  .verify-phone{
    padding: 0 30px 0 30px;
    .form-box{
      width: 100%;
      border-bottom: 1px solid #e6e6e6;
      padding: 5px 0;
      input{
        border: none;
        outline: none;
        font-size: 16px;
        color: #262626;
        height: 34px;
        width: 48%;
      }
      i{
        float: right;
        margin-top: 8px;
      }
    }
    .form-protocol{
      display: flex;
      margin-top: 35px;
      span{
        width: 12px;
        height: 12px;
        border-radius: 100%;
        border: 1px solid #B8B3BA;
        box-sizing: border-box;
      }
      .form-protocol-label{
        padding-left: 4px;
        font-size: 12px;
        line-height: 16px;
        color: #969696;
        .form-protocol-link{
          color: #ff4891;
        }
      }
    }
    .form-submit{
      margin-top: 14px;
      button{
        width: 100%;
        color: #fff;
        border: none;
        background: #ff4891;
        min-height: 40px;
        text-overflow: ellipsis;
        font-size: 16px;
        line-height: 42px;
        border-radius: 5px;
      }
    }
  }
  h2{
    padding: 15px 30px 0 32px;
    color: #969696;
    font-size: 12px;
  }
}
</style>
