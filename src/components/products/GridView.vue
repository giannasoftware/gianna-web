<template>
    <div class="max-w-sm md:max-w-lg pb-4">
        <div class="relative group">

            <div :to="{name: 'product', params:{name: item.title.toLowerCase().replaceAll(' ', '-')}}" class="relative flex flex-col items-start">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-gray-600 to-100% bg-opacity-50 transition-opacity w-full h-full">
                </div>
                <div
                    class="aspect-h-4 aspect-w-3 overflow-hidden shrink-0 cursor-pointer bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img :src="item.image.isArray ? item.image[0] : item.image" :alt="item.title"
                        class="h-[270px] object-cover object-center md:h-full">
                    <!-- <img :src="item.image.isArray ? item.image[1] : item.image" :alt="item.title" class="h-full hidden" :class="{'group-hover:block': item.image.isArray}"> -->
                </div>
                <!-- Detail -->
                <div
                    class="absolute bottom-2 py-1 md:bottom-4 md:py-3 px-3 md:px-6 w-full flex flex-1 justify-between group-content items-end md:items-center">

                    <div class="flex items-start flex-col md:py-2">
                        <RouterLink :to="{name: 'product', params:{name: item.title.replaceAll(' ', '-').toLowerCase(), id: item.id}}" :item="item"
                            class="title text-sm md:text-lg text-white font-medium group-hover:text-slate-50">{{ item.title
                            }}
                        </RouterLink>
                        <p class="rating text-orange-400 text-sm mb-2 items-center hidden md:flex">
                            <i class="bx bxs-star text-lg"></i> <span class="ml-1 text-white">({{ item.review_count }}
                                reviews)</span>
                        </p>
                        <h3 class="text-sm md:text-2xl text-white font-semibold">{{ item.price }}</h3>
                    </div>
                    <button class="text-white font-semibold flex items-center" @click.prevent="addToCart">
                        <i class="bx bx-shopping-bag text-3xl"></i>
                    </button>
                </div>

                <!-- save item -->
                <div class="absolute top-5 right-4 hidden md:block">
                    <button
                        class="text-white text-2xl rounded-full px-1 py-1 flex item-center justify-center hover:text-red-400 hover:transition-color hover:duration-150"
                        @click="handleSaveItem">
                        <i class="bx bx-heart" :class="{ hidden: isFav }"></i>
                        <i class="bx bxs-heart text-red-400" :class="{ 'hidden': !isFav }"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';


defineProps(['item'])

const isFav = ref(false)

const addToCart = () => { }

const handleSaveItem = () => { 
    isFav.value = !isFav.value
    console.log('Saved');
}

</script>