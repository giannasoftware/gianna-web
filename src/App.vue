<template>
  <div class="w-full relative">
    <!-- Header Navigation-->
    <NavBar :className="{ 'scrolled': !view.atTopOfPage }" />

    <router-view v-slot="{ Component, route }">
      <!-- Animation -->
      <Transition name="route" mode="out-in" appear>
        <!-- <KeepAlive></KeepAlive> -->
        <Suspense>
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
          <template #fallback>
            <p>Loading</p>
          </template>
        </Suspense>
      </Transition>
    </router-view>

    <!-- Footer -->
    <Footer />
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
  if (window.scrollY > 150) {
    // user is scrolled
    if (view.atTopOfPage) view.atTopOfPage = false
  } else {
    // user is at top of page
    if (!view.atTopOfPage) view.atTopOfPage = true
  }
}

</script>


<style>
/* route transition */
.route-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  transform: translateY(100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>