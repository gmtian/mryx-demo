<template>
  <div class="main-cart">
    <ul>
      <li v-for="cat in catList"
          :key="cat.stock">
        <van-card
          :price="cat.vip_price_pro.price_down.price / 100"
          :title="cat.name"
          :thumb="cat.image"

        >
          <div slot="footer">
            <van-stepper v-model="cat.num" @overlimit="deleteItem(cat)"/>
          </div>
        </van-card>
      </li>
    </ul>


    <van-submit-bar :price="totalPrice" button-text="去结算" @submit="onSubmit">
      <!-- <van-checkbox v-model="checked" checked-color="#ff4891">全选</van-checkbox> -->
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('cat', [
      'catList'
    ]),

    ...mapGetters('cat', [
      'totalPrice'
    ])
  },
  methods: {
    onSubmit () {
      console.log(111)
    },

    deleteItem (cat) {
      this.$store.commit("cat/reduceCat",cat)
      console.log(222)
    }
  }
}
</script>

<style lang="less">
.main-cart {
  min-height: 667px;
  background-color: #fff;
  .van-card {
    padding: 10px 15px;
    .van-card__title{
      font-size: 14px;
    }
    .van-card__bottom{
      margin-top: 10px;
    }

    .van-card__footer{
      // position: fixed;
      right: 10px;
      top: 72px;
    }
  }
  .van-submit-bar {
    position: fixed;
    bottom: 50px;
    border-top: 1px solid #e6e6e6;
    .van-button--danger {
      background-color: #ff4891;
    }
    .van-submit-bar__price {
      color: #ff4891;
    }
    .van-checkbox {
      margin-left: 12px;
    }
  }
}

</style>
