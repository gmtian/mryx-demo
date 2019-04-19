const state = {
  catList: [], // 购物车中的数据
}

const getters = {
  totalPrice (state) {
    let total = 0
    state.catList.forEach(item => {
      let price = item.vip_price_pro.price_down.price / 100
      let num = item.num
      console.log(price)
      console.log(num)

      // console.log(price * num)

      total += price * num
      // console.log(num)
    })
    return total * 100
  },

  catNum (state) {
    let num = 0;
    state.catList.forEach(item => {
      num += item.num
    })
    return num
  }
}

const mutations = {
  addCat (state, product) {
    // 判断点击的商品是否已经存在购物车中，
    let index = state.catList.findIndex(item => {
      return item.stock === product.stock
    })

    if (index > -1) {
      // 存在，只需要将数量加一即可
      state.catList[index].num += 1
    } else {
      // 不存在，将此商品放到购物车中
      state.catList.push(product)
    }
  },

  reduceCat (state, product) {
    // 判断点击的商品是否已经存在购物车中，
    let index = state.catList.findIndex(item => {
      return item.stock === product.stock
    })

    if (index > -1) {
      if (state.catList[index].num === 1) {
        // 直接删除，
        console.log('asdfasdf')
        state.catList.splice(index, 1)
      } else {
        // 数量减一
        state.catList[index].num -= 1
      }

    }
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
