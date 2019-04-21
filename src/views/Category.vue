<template>
  <div class="main-category">
    <!-- 头部搜索 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <!-- 主体内容 -->
    <div class="content">
      <!-- 左侧导航 -->
      <van-badge-group :active-key="activeKey" @change="onChange">
        <van-badge v-for="item in recommendList" :key="item.id" :title="item.name"/>
      </van-badge-group>
      <!-- 右侧内容 -->
      <div class="m-right">
        <!-- 右侧导航 -->
        <van-tabs>
          <van-tab v-for="item in navList" :title="item.name" :key="item.id"></van-tab>
        </van-tabs>
        <!-- 商品列表 -->
        <div class="m-list">
          <van-card
            v-for="item in commodity"
            :key="item.id"
            :num="item.num"
            :tag="item.tag"
            :price="item.price"
            :desc="item.desc"
            :title="item.title"
            :thumb="item.thumb"
            :origin-price="item.origin"
          >
            <div slot="footer">
              <van-button size="mini" v-if="item.flag" @click="fn1(item)">
                <img src="//static-as.missfresh.cn/frontend/item/static/img/new-cart.a16f026.png">
              </van-button>
              <van-stepper v-model="item.num" @overlimit="fn2(item)" v-else/>
            </div>
          </van-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      active: 1,
      value: "",
      activeKey: 0,
      recommendList: [],
      navList: [],
      commodity: [],
      tianjia: "1"
    };
  },
  created() {
    axios.get("/static/category.json").then(result => {
      this.recommendList = result.data.recommendList;
      this.navList = result.data.navList;
      this.commodity = result.data.commodity.map(item => {
        return Object.assign({}, item, { flag: true, num: 1 });
      });
    });
  },

  methods: {
    onSearch() {},
    onChange(key) {
      this.activeKey = key;
    },
    fn1(item) {
      item.flag = false;
    },
    fn2(item) {
      item.flag = true;
    }
  }
}
</script>

<style lang="less">
.main-category {
  width: 100%;
  height: 100%;
  // position: absolute;
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
  overflow: hidden;
  .van-search {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background: #fff;
  }
  .content {
    display: flex;
    height: 562px; //不能写死，但是不知道怎么写
    margin-top: 54px;
    margin-bottom: 50px;
    overflow: hidden;
    .van-badge-group {
      height: 100%;
      width: 86px;
      overflow-y: auto;
    }
    .m-right {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      .van-tabs {
        height: 44px;
        padding-top: 0;
        .van-tab {
          min-width: 70px;
        }
      }
      .m-list {
        overflow-y: auto;
        left: 100px;
        .van-card {
          background: #fff;
          .van-card__tag {
            top: 88px;
            left: 14px;
          }
          .van-tag--mark {
            border-radius: 8px 8px;
          }
          .van-card__origin-price {
            text-decoration: none;
            position: absolute;
            top: 50px;
            left: -4.6px;
          }
          .van-button {
            border: none;
          }
        }
      }
    }
    .van-button--mini {
      height: 50px;
    }
    .van-button::before {
      top: 24px;
      background-color: transparent;
    }
    .van-card__footer {
      position: absolute;
      top: 80px;
      right: 30px;
    }
    .van-card {
      padding-bottom: 50px;
    }
    .van-stepper {
      position: absolute;
      top: 11px;
      right: -22px;
      display: flex;
    }
  }
}
</style>
