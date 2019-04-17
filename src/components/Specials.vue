<template>
  <div class="category-box">

    <!-- 商品列表 -->
    <div class="all-products">
      <div class="product-list-divider">
        <img src="https://j-image.missfresh.cn/mis_img_20190415015906835.png?mryxw=750&mryxh=180" alt>
      </div>
      <div class="product-list">
        <div class="product-item">
          <img src="../images/home/14-xjpg.jpg" alt>
          <div class="item-detail">
            <div class="item-title">
              <p class="sub-title">1个新疆阿克苏苹果大果190g起</p>
              <p class="mess-title">蜜汁甜 再一次回味初恋</p>
            </div>
            <div class="item-tag">
              <span>新人专享</span>
            </div>
            <div class="item-price">
              <span class="price">￥ 1.9</span>
            </div>
            <div class="item-cart">
              <img src="../images/home/17-listCart.png" alt>
            </div>
          </div>
        </div>
        <div class="product-item">
          <img src="../images/home/15-cjs.jpg" alt>
          <div class="item-detail">
            <div class="item-title">
              <p class="sub-title">新人-葱姜蒜组合包</p>
              <p class="mess-title">“用心”给你每一道菜加点料</p>
            </div>
            <div class="item-tag">
              <span>新人专享</span>
            </div>
            <div class="item-price">
              <span class="price">￥ 1.9</span>
            </div>
            <div class="item-cart">
              <img src="../images/home/17-listCart.png" alt>
            </div>
          </div>
        </div>
        <div class="product-item">
          <img src="../images/home/16-btc.jpg" alt>
          <div class="item-detail">
            <div class="item-title">
              <p class="sub-title">4个湖南冰糖橙440g起</p>
              <p class="mess-title">酸酸甜甜的湖南妹陀</p>
            </div>
            <div class="item-tag">
              <span>新人专享</span>
            </div>
            <div class="item-price">
              <span class="price">￥ 1.9</span>
            </div>
            <div class="item-cart">
              <img src="../images/home/17-listCart.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.category-box {
  margin-top: 43px;
  overflow: auto;

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
</style>
