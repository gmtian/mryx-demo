<template>
  <div class="category-box">
    <!-- banner图 -->
    <Banner :banners="bannerList"></Banner>
    <!-- 优选严选 -->
    <div class="recommend-title">
      <div class="recommend-text">
        <img src="../images/home/03-yxyx.png" alt>
        <em>优鲜严选</em>
      </div>
      <div class="recommend-text">
        <img src="../images/home/04-axjc.png" alt>
        <em>安心检测</em>
      </div>
      <div class="recommend-text">
        <img src="../images/home/05-pfbz.png" alt>
        <em>赔付保障</em>
      </div>
    </div>
    <!-- 本周新品 -->
    <div class="category-wrap">
      <div class="lantern-wrap">
        <div class="lantern-item">
          <img src="../images/home/06-bzxp.png" alt>
          <p>本周新品</p>
        </div>
        <div class="lantern-item">
          <img src="../images/home/07-yqyl.png" alt>
          <p>邀请有礼</p>
        </div>
        <div class="lantern-item">
          <img src="../images/home/08-meqd.png" alt>
          <p>每日签到</p>
        </div>
        <div class="lantern-item">
          <img src="../images/home/09-cdzq.png" alt>
          <p>凑单专区</p>
        </div>
        <div class="lantern-item">
          <img src="../images/home/10-kthy.png" alt>
          <p>开通会员</p>
        </div>
      </div>
      <div class="card-wrap">
        <img src="../images/home/12-xrtq.png" alt>
        <img src="../images/home/13-mrjg.png" alt>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="all-products">
      <div class="product-list-divider">
        <img src="../images/home/11-banner.jpg" alt>
      </div>
      <div class="product-list">
        <div class="product-item">
          <img src="../images/home/14-xjpg.jpg" alt>
          <div class="item-detail">
            <div class="item-title">
              <p class="sub-title">1个新疆阿克苏苹果大果190g起</p>
              <p class="mess-title">蜜汁甜 再一次回味初恋</p>
            </div>
            <div class="item-tag">
              <span>新人专享</span>
            </div>
            <div class="item-price">
              <span class="price">￥ 1.9</span>
            </div>
            <div class="item-cart">
              <img src="../images/home/17-listCart.png" alt>
            </div>
          </div>
        </div>
        <div class="product-item">
          <img src="../images/home/15-cjs.jpg" alt>
          <div class="item-detail">
            <div class="item-title">
              <p class="sub-title">新人-葱姜蒜组合包</p>
              <p class="mess-title">“用心”给你每一道菜加点料</p>
            </div>
            <div class="item-tag">
              <span>新人专享</span>
            </div>
            <div class="item-price">
              <span class="price">￥ 1.9</span>
            </div>
            <div class="item-cart">
              <img src="../images/home/17-listCart.png" alt>
            </div>
          </div>
        </div>
        <div class="product-item">
          <img src="../images/home/16-btc.jpg" alt>
          <div class="item-detail">
            <div class="item-title">
              <p class="sub-title">4个湖南冰糖橙440g起</p>
              <p class="mess-title">酸酸甜甜的湖南妹陀</p>
            </div>
            <div class="item-tag">
              <span>新人专享</span>
            </div>
            <div class="item-price">
              <span class="price">￥ 1.9</span>
            </div>
            <div class="item-cart">
              <img src="../images/home/17-listCart.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import axios from 'axios'

export default {
  data () {
    return {
      bannerList: []
    }
  },

  components: {
    Banner
  },

  methods: {
    getBannerList () {
      axios.get('/static/data.json').then(res => {
        let data = res.data
        if (data.code === 0) {
          this.bannerList = data.product_list.banner
        } else {
          alert(data.station_code)
        }
      })
    }
  },

  created () {
    this.getBannerList()
  }
}
</script>

<style lang="less">
.category-box {
  margin-top: 43px;
  overflow: auto;

  .recommend-title {
    width: 100%;
    height: 49px;
    line-height: 49px;
    display: flex;
    justify-content: space-around;
    .recommend-text {
      flex: 1;
      text-align: center;
      color: #4d4d4d;
      font-size: 12px;
      img {
        vertical-align: sub;
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
    }
  }
  .category-wrap {
    width: 100%;
    height: 226.58px;
    .lantern-wrap {
      width: 100%;
      height: 109px;
      display: flex;
      justify-content: space-around;
      .lantern-item {
        padding-top: 24px;
        img {
          display: block;
          width: 40px;
          padding-bottom: 6px;
          margin: auto;
        }
        p {
          color: #474245;
        }
      }
    }
    .card-wrap {
      width: 100%;
      height: 100px;
      box-sizing: border-box;
      padding: 0 15px;
      overflow: hidden;
      img {
        display: block;
        width: 170px;
        height: 100px;
      }
      img:first-child {
        float: left;
      }
      img:last-child {
        float: right;
      }
    }
  }
  .all-products {
    .product-list-divider {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .product-list {
      .product-item {
        width: 100%;
        height: 177px;
        overflow: hidden;
        padding: 22px 13.75px;
        border-bottom: 1px solid #f5f5f5;
        box-sizing: border-box;
        img {
          float: left;
          display: block;
          width: 120px;
          height: 120px;
          margin-left: 5px;
          margin-right: 15px;
        }
        .item-detail {
          float: right;
          position: relative;
          .item-title {
            .sub-title {
              font-size: 16px;
              color: #474245;
              width: 200px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .mess-title {
              font-size: 14px;
              color: #969696;
              width: 200px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
          .item-tag {
            display: inline-block;
            border-radius: 2px;
            border: 1px solid #c6c6c6;
            margin-right: 5px;
            padding: 0 2px;
            background-color: rgb(255, 255, 255);
            border-color: rgb(245, 159, 193);
            margin-bottom: 20px;
            span {
              font-size: 12px;
              height: 14px;
              line-height: 14px;
              color: rgb(245, 159, 193);
            }
          }
          .item-price {
            margin-bottom: 10px;
            .price {
              color: rgb(255, 72, 145);
              font-size: 16px;
            }
          }
          .item-cart {
            position: absolute;
            right: 0;
            top: 74px;
            img {
              display: block;
              width: 45px;
              height: 45px;
            }
          }
        }
      }
    }
  }
}
</style>
