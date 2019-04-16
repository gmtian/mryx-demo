<template>
  <div id="header">
    <div class="location-wrap">
      <img src="../images/home/01-lxsd.png" alt>
      <div class="location-nav">
        <router-link tag="span" to="/city" >宝安中心[地铁站]</router-link>
        <i></i>
      </div>
    </div>
    <div class="search-nav">
      <div class="search-nav-box">
        <img class="search-nav-img" src="../images/home/02-search.png" alt>
        <div class="search-nav-text">搜索</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
#header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #fff;
  text-align: left;
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 2;
  .location-wrap {
    height: 40px;
    line-height: 40px;
    margin-left: 16px;
    flex: 0 0 50%;
    text-align: left;
    img {
      display: block;
      float: left;
      width: 55px;
      height: 14px;
      margin-right: 2px;
      margin-top: 13px;
      // vertical-align: middle;
    }
    .location-nav {
      float: left;
      width: 78px;
      height: 40px;
      line-height: 40px;
      margin: 0 2px;
      span {
        display: inline-block;
        width: 78px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
      }
    }
  }
  .search-nav {
    text-align: left;
    margin-left: 8px;
    margin-right: 10px;
    text-align: right;
    .search-nav-box {
      width: 153px;
      height: 30px;
      line-height: 30px;
      background: #f5f5f5;
      border-radius: 14px;
      text-align: left;
      .search-nav-img {
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-left: 9px;
        vertical-align: middle;
      }
      .search-nav-text {
        display: inline-block;
        margin-left: 5px;
        vertical-align: middle;
        color: #c6c6c6;
        font-size: 16px;
      }
    }
  }
}
</style>
