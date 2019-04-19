<template>
  <div>
    <transition
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown"
    mode="out-in">
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
