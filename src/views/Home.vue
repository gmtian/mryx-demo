<template>
  <div>
    <Header></Header>

    <div id="body">
      <!-- 导航栏 -->
      <div class="category-nav-wrap">
        <div class="category-nav">
          <router-link
            tag="span"
            to="/"
            exact
            active-class="category-nav-item-active"
            v-for="category in categoryList"
            :key="category.internal_id"
          >{{ category.name }}</router-link>
        </div>
        <div class="category-nav-btn"></div>
      </div>

      <Selling></Selling>

    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Selling from '../components/Selling'
import axios from 'axios'

export default {

  data () {
    return {
      categoryList: []
    }
  },

  components: {
    Header,
    Selling
  },

  methods: {

    getCategoryList () {
      axios.get('/static/data.json').then(res => {
        let data = res.data
        if (data.code === 0) {
          this.categoryList = data.category_list
        } else {
          alert(data.station_code)
        }
      })
    }
  },

  created () {
    this.getCategoryList()
  }
}
</script>

<style lang="less">
@import "../styles/common/reset.less";

#body {
  width: 100%;
  position: relative;
  overflow-y: auto;
  margin-top: 40px;
  margin-bottom: 50px;
  .category-nav-wrap {
    position: fixed;
    top: 40px;
    width: 100%;
    height: 43px;
    border-bottom: 1px solid #e6e6e6;
    overflow: hidden;
    .category-nav {
      width: 89%;
      height: 100%;
      line-height: 43px;
      display: flex;
      flex-flow: nowrap;
      overflow-x: auto;
      align-items: center;
      background: #fff;
      white-space: nowrap;
      padding-left: 4px;
      span {
        display: inline-block;
        height: 100%;
        margin: 0 15px;
        color: #262626;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
        &.category-nav-item-active {
          color: #ff4891;
          border-bottom: 2px solid #ff4891;
          margin: 0 15px;
        }
      }
    }
    .category-nav-btn {
      width: 42px;
      height: 42px;
      position: absolute;
      right: 0;
      top: 0;
      background-color: #fff;
      background: #fff url(../images/home/dropdown.png) no-repeat center;
      background-size: 14px;
      z-index: 15;
      background-position-y: 50%;
    }
  }
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
}
</style>
