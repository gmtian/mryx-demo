<template>
  <div>
    <h1>详情页</h1>
    <ul>
      <li>商品ID:{{ productData.id }}</li>
      <li>商品名称{{ productData.name }}</li>
      <li>商品价格:{{ productData.price }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      productData: {}
    }
  },

  methods: {
    getproductData () {
      axios.get('/static/detail.json').then(res => {
        let data = res.data
        var tmp = data.find(item => {
          return item.id === parseInt(this.$route.params.id)
        })
        this.productData = tmp
      })
    }
  },

  created () {
    this.getproductData()
  }

}
</script>
