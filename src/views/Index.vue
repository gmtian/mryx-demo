<template>
  <div>
    <transition
    enter-active-class="animated bounceIn"
    leave-active-class="animated bounceOut">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/Tabbar'

export default {
  components: {
    Tabbar
  }
}
</script>
