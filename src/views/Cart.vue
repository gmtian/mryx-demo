<template>
  <div>
    <van-card
      :price="price"
      :title="tilte"
      thumb="https://image.missfresh.cn/117257e280dc48cf8550f51cc5992fa2.jpeg?iopcmd=convert&dst=webp"
      :origin-price="originprice"
    >
      <div slot="footer">
        <van-stepper v-model="num" @overlimit="deleteItem"/>
      </div>
    </van-card>

    <van-submit-bar :price="totalPrice" button-text="去结算" @submit="onSubmit">
      <van-checkbox v-model="checked" checked-color="#ff4891">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      originprice: 10,
      num: 2,
      totalPrice: 0,
      checked: true,
      tilte: "dsc"
    };
  },

  methods: {
    onSubmit() {
      console.log(111);
    },

    deleteItem() {
      console.log(222);
    }
  }
};
</script>

<style lang="less">
.van-card {
  padding: 10px 15px;
  .van-card__title{
    font-size: 14px;
  }
  .van-card__bottom{
    margin-top: 10px;
  }

  .van-card__footer{
    position: fixed;
    right: 10px;
    top: 72px;
  }
}
.van-submit-bar {
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
</style>

