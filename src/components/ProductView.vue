<template>
    <div class="relative bg-white">
        <div class="aspect-h-4 aspect-w-3 overflow-hidden">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                alt="Two each of gray, white, and black shirts laying flat." class="w-full object-cover object-center">

            <div class="absolute left-5 space-y-2 top-80">
                <button class="capitalize block">description</button>
                <button class="capitalize block">reviews</button>
                <button class="capitalize block">FAQs</button>
            </div>
        </div>

    </div>

    <!-- Product information -->
    <div class="lg:col-span-2 flex justify-between gap-x-5 relative">
        <h2 class="sr-only">Product information</h2>

        <div class="bg-white pt-8 max-w-xl">
            <h1 class="text-2xl font-bold tracking-tight text-black sm:text-3xl mt-4 md:mt-0 px-4">
                Basic Tee 6-Pack
            </h1>

            <div class="pt-3 inline-flex gap-1 items-center md:px-4">
                <span class="text-orange-400">
                    <i class="bx bxs-star"></i><i class="bx bxs-star"></i><i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i> <i class="bx bxs-star-half"></i>
                </span>
                <span class="text-gray-500 ml-2">215 reviews</span>
            </div>

            <form action="" class="mt-8 md:px-4">

                <div class="border-b border-gray-200 pb-6 w-full">
                    <h3 class="text-xl font-medium text-gray-900">Select Color</h3>
                    <div class="mt-4">
                        <legend class="sr-only">Select Color</legend>
                        <div class="flex items-center gap-x-3">
                            <ColorBox colorLabel="white" colorName="color" colorId="color-white" colorValue="white"
                                v-model="selectedColor" />
                            <ColorBox colorLabel="primary" colorName="color" colorId="color-primary" colorValue="purple"
                                v-model="selectedColor" />
                            <ColorBox colorLabel="rose-600" colorName="color" colorId="color-rose-600" colorValue="rose"
                                v-model="selectedColor" />
                            <ColorBox colorLabel="black" colorName="color" colorId="color-black" colorValue="black"
                                v-model="selectedColor" />
                        </div>
                        {{ selectedColor }}
                    </div>

                </div>

                <div class="mt-10 border-b border-gray-200 pb-6">
                    <div class="flex items-baseline justify-between">
                        <h3 class="text-lg font-medium text-gray-900">Select Size</h3>
                        <a href="#" class="text-sm text-gray-500 hover:text-gray-600 ml-16 underline-1">Size
                            guide</a>
                    </div>
                    <div class="mt-4">
                        <legend class="sr-only">Select Sizes</legend>
                        <div class="flex flex-wrap items-center gap-y-5 gap-x-3">
                            <SizeBox label="XXS" v-model="selectedSize" />
                            <SizeBox label="XS" v-model="selectedSize" />
                            <SizeBox label="S" v-model="selectedSize" />
                            <SizeBox label="M" v-model="selectedSize" />
                            <SizeBox label="L" v-model="selectedSize" />
                            <SizeBox label="XL" v-model="selectedSize" />
                            <SizeBox label="XXL" v-model="selectedSize" />
                            <SizeBox label="XXL" v-model="selectedSize" />
                        </div>

                        {{ selectedSize }}
                    </div>

                </div>
            </form>


            <FilterMenu name="Description" :open="true" class="border-b-0 sm:!px-0 w-full">
                <template #filterMenu>
                    <div class="md:px-4 font-normal">
                        <p class="text-gray-600 py-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                            sed sunt dolor id aliquid quasi aut maxime eos, est iste nihil commodi enim dolorem
                            cupiditate ad neque tempora! Corrupti, autem?
                        </p>
                        <p class="text-gray-600 py-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                            sed sunt dolor id aliquid quasi aut maxime eos, est iste nihil commodi enim dolorem
                            cupiditate ad neque tempora! Corrupti, autem?
                        </p>
                        <p class="text-gray-600 py-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                            sed sunt dolor id aliquid quasi aut maxime eos, est iste nihil commodi enim dolorem
                            cupiditate ad neque tempora! Corrupti, autem?
                        </p>
                    </div>
                </template>
            </FilterMenu>

        </div>

        <!-- Cart Options -->
        <div class="hidden lg:block py-4 w-72 shadow-md px-5 h-96 bg-white">

            <div class="border-b-2 border-gray-200 mb-3 pb-3">
                <h3 class="text-black text-2xl font-semibold tracking-tight">Set Order</h3>
            </div>

            <div class="inline-flex space-x-1 py-3">
                <div class="w-14 h-14 shrink-0">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt=""
                        class="w-full h-full">
                </div>
                <div class="px-3">
                    <h6 class="text-gray-600 font-medium text-base">Basic Tee 6-Pack</h6>
                    <span class="text-lg size font-medium text-black">XL (Extra Large)</span>
                </div>
            </div>

            <div class="inline-flex space-y-3 pr-2 flex-col w-full py-3">
                <div class="flex items-center">
                    <form action="">
                        <div class="border border-gray-600 ">

                        </div>
                    </form>
                    <span class="stock">
                        <span class="text-sm text-gray-500 capitalize">stock:</span>
                        <span class="text-black font-normal pl-2">300</span>
                    </span>
                </div>
                <div class="flex justify-between items-center w-full">
                    <span class="price text-base">Total Price:</span>
                    <h6 class="total text-xl text-black font-bold">$85</h6>
                </div>
            </div>


            <div class="inline-flex space-y-3 flex-col w-full">
                <button
                    class="flex items-center py-3 px-2 bg-primary-500 justify-center text-white font-medium hover:border hover:border-primary hover:text-primary-500 hover:bg-transparent">
                    <span>Add bag</span>
                    <span class="bx bx-shopping-bag ml-4"></span>
                </button>
                <button
                    class="flex items-center py-3 px-2 hover:bg-primary-500 justify-center hover:text-white font-medium text-primary-500 border border-primary">
                    <span>Save item</span>
                    <span class="bx bx-heart ml-4"></span>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>

import FilterMenu from '@/components/FilterMenu.vue';
import ColorBox from '@/components/form/ChooseColorBox';
import SizeBox from '@/components/form/SizeBox.vue';
import products from '@/api/products';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const selectedColor = ref('')
const selectedSize = ref('')

const route = useRoute();
// const item = ref(null)


const item = computed(() => {

    const loadData = async () => {
        const id = route.params.id;
        const name = route.params.name
        return await products.getProduct(id)
    };

    const results = loadData()

    return  results
})


console.log(item.value);




</script>

<style lang="scss" scoped></style>