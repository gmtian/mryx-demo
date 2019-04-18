<template>
  <div class="category-box">
    <!-- banner图 -->
    <Banner :banners="bannerList"></Banner>
    <!-- 优选严选 -->
    <div class="recommend-title">
      <div class="recommend-text" v-for="(item,index) in recommendList" :key="index">
        <img :src="item.image" alt>
        <em>{{ item.name }}</em>
      </div>
    </div>
    <!-- 本周新品 -->
    <div class="category-wrap">
      <div class="lantern-wrap">
        <div class="lantern-item" v-for="(item,index) in categoryList" :key="index">
          <img :src="item.image" alt>
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="card-wrap">
        <img v-for="(item,index) in cardList" :key="index" :src="item.image" alt>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="all-products">
      <div class="product-list-divider"
      v-for="(item, index) in dividerBanner"
      :key="index">
        <img :src="item.path" alt>
      </div>
      <div class="product-list">
        <div class="product-item" v-for="(item, index) in productList" :key="index">
          <router-link :to="{ name: 'detail',params: {id: item.stock }}">
            <img :src="item.image" alt>
          </router-link>
          <div class="item-detail">
            <router-link :to="{ name: 'detail',params: {id: item.stock }}" class="item-title">
              <p class="sub-title">{{ item.name }}</p>
              <p class="mess-title">{{ item.subtitle }}</p>
            </router-link>
            <router-link :to="{ name: 'detail',params: {id: item.stock }}" class="item-tag">
              <span>{{ item.product_tags }}</span>
            </router-link>
            <router-link :to="{ name: 'detail',params: {id: item.stock }}" class="item-price">
              <span class="price">￥ {{ item.vip_price_pro.price_down.price / 100 }}</span>
            </router-link>
            <div class="item-cart">
              <img :src="item.cart_image" v-if="item.flag" @click="fn1(item)" alt>
              <van-stepper v-model="item.num" @overlimit="fn2(item, index)" v-else />
            </div>
          </div>
        </div>
      </div>

      <div class="load-more" @click="loadMroe" v-if="pageNum < totalPage">点击加载更多...</div>
      <div class="load-more" v-else>已全部加载完毕</div>

    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import axios from 'axios'

export default {
  data () {
    return {
      bannerList: [],
      recommendList: [],
      categoryList: [],
      cardList: [],
      productList: [],
      dividerBanner: [],
      seen: false,
      pageNum: 1,
      pageSize: 2,
      total: 10
    }
  },

  components: {
    Banner
  },

  computed: {
    totalPage () {
      return Math.ceil(this.total / this.pageSize)
    }
  },

  methods: {
    getList () {
      axios.get('/static/data.json', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        let data = res.data
        if (data.code === 0) {
          this.total = data.total
          this.bannerList = data.product_list.banner
          this.recommendList = data.product_list.brands
          this.categoryList = data.product_list.categoryAreaV2.lanternArea
          this.cardList = data.product_list.categoryAreaV2.tileArea
          // this.productList = this.productList.concat(data.product_list.products)
          this.productList = data.product_list.products.map(item => {
            return Object.assign({}, item, { flag: true, num: 1 })
          })
          this.dividerBanner = data.product_list.divider_banner
        } else {
          alert(data.station_code)
        }
      })
    },

    loadMroe () {
      this.pageNum++
      this.getList()
    },

    fn1 (item) {
      item.flag = false
    },

    fn2 (item, index) {
      item.flag = true
    }
  },

  created () {
    this.getList()
  }
}
</script>

<style lang="less">
@import "../styles/common/reset.less";

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
    .load-more{
      height: 36px;
      line-height: 36px;
      text-align: center;
      color: #969696;
    }
  }
}
</style>
