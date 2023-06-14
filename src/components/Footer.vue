<template>
    
    <div class="container py-6 space-y-10">
        <div class="grid grid-cols-2 gap-x-6 gap-y-10 md:flex md:justify-between md:w-full md:items-start md:gap-x-0">
            <div class="inline-flex items-start px-2 flex-col space-y-3">
                <router-link to="/" class="pt-2"><img src="../assets/img/logo.png" alt=""></router-link>
                <div class="grid grid-cols-4 items-center gap-4">
                    <router-link to="" class="text-2xl font-medium text-gray-600 hover:text-black transition duration-300"><i class='bx bxl-facebook'></i></router-link>
                    <router-link to="" class="text-2xl font-medium text-gray-600 hover:text-black transition duration-300"><i class='bx bxl-twitter'></i></router-link>
                    <router-link to="" class="text-2xl font-medium text-gray-600 hover:text-black transition duration-300"><i class='bx bxl-instagram'></i></router-link>
                    <router-link to="" class="text-2xl font-medium text-gray-600 hover:text-black transition duration-300"><i class='bx bxl-youtube'></i></router-link>
                </div>
            </div>
            <div class="inline-flex flex-col px-2 items-start gap-y-5">
                <h4 class="text-xl text-black font-semibold">Company</h4>
                <div class="flex flex-col space-y-2">
                    <router-link :to="{name:'home'}" class="text-base text-gray-600 hover:text-black transition duration-300">Home</router-link>
                    <router-link :to="{name: 'about'}" class="text-base text-gray-600 hover:text-black transition duration-300">History</router-link>
                    <router-link :to="{name: 'product-list'}" class="text-base text-gray-600 hover:text-black transition duration-300">Shop</router-link>
                    <router-link :to="{name: 'press'}" class="text-base text-gray-600 hover:text-black transition duration-300">Press</router-link>
                </div>
            </div>  
            <div class="inline-flex flex-col px-2 items-start gap-y-5">
                <h4 class="text-xl text-black font-semibold">Support</h4>
                <div class="flex flex-col space-y-2">
                    <router-link :to="{name: 'faqs'}" class="text-base text-gray-600 capitalize hover:text-black transition duration-300">FAQs</router-link>
                    <router-link :to="{name: 'contact'}" class="text-base text-gray-600 capitalize hover:text-black transition duration-300">Contact us</router-link>
                    <router-link to="" class="text-base text-gray-600 capitalize hover:text-black transition duration-300">Track Order</router-link>
                    <router-link to="" class="text-base text-gray-600 capitalize hover:text-black transition duration-300">Shipping and Returns</router-link>
                </div>
            </div>
            <div class="inline-flex flex-col px-2 items-start gap-y-5">
                <h4 class="text-xl text-black font-semibold">Legal</h4>
                <div class="flex flex-col space-y-2">
                    <router-link to="" class="text-base text-gray-600 capitalize hover:text-black transition duration-300">Terms and Conditions</router-link>
                    <router-link to="" class="text-base text-gray-600 capitalize hover:text-black transition duration-300">Privacy Policy</router-link>
                    <router-link to="" class="text-base text-gray-600 capitalize hover:text-black transition duration-300">Sitemaps</router-link>
                    <router-link to="" class="text-base text-gray-600 capitalize hover:text-black transition duration-300">Accessibility</router-link>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between flex-wrap flex-end">
            <p class="text-base text-gray-500">Copyright {{year}} Gianna | All right reserved</p>
            <div class="inline-flex gap-x-2 items-center">
                <img src="../assets/img/cards.png" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';


const year = ref(new Date().getFullYear());
</script>
