<template>
  <div class="product-detail">
    <div class="title-list">
      <van-icon name="arrow-left" @click="toBack"/>
      <div class="title-detail">商品详情</div>
      <a href="#">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAntJREFUWAntmT9Lw0AYxpvWTtVFUBCc+4dApTiImy1O6jfQTcHN0Q/h6OifTT+CTqL1E3QKLZ0FB8GphUJp6/PUvsc1TVWaXFIhB+3dvbnL+7unb5PLm0QiLrEC/1sBy40/GAysQqFw0u/3jy3LstFfdI9B/6HZbB542BPZbPYB9j2vY7/Z4K8Ff04ymbyt1+s36A/cc5K6AaBr+Xz+CbBXsG9NgdWnBNoe+duif3KQx+1AKYzBFgehrmDQG1Z5jhVWsdJ39yRTfdu2l3u93iGAL+kD/p8bjcaurvSCOGcYCGw6nd5wHOdTjoVVp1KphW63eyr+yEMu9K/FpkKCMUsjlY0CtlgsrnY6nWcg2Pgwjs/II1xssyhgyM6B/BmqrMMspVJpRYfNZDJlqH1PBuESHhUSkH94NQgzZglB2Ha7/YLmUFnC1mq1Dx7DFSchXOyzKIW/u+F+/wQ7jSQy4FlguYhIgGeFjQTYD2zowH5hQwUOAjY04KBgQwEOEtY4cNCwRoFNwBoDzuVyS9Nut3Tqpxi5cWDDsgmoib2BH1CZawQYG6hXbA/LAN+WjYw49Fur3ZrfE+nzAcpnsapum7H9iHljz3VGgGeEm5iGB919t9FISLidBNmPgYNU0+tcscJeqgRpm2uFmfYapb7Umuf6sgbKiRzdXCusZNUaMbAmhpGmUhj3/xY9eKU4jXj+5aTCIVwyXAEjJeTQiHpHDkZZC4dwCYsCxnbwlkZkCy+Yp5UBUdT0Tw76Fi7hmKuENsOAyo5g1xEOEwltBcwVcAIG32FSRVYUVU1YqHvkzqaOARMOsH95KWNkHfyDMWYZBgD1fCljxHF8Uk2BL8xJSqngKBzOAAAAAElFTkSuQmCC"
        >
      </a>
    </div>

    <div class="swipe">
      <van-swipe :autoplay="3000" @change="onChange">
        <van-swipe-item>
          <img
            src="https://fms-image.missfresh.cn/48d3886a0dda46b29d4da539aafbe286.jpg?iopcmd=thumbnail&type=4&width=640"
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://fms-image.missfresh.cn/2c9fdd18fdc94610b59d41c937fcb975.jpg?iopcmd=thumbnail&type=4&width=640"
            alt
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://fms-image.missfresh.cn/afce534a1e1d40a2bebf5df849d45196.jpg?iopcmd=thumbnail&type=4&width=640"
            alt
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://fms-image.missfresh.cn/307d5a290863457d982ae2e9c91fde46.jpg?iopcmd=thumbnail&type=4&width=640"
            alt
          >
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
      </van-swipe>
    </div>
    <div class="product-describe">
      <van-panel title="供港品质 甜脆出口11国" desc="供港烟台苹果4个760g起">
        <div class="product-describe-bottom">
          <div class="jiage">￥15.9</div>
          <div class="yishou">已售44536份</div>
        </div>
      </van-panel>
    </div>
    <div class="product-attrs">
      <span>· 产地烟台</span>
      <span>· 次日达</span>
      <span>· 实付满69包邮</span>
    </div>

    <div class="product-redpack">
      <div class="main">
        <img src="https://j-image.missfresh.cn/img_20171029215450695.png">
        <span class="share-product-text">
          该商品分享可领49减10红包
          <i></i>
        </span>
        <span class="go-share-btn">去分享></span>
      </div>
    </div>
    <div class="foot">
      <van-goods-action>
        <van-goods-action-mini-btn icon="chat-o" text="客服"/>
        <van-goods-action-mini-btn icon="cart-o" text="购物车"/>
        <van-goods-action-big-btn text="加入购物车"/>
        <van-goods-action-big-btn primary text="立即购买"/>
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },

  methods: {
    onChange(index) {
      this.current = index;
    },

    toBack() {
      this.$router.back();
    }
  }
};
</script>


<style lang="less">
@import "../styles/common/reset.less";
.product-detail {
  position: fixed;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  .title-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    padding: 0 15px;
    .van-icon {
      font-size: 22px;
    }
    .title-detail {
      height: 100%;
      line-height: 44px;
      border-bottom: 3px solid transparent;
      display: inline-block;
      box-sizing: border-box;
      border-bottom-color: #ff4891;
      color: #ff4891;
    }

    a {
      display: block;
      img {
        display: block;
        width: 22px;
        height: 22px;
      }
    }
  }
  .swipe {
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .custom-indicator {
      position: absolute;
      top: 220px;
      right: 20px;
      font-size: 16px;
      color: #ccc;
    }
  }
  .product-describe {
    padding-left: 2px;
    padding-top: 20px;
    span {
      font-size: 18px;
      color: #474245;
      font-weight: 700;
    }
    .van-cell__label {
      font-size: 16px;
      color: #474245;
    }
    .product-describe-bottom {
      padding-top: 15px;
      .jiage {
        float: left;
        padding-left: 20px;
        color: #ff4891;
        font-weight: 900;
      }
      .yishou {
        float: right;
        padding-right: 15px;
        color: #969696;
      }
    }
  }
  .product-attrs {
    padding-top: 45px;
    span {
      padding: 0 10px 0 10px;
      color: #262626;
      font-size: 12px;
    }
  }
  .product-redpack {
    padding: 5px 10px;
    width: 375px;
    height: 65px;

    .main {
      background-size: 100% 100%;
      border-radius: 6px;
      overflow: hidden;
      white-space: nowrap;
      padding: 13px 10px;
      img {
        float: left;
        display: block;
        height: 16px;
        padding-left: 15px;
        width: 28px;
      }
      .share-product-text {
        display: inline-block;
        vertical-align: middle;
        white-space: normal;
        width: 66%;
        color: #ff4891;
        font-size: 15px;
        padding-left: 6px;
      }
      .go-share-btn {
        font-size: 10px;
        color: #ff4891;
        position: relative;
      }
    }
  }
}
</style>
