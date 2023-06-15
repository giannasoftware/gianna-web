<template>
        <div class="pt-8 pb-20 mt-20">
            <div class="container">
                <!-- Breadcrumb -->
                <Breadcrumb page="Shop" subpage="Cart" />

                <!-- Cart container -->
                <div class="gap-x-6 gap-y-5 flex flex-col lg:flex-row pt-10">

                    <div class="bg-white w-full md:max-w-max lg:max-w-4xl shadow col-span-2 px-5 py-6">
                        <div class="border-b-2 border-gray-100 pb-3">
                            <h3 class="text-lg md:text-xl font-semibold text-black">Cart</h3>
                        </div>

                        <div class="py-8 space-y-7">

                            <div class="inline-flex space-x-3 w-full border-b border-gray-200 pb-5">
                                <div class="shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                        alt="">
                                </div>
                                <div class="w-full">
                                    <div class="flex justify-between flex-col md:flex-row mb-3">
                                        <div class="">
                                            <h3>
                                                <a href="#">Throwback Hip Bag</a>
                                            </h3>
                                            <p class="price font-medium mb-4 hidden md:block">$90.00</p>
                                        </div>
                                        <div class="">
                                            <h3 class="text-lg md:text-2xl font-bold text-gray-900">$90.00</h3>
                                        </div>
                                    </div>

                                    <div class="flex justify-between flex-col lg:flex-row gap-y-3">

                                        <div class="inline-flex items-center gap-x-1 gap-y-3 xs:flex-wrap sm:flex-row">
                                            <!-- select size -->
                                            <div
                                                class="border border-gray-300 px-2 py-0.5 flex items-center justify-between">
                                                <span class="uppercase pr-1 text-sm">Xl</span>
                                                <span class="bx bx-chevron-down text-lg"></span>
                                            </div>
                                            <!-- select color -->
                                            <div
                                                class="box border border-gray-300 px-2 py-1.5 flex items-center justify-between">
                                                <span class="capitalize pr-1 text-sm">Black</span>
                                                <span class="bx bx-chevron-down"></span>
                                            </div>
                                            <!-- quantity -->
                                            <div
                                                class="box border border-gray-300 px-2 py-1 flex items-center justify-between text-sm">
                                                <button @click="decreaseValue">
                                                    <span class="bx bx-minus"></span>
                                                </button>
                                                <input type="text" :value="quantity" name="quantity"
                                                    class="text-sm border-0 w-7 h-6 mx-1 px-1 focus:outline-offset-0 focus:outline-0 focus:border-0 focus:ring-0"
                                                    disabled>
                                                <!-- <span class="capitalize px-4">100</span> -->
                                                <button @click.prevent="increaseValue">
                                                    <span class="bx bx-plus"></span>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="space-x-4 flex items-center">
                                            <button class="flex items-center text-sm">
                                                <span class="bx bx-heart pr-1 text-lg"></span>
                                                <span>Save</span>
                                            </button>
                                            <button class="flex items-center text-sm">
                                                <span class="bx bx-x pr-1 text-lg"></span>
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-flex space-x-3 w-full border-b border-gray-200 pb-5">
                                <div class="shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                                        alt="">
                                </div>
                                <div class="w-full">
                                    <div class="flex justify-between flex-col md:flex-row mb-3">
                                        <div class="">
                                            <h3>
                                                <a href="#">Throwback Hip Bag</a>
                                            </h3>
                                            <p class="price font-medium mb-4 hidden md:block">$90.00</p>
                                        </div>
                                        <div class="">
                                            <h3 class="text-lg md:text-2xl font-bold text-gray-900">$90.00</h3>
                                        </div>
                                    </div>

                                    <div class="flex justify-between flex-col lg:flex-row gap-y-3">

                                        <div class="inline-flex items-center gap-x-1 gap-y-3 xs:flex-wrap sm:flex-row">
                                            <!-- select size -->
                                            <div
                                                class="border border-gray-300 px-2 py-0.5 flex items-center justify-between">
                                                <span class="uppercase pr-1 text-sm">Xl</span>
                                                <span class="bx bx-chevron-down text-lg"></span>
                                            </div>
                                            <!-- select color -->
                                            <div
                                                class="box border border-gray-300 px-2 py-1.5 flex items-center justify-between">
                                                <span class="capitalize pr-1 text-sm">Black</span>
                                                <span class="bx bx-chevron-down"></span>
                                            </div>
                                            <!-- quantity -->
                                            <div
                                                class="box border border-gray-300 px-2 py-1 flex items-center justify-between text-sm">
                                                <button @click="decreaseValue">
                                                    <span class="bx bx-minus"></span>
                                                </button>
                                                <input type="text" :value="quantity" name="quantity"
                                                    class="text-sm border-0 w-7 h-6 mx-1 px-1 focus:outline-offset-0 focus:outline-0 focus:border-0 focus:ring-0"
                                                    disabled>
                                                <!-- <span class="capitalize px-4">100</span> -->
                                                <button @click.prevent="increaseValue">
                                                    <span class="bx bx-plus"></span>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="space-x-4 flex items-center">
                                            <button class="flex items-center text-sm">
                                                <span class="bx bx-heart pr-1 text-lg"></span>
                                                <span>Save</span>
                                            </button>
                                            <button class="flex items-center text-sm">
                                                <span class="bx bx-x pr-1 text-lg"></span>
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-flex space-x-3 w-full">
                                <div class="shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg"
                                        alt="">
                                </div>
                                <div class="w-full">
                                    <div class="flex justify-between flex-col md:flex-row mb-3">
                                        <div class="">
                                            <h3>
                                                <a href="#">Throwback Hip Bag</a>
                                            </h3>
                                            <p class="price font-medium mb-4 hidden md:block">$90.00</p>
                                        </div>
                                        <div class="">
                                            <h3 class="text-lg md:text-2xl font-bold text-gray-900">$90.00</h3>
                                        </div>
                                    </div>

                                    <div class="flex justify-between flex-col lg:flex-row gap-y-3">

                                        <div class="inline-flex items-center gap-x-1 gap-y-3 xs:flex-wrap sm:flex-row">
                                            <!-- select size -->
                                            <div
                                                class="border border-gray-300 px-2 py-0.5 flex items-center justify-between">
                                                <span class="uppercase pr-1 text-sm">Xl</span>
                                                <span class="bx bx-chevron-down text-lg"></span>
                                            </div>
                                            <!-- select color -->
                                            <div
                                                class="box border border-gray-300 px-2 py-1.5 flex items-center justify-between">
                                                <span class="capitalize pr-1 text-sm">Black</span>
                                                <span class="bx bx-chevron-down"></span>
                                            </div>
                                            <!-- quantity -->
                                            <div
                                                class="box border border-gray-300 px-2 py-1 flex items-center justify-between text-sm">
                                                <button @click="decreaseValue">
                                                    <span class="bx bx-minus"></span>
                                                </button>
                                                <input type="text" :value="quantity" name="quantity"
                                                    class="text-sm border-0 w-7 h-6 mx-1 px-1 focus:outline-offset-0 focus:outline-0 focus:border-0 focus:ring-0"
                                                    disabled>
                                                <!-- <span class="capitalize px-4">100</span> -->
                                                <button @click.prevent="increaseValue">
                                                    <span class="bx bx-plus"></span>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="space-x-4 flex items-center">
                                            <button class="flex items-center text-sm">
                                                <span class="bx bx-heart pr-1 text-lg"></span>
                                                <span>Save</span>
                                            </button>
                                            <button class="flex items-center text-sm">
                                                <span class="bx bx-x pr-1 text-lg"></span>
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div
                        class="bg-white w-full md:h-[500px] md:w-1/2 md:self-end lg:w-2/4 xl:w-1/4 lg:self-auto shadow px-6 py-6">
                        <div class="border-b-2 border-gray-100 pb-3">
                            <h3 class="text-lg md:text-2xl font-semibold text-black">Cart Summary</h3>
                        </div>

                        <div class="block space-y-4">

                            <div class="border-b border-gray-100 py-3 flex items-center">
                                <input type="text" placeholder="Promo code"
                                    class="w-full border-gray-200 placeholder:text-gray-300 focus:ring-0 focus:border-gray-400">
                                <router-link to="/shop"
                                    class="py-2 px-2 bg-gray-200 text-sm capitalize -ml-14 text-12 font-medium text-gray-500">Apply</router-link>
                            </div>

                            <!-- summary -->
                            <div class="summary">
                                <span sr-only="summary"></span>
                                <div
                                    class="pb-3 border-b border-gray-100 flex justify-between items-center font-medium text-base">
                                    <!-- title -->
                                    <h3>Subtotal</h3>
                                    <!-- price -->
                                    <p>
                                        <span sr-only="subtotal">$90.00</span>
                                    </p>
                                </div>
                                <!-- discount -->
                                <div class="py-1 text-gray-500 flex justify-between items-center text-sm">
                                    <!-- discount -->
                                    <h3>Discount</h3>
                                    <!-- price -->
                                    <p>
                                        <span sr-only="discount">$0.00</span>
                                    </p>
                                </div>
                                <!-- delivery -->
                                <div class="py-1 text-gray-500 flex justify-between items-center text-sm">
                                    <!-- title -->
                                    <h3>Delivery</h3>
                                    <!-- price -->
                                    <p>
                                        <span sr-only="deliverey">$0.00</span>
                                    </p>
                                </div>
                                <!-- tax -->
                                <div class="pb-2 border-b text-gray-500 flex justify-between items-center text-sm">
                                    <!-- title -->
                                    <h3>Tax</h3>
                                    <!-- price -->
                                    <p>
                                        <span sr-only="tax">$0.00</span>
                                    </p>
                                </div>
                                <div
                                    class="py-3 border-b border-gray-100 flex justify-between items-center font-medium text-base">
                                    <!-- title -->
                                    <h3>Total</h3>
                                    <!-- price -->
                                    <p>
                                        <span sr-only="subtotal">$90.00</span>
                                    </p>
                                </div>
                            </div>

                            <div class="button space-y-4 flex flex-col mt-3">
                                <router-link to="/checkout"
                                    class="bg-primary py-3 px-3 text-white text-base font-medium text-center"> Proceed to
                                    Checkout
                                </router-link>
                                <router-link to="/shop/cart"
                                    class="border border-primary py-3 px-3 text-base font-medium text-primary text-center">
                                    Continue
                                    Shopping </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
</template>


<script setup>
import Breadcrumb from '@/components/nav/Breadcrumb.vue';
import { ref } from 'vue';

const quantity = ref(1);

const increaseValue = () => {
    quantity.value++
}
const decreaseValue = () => {
    if (quantity.value <= 1) {
        quantity.value = 1
        return;
    }

    quantity.value--
}


</script>
