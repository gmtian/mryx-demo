<template>
  <van-tabbar v-model="active" active-color="#ff4891">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/cart" v-if="catNum" :info="catNum">购物车</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/cart" v-else>购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      active: this.$route.meta.tabNumber
    }
  },

  computed: {
    ...mapGetters('cat', [
      'catNum'
    ])
  }
}
</script>
