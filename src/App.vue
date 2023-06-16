<template>
  <div class="w-full relative">
    <!-- Header Navigation-->
    <NavBar :className="{ 'scrolled': !view.atTopOfPage }" />
    <!-- <div class="absolute top-0 left-0 right-0"> -->

      <!-- animating routes -->
      <router-view v-slot="{ Component, route }">
        <!-- <Transition name="fade" mode="out-in"> -->
        <!-- <Transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass" mode="out-in">
          <div :key="route.name"> -->
            <component :is="Component" />
          <!-- </div>
        </Transition> -->
      </router-view>
    <!-- </div> -->

    <!-- Footer -->
    <Footer/>
  </div>
</template>



<script setup>
import { onBeforeMount, reactive } from 'vue';

import NavBar from './components/NavBar';
import Footer from './components/Footer'

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll);
})

//   beforeMount(){
//     window.addEventListener('scroll', this.handleScroll);
// };

var view = reactive({
  atTopOfPage: true
})

const handleScroll = () => {
  // when the user scrolls, check the pageYOffset
  if (window.pageYOffset > 0) {
    // user is scrolled
    if (view.atTopOfPage) view.atTopOfPage = false
  } else {
    // user is at top of page
    if (!view.atTopOfPage) view.atTopOfPage = true
  }
}
  // export default{
  //   components:{
  //     NavBar
  //   }
  // }
</script>


<style>
.fade-enter-from,
.fade-leave-from {
  opacity: 0;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
</style>