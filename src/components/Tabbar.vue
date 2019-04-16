<template>
  <van-tabbar
  v-model="active"
  active-color="#ff4891">
    <van-tabbar-item icon="home-o" to='/home' >首页</van-tabbar-item>
    <van-tabbar-item icon="search" to='/sort' >分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to='/cart' >购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to='/center' >我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
