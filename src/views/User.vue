<template>
  <div class="main-user">
    <div class="use-nologin">
      <router-link tag="span" to="/login">用户登录</router-link>
    </div>
    <div class="user-items">
      <ul>
        <router-link tag="li" to="/yue">
          <span>
            <i>0</i>
          </span>
          <span>余额</span>
        </router-link>
        <router-link tag="li" to="/hongbao">
          <span>
            <i>0</i>
          </span>
          <span>
            红包
            <i>
              <img src="https://j-image.missfresh.cn/img_20180205201631182.gif">
            </i>
          </span>
        </router-link>
        <router-link tag="li" to="/shangpin">
          <span>
            <i>0</i>
          </span>
          <span>商品券</span>
        </router-link>
        <router-link tag="li" to="/jifen">
          <span>
            <i></i>
          </span>
          <span>积分兑换</span>
        </router-link>
      </ul>
    </div>
    <div class="user-plus">
      <div class="plus-text">
        <div class="nav">
          <span class="left">会员权益</span>
          <span class="right">开通会员 ></span>
        </div>
        <div class="plus-money">
          成为优享会员，预计1年将为你
          <span class="pink">节省1121.30元</span>
        </div>
      </div>
    </div>
    <div class="plus-items">
      <ul>
        <li>
          <a href="#">
            <span>
              <img src="https://j-image.missfresh.cn/img_20171103161358679.png">
            </span>
            <span>会员专享价</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <img src="https://j-image.missfresh.cn/img_20171028202735028.png">
            </span>
            <span>1小时送达</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <img src="https://j-image.missfresh.cn/img_20171028202909231.png">
            </span>
            <span>专属客服</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <img src="https://j-image.missfresh.cn/img_20180105021607945.png">
            </span>
            <span>敬请期待</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="activities-wrap">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="https://j-image.missfresh.cn/img_20190413005154237.jpg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://j-image.missfresh.cn/img_20190406171133508.png">
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://j-image.missfresh.cn/img_20190331235644971.png">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="list">
      <div class="list-item">我的订单</div>
      <div class="list-item">我的地址</div>
      <div class="list-item">账户与安全</div>
      <div class="list-item">客户与帮助</div>
      <div class="list-item">意见反馈</div>
      <div class="list-item">关于我们</div>
    </div>
  </div>
</template>

<style lang="less">
.main-user {
  overflow-y: auto;
  .use-nologin {
    width: 375px;
    height: 100px;
    background: url(//static-as.missfresh.cn/frontend/user/static/img/my-bg.95ae718.png);
    background-size: 100%;
    padding-top: 63px;
    box-sizing: content-box;
    span {
      display: block;
      height: 38px;
      width: 85px;
      margin: 0 145px;
      line-height: 38px;
      font-size: 14px;
      color: #ff4891;
      text-align: center;
      border: 2px solid #ff4891;
      border-radius: 6px;
    }
  }
  .user-items {
    width: 375px;
    // height: 70px;
    padding: 12px 0;
    ul {
      display: flex;
      width: 375px;
      // height: 45px;
      color: #000;
      padding: 10px 0;

      li {
        display: flex;
        flex-direction: column;
        flex: 1;
        text-align: center;
        color: #4d4d4d;
        font-size: 13px;
        line-height: 25px;
        padding-left: 12.5px;
        span {
          display: block;
          i {
            position: relative;
            font-style: normal;
            img {
              position: absolute;
              height: 20px;
              width: 30px;
              right: 60px;
              top: -15px;
            }
          }
        }
      }
    }
  }
  .user-plus {
    width: 335px;
    height: 60px;
    padding: 0 15px;
    .plus-text {
      width: 100%;
      .nav {
        width: 100%;
        position: relative;
        .left {
          font-size: 20px;
          float: left;
        }
        .right {
          float: right;
          text-align: right;
          color: #969696;
          font-size: 13px;
          position: relative;
        }
      }
      .plus-money {
        width: 100%;
        height: 25px;
        line-height: 25px;
        color: #969696;
        font-size: 12px;
        overflow: auto;
        margin-top: 7px;
        .pink {
          color: #ff4891;
        }
      }
    }
  }
  .plus-items {
    width: 360px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-left: 15px;
    padding: 15px 0;
    ul {
      height: 54px;
    }
    li {
      width: 24%;
      float: left;
      height: 50px;
      a {
        display: block;
        width: 82.8px;
        height: 54px;
        color: #474245;
        text-decoration: none;
        display: block;
        text-align: center;
        font-size: 13px;
        span {
          display: block;
          img {
            height: 28px;
            width: 28px;
          }
        }
      }
    }
  }
  .activities-wrap {
    position: relative;
    .van-swipe {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      img {
        width: 375px;
        border-radius: 20px;
      }
    }
  }
  .list {
    min-height: 370px;
    height: 100%;
    .list-item {
      width: 350px;
      height: 51px;
      margin: 0 13px;
      line-height: 51px;
      border-bottom: 2px solid #f0f0f0;
      color: #262626;
      font-size: 15px;
    }
  }
}
</style>
