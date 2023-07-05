<template>
    <!-- Navigation container -->
    <nav class="fixed w-full z-10 top-0" :class="className">
        <div class="container mx-auto bg-transparent">
            <div class="relative flex justify-between">
                <!-- Desktop nav -->
                <div class="flex items-center flex-1 justify-between py-2 md:py-3">
                    <!-- logo -->
                    <router-link to="/" class="flex shrink-0 items-center">
                        <img src="../assets/img/logo.png" class="w-auto" alt="Gianna" />
                    </router-link>

                    <div class="hidden md:block">
                        <div class="flex md:gap-x-12">
                            <div class="relative">
                                <button class="inline-flex items-center gap-x-2 text-sm font-medium leading-6"
                                    @click="handleDropdown" aria-expanded="false">
                                    <span>Shop</span>
                                    <i class="bx bx-chevron-down"></i>
                                </button>

                                <Dropdown :isActive="showDropdown">
                                    <template #menu>
                                        <div>
                                            <route-link to="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                                tabindex="-1" id="user-menu-item-0">Category 1</route-link>
                                            <route-link to="" href="#" class="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem" tabindex="-1" id="user-menu-item-1">Category 2</route-link>
                                            <route-link to="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                                tabindex="-1" id="user-menu-item-2">Category 3</route-link>
                                        </div>
                                    </template>
                                </Dropdown>
                            </div>
                            <router-link :to="{ name: 'product-list' }"
                                class="text-sm font-medium leading-6">Collectives</router-link>
                            <router-link :to="{ name: 'press' }" class="text-sm font-medium leading-6">Press</router-link>
                        </div>
                    </div>

                    <!-- Icons  -->
                    <div class="hidden md:block">
                        <div class="inline-flex items-center md:gap-x-3">
                            <button class="font-medium leading-6" @click="handleSearch">
                                <i class="bx bx-search text-lg"></i>
                            </button>
                            <router-link to="/account/login" class="font-medium leading-6"><i
                                    class="bx bx-user text-lg"></i></router-link>
                            <router-link to="/shop/cart" class="relative flex items-center leading-6 font-medium">
                                <i class="bx bx-shopping-bag text-lg"></i>
                                <!-- <span class="text-12 ml-0.5">$0</span> -->
                                <span
                                    class="absolute bg-primary-500 px-2 rounded-full text-[11px] -bottom-1 left-2 text-slate-50 w-1 h-4 flex items-center justify-center">0</span>
                            </router-link>
                            <router-link to="/shop/wishlist" class="font-medium leading-6">
                                <i class="bx bx-heart text-lg"></i>
                            </router-link>
                        </div>
                    </div>

                    <!-- mobile -icon -->
                    <div class="md:hidden">
                        <router-link to="/shop/cart"
                            class="relative flex items-center text-xl font-medium transition-all duration-300">
                            <i class="bx bx-shopping-bag text-lg"></i>
                            <span class="text-11 ml-0.5">$200</span>
                            <span
                                class="absolute bg-primary-500 px-2 rounded-full text-11 -bottom-1 left-2 text-slate-50 w-1 h-4 flex items-center justify-center">0</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- mobile-cart -->
        </div>
    </nav>

    <MobileNav @openSidebar="handleShowMenu" @openSearch="handleSearch" />
    <!-- <div class="relative"> -->
    <SideBar :isActive="showMenu" @close="handleShowMenu">
        <template #menu>
            <li>
                <router-link :to="{ name: 'home' }" class="text-black font-medium block  py-1 text-sm">
                    Home
                </router-link>
            </li>
            <li>
                <router-link to="#" class="text-black py-1 text-sm capitalize block cursor-pointer"
                    @click="handleFilter">
                    <div class="flex items-center justify-between">
                        <span class="font-medium text-black">Shop</span>
                        <span class="ml-6 flex items-center">
                            <!-- Expand icon, show/hide based on section open state. -->
                            <i class="bx bx-chevron-right" :class="{ hidden: isExpanded }"></i>
                            <!-- Collapse icon, show/hide based on section open state. -->
                            <i class="bx bx-minus" v-show="isExpanded"></i>
                        </span>
                    </div>

                    <!-- Filter section, show/hide based on section state. -->
                    <div class="pt-4 pl-3" v-show="isExpanded">
                        <TransitionGroup name="category" tag="ul" class="space-y-5" v-if="isExpanded" appear>
                            <li>
                                <a href="#" class="block text-sm font-normal">
                                    Category 1
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block text-sm font-normal">
                                    Category 1
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block text-sm font-normal">
                                    Category 1
                                </a>
                            </li>
                            
                        </TransitionGroup>
                    </div>

                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about' }" class="font-medium text-black block py-1 text-sm capitalize">
                    Letter From the founder
                </router-link>
            </li>
            <li>
                <router-link to="#" class="font-medium text-black block py-1 text-sm capitalize">Contact</router-link>
            </li>

            <li>
                <router-link :to="{ name: 'press' }" class="font-medium text-black block  py-1 text-sm">
                    Press
                </router-link>
            </li>
        </template>

    </SideBar>
    <!-- </div> -->

    <SearchBox :open="isSearch" @close="handleSearch" />
</template>

<script setup>

import { ref } from "vue";
import MobileNav from "./nav/MobileNav";
import SideBar from "./nav/SideBar";
import Dropdown from "./nav/Dropdown";
import SearchBox from '@/components/nav/SearchBox.vue';

defineProps(["className"]);

// const newVar = reactive({ showMenu: false, showDropdown: false });

const showMenu = ref(false);
const showDropdown = ref(false);
const isExpanded = ref(false)
const isSearch = ref(false)

const handleFilter = () => {
    isExpanded.value = !isExpanded.value

}

const handleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};

const handleShowMenu = () => {
    showMenu.value = !showMenu.value;

    let body = document.getElementById('body')

    if(showMenu.value){
        body.classList.add('overflow-hidden')
    }else{
        body.classList.remove('overflow-hidden')
    }
};


const handleSearch = () => {
    isSearch.value = !isSearch.value
}

</script>


<style>
.category-enter-active {
  transition: all 0.3s ease-out;
}

.category-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.category-enter-from,
.category-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>