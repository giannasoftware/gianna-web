<template>
  <NavBar :className="{ 'scrolled': !view.atTopOfPage }"  />

  <router-view />
</template>



<script setup>
import { onBeforeMount, reactive } from 'vue';

import NavBar from './components/NavBar';

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll);
})

//   beforeMount(){
//     window.addEventListener('scroll', this.handleScroll);
// };

var view = reactive( {
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