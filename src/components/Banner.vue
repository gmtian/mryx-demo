<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
        <img :src="item.path" alt>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  props: {
    banners: {
      type: Array
    }
  },

  data () {
    return {
      swiper: null
    }
  },

  updated () {
    if (!this.swiper) {
      this.swiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  height: 250px;
  img {
    display: block;
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background: #ff4891;
  }
}
</style>
