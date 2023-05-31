<template>
    <div class="max-w-sm md:max-w-lg pb-4">
        <div class="relative group">

            <div class="relative flex flex-col items-start">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-500 to-70% bg-opacity-25 transition-opacity w-full h-full"></div>
                <div
                    class="aspect-h-4 aspect-w-3 overflow-hidden shrink-0 cursor-pointer bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img :src="item.image.isArray ? item.image[0] : item.image" :alt="item.title" class="h-full">
                    <!-- <img :src="item.image.isArray ? item.image[1] : item.image" :alt="item.title" class="h-full hidden" :class="{'group-hover:block': item.image.isArray}"> -->
                </div>
                <!-- Detail -->
                <div
                    class="absolute bottom-4 py-3 px-3 md:px-6 w-full flex flex-1 items-center justify-between group-content">
                    <div class="flex items-start flex-col py-2">
                        <RouterLink to="/shop"
                            class="title text-sm md:text-lg text-white font-medium group-hover:text-primary">{{ item.title }}
                        </RouterLink>
                        <p class="rating text-orange-400 text-sm mb-2 ml-1 flex items-center">
                            <i class="bx bxs-star "></i> <span class="ml-1 text-white">({{ item.review_count }}
                                reviews)</span>
                        </p>
                        <h3 class="text-sm md:text-2xl text-white font-semibold">{{ item.price }}</h3>
                    </div>
                    <button class="text-white text-2xl md:text-3xl font-semibold flex items-center"
                        @click.prevent="addToCart">
                        <i class="bx bx-shopping-bag"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

defineProps(['item'])


const addToCart = () => { }

</script>