<template>
  <div id="header">
    <div class="location-wrap">
      <img src="https://j-image.missfresh.cn/img_20161108170831264.png" alt>
      <div class="location-nav">
        <router-link tag="span" to="/city" >宝安中心[地铁站]</router-link>
        <i></i>
      </div>
    </div>
    <div class="search-nav">
      <div class="search-nav-box">
        <img class="search-nav-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA5RJREFUWAntl71rU1EYxvNFDbQgGW2ho1bFDm2StohDK3WStiA4+CcUB7vUwV3QRUHa3clJTB0cLLYVIUlJXKpWVBAs6GCHEGxBIWn8PZd7y23uyc3HDZ164HDOPfd9nve573nPxw2FTspJBIJFINwufHNz8+zBwcEcuGnqYK1W6xdHOBz+RbNDXY1EIpmxsbGvGm+3tCwon8+PIuQhDqZadLKGsMXx8fH3LdpbZk0FEYFYLpd7TATm6cu+RH8FZyv0t/v6+hSZ0N7eXn+1Wr3IuxnsZhlK0KdbW56YmLhDvyK7ZsVX0NbWVmJ/f/85pJMQ/UXEo1gs9iCZTJb9iIvF4ulKpXKXiC5gF0fMem9v743h4eGSH07vGgpCRIxpei0xEP5EzBx5UWxG6H5PviURlYFjQKKYvmu0vpGKuAncfU2TI4YWLe2JEZcwwuqDxCVOtw9T3xghJTAEBeq/aDR6pRMxbmeKFPn1DmGnqCm/RDdGSKsJMWHlTFAxEiYOcYnTXqluvUf6HkGFQuEcFlraJSXwEesADzaXknpKe1kjKo8gVoeWrDa6lWarqRGpaVxc4tQ7oqSN1Vg8grDSDhwixBbYiOpwkCl7aUMtHyYak6BB23DbBAgyxgL5ZOMdHx46jyC+wjqbnB3Ygwgw4HA6PkxUHkEmo26NESHjNuPm9wgi8Q7PJrdhN/rlcvmMeBwfJk6PIIx2bMMLJkCQMR2+Nt7x4aEzCVqVFUvTWv4eRIABIjNjwy0fJiqPIDYwa7mTeLM6tU2gTsbEJU5hHR8mHo+gVCr1BcM1akJXCBOokzGbKwH2je3DSOMRJCs2xUXCW2PaFnQwGpFtDNrXkAVxwu37kUZBOo0J7zI+44jKZLPZgTb8HzEVVhzioi75nfQCNtwXENTtC9oGYqaJUmcXNAF17aRdR9yA7jPck+63kuiyka0wwlpfHg7nmonxjZBeqihSQS75ULyAQ6uLjTp6i7vRM/E2Kg2nrB6gWyS50PJvENHYQMC9dDpNGmVvw/eEqh+FSaYuX8/vPLcsyAHoAmffmQ5/FHEeIQq7tN+we8s+k2Fpf3QwaonyEjbzdH/H4/H0yMjID/d7p9+2IAfYbouYKKJegdOfx4dEInF5aGjoTz2PcdnXG3XjGRHVnp6em7SfEXepVCo9NfEemyA51zWW6bxOd5d6VVHTuLscqyA5Jre+k+znETOqqLnFnPRbicB/s0mrARHWdIQAAAAASUVORK5CYII=" alt>
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
