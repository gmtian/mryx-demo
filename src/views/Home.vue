<template>
  <div>
    <Header></Header>

    <div id="body">
      <!-- 导航栏 -->
      <div class="category-nav-wrap">
        <div class="category-nav">
          <router-link
            tag="span"
            :to="category.href"
            exact
            active-class="category-nav-item-active"
            v-for="category in categoryList"
            :key="category.internal_id"
          >{{ category.name }}</router-link>

        </div>
        <div class="category-nav-btn"></div>
      </div>

      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import axios from 'axios'

export default {
  data () {
    return {
      categoryList: []
    }
  },

  components: {
    Header
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
}
</style>
