<template>
  <div class="main-category">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round"      @search="onSearch">
    <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-badge-group :active-key="activeKey" @change="onChange">
      <van-badge v-for="item in recommendList" :key="item.id" :title="item.name"/>
    </van-badge-group>

    <div class="m-right">
      <van-tabs>
        <van-tab v-for="item in navList" :title="item.name" :key="item.id"></van-tab>
      </van-tabs>
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
          <div slot="footer" >
            <van-button size="mini" v-if="item.flag" @click="fn1(item)">
              <img src="//static-as.missfresh.cn/frontend/item/static/img/new-cart.a16f026.png" >
            </van-button>
            <van-stepper v-model="item.num" @overlimit="fn2(item)" v-else/>
          </div>
        </van-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      active: 1,
      value: '',
      activeKey: 0,
      recommendList: [],
      navList: [],
      commodity: [],
      tianjia: '1'
    }
  },
  created () {
    axios.get('/static/category.json').then(result => {
      // console.log(result)
      this.recommendList = result.data.recommendList
      this.navList = result.data.navList
      this.commodity = result.data.commodity.map(item => {
        return Object.assign({}, item, { flag: true, num: 1 })
      })
    })
  },

  methods: {
    onSearch () {},
    onChange (key) {
      this.activeKey = key
    },
    fn1 (item) {
      item.flag = false
    },
    fn2 (item) {
      item.flag = true
    }
  }
}
</script>

<style lang="less">
.main-category {
  .van-badge-group {
    width: 23%;
    float: left;
  }
  .van-tabs--line{
    margin-left:86px;
  }
  .van-badge{
    line-height:15px;
    padding: 15px 12px;
  }
  .van-tab{
    padding:0px;
    line-height: 18px;
  }
  .van-card__tag{
    top: 88px;
    left: 14px;
  }
  .van-tag--mark{
    border-radius:8px 8px;
  }
  .van-card__origin-price{
    text-decoration:none;
    position: absolute;
    top: 50px;
    left: -4.6px;
  }
  .van-button--mini{
    height:50px;
  }
  .van-button::before{
    top:24px;
    background-color:transparent
  }
  .van-card__footer{
    position: absolute;
    top: 80px;
    right: 30px;
  }
  .van-card{
    padding-bottom: 50px;
  }
  .van-stepper{
    position: absolute;
    top: 11px;
    right: -22px;
    display: flex;
  }
  .m-list {
      width: 73%;
      float: left;
      position: fixed;
      left: 100px;
      height: 500px;
      overflow-y: auto;
    .van-card {
      background: #fff;
      .van-button {
        border: none;
      }
    }
  }
}

</style>
