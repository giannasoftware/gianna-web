<template lang="">
  <div
    class="fixed bottom-0 w-full px-6 py-4 shadow-xl bg-inverse-secondary z-50 md:hidden"
  >
    <div class="flex flex-1 items-center justify-between space-x-4 text-2xl">
      <router-link to="/"><i class="bx bx-home"></i></router-link>
      <button @click="$emit('openSearch')"><i class="bx bx-search"></i></button>
      <router-link to="/account"><i class="bx bx-user"></i></router-link>
      <Button @click.prevent="$emit('openSidebar')"><i class="bx bx-menu"></i></Button>
    </div>
  </div>


</template>
<script>

export default {
    name: "MobileNav",
    emits: ["openSideBar", 'openSearch'],
};
</script>
<style lang=""></style>
