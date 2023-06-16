<template>
    <div class="group relative hover:shadow-md overflow-hidden">
        <!-- <div class="absolute bg-gray-500 bg-opacity-90 w-full h- bottom-0"></div> -->
        <div
            class="aspect-h-1 aspect-square w-full overflow-hidden bg-black/20 rounded-md lg:aspect-none group-hover:opacity-50 lg:h-80">
            <img :src="item.image" :alt="item.title" class="h-72 md:h-96 w-full object-cover object-center lg:h-full">
        </div>
        <div
            class="group/content mt-4 bottom-3 absolute md:-bottom-20 px-3 md:px-5 transition-all duration-300 group-hover:bottom-3">
            <div class="inline-block justify-between w-full md:block">
                <h3 class="group/link text-base font-medium md:text-xl text-black">
                    <route-link :to="item.link" class="cursor-pointer group-hover/link:text-primary-500">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {{ item.title }}
                    </route-link>
                </h3>
                <div class="grid grid-cols-1">
                
                </div>
                <div class="mt-1 text-sm text-black inline-flex items-center flex-1">
                    <span class="text-orange-300 pr-2">
                        <i class="bx bxs-star"></i>
                    </span>
                    <span>
                        {{ item.reviews }} reviews
                    </span>
                </div>
                <p class="text-xl md:text-2xl font-medium text-black">{{ item.price }}</p>
            </div>
            <button @click="addToCart"
                class="flex items-center justify-center -mr-20 px-4 py-4 rounded-full w-6 h-6 group-hover/content:text-primary-500 text-black-90 transition-all ease-in-out duration-500 md:hidden ">
                <i class="bx bx-shopping-bag text-xl md:text-3xl"></i>
            </button>
        </div>

        <div
            class="group/button absolute top-5 md:-right-16 text-black-0 transition-all ease-in-out duration-500 group-hover:right-4">
            <button @click="saveLater"
                class="flex items-center justify-center text-gray-100 px-4 py-4 rounded-full w-6 h-6 group-hover/button:text-primary-100 group-hover/button:shadow-sm">
                <i class="bx bx-heart text-xl"></i>
            </button>
        </div>
    </div>
</template>


<script setup>

const emits = defineEmits(['saveLater', 'addToCart'])

defineProps({
    item: {
        type: Object,
        default: {
            title: 'Item 1',
            reviews: 5,
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            link: '/',
            price: '$35'
        }
    },
})
</script>
