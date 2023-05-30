<template>
    <div class="relative max-w-lg pb-4">
        <div class="group flex flex-col items-start">
            <div class="shrink-0">
                <img :src="item.image" :alt="item.title">
            </div>
            <!-- Detail -->
            <div class="absolute bottom-4 py-3 px-6 w-full flex flex-1 items-center justify-between">
                <div class="flex items-start flex-col py-2">
                    <routine-link to="/shop" class="title text-sm md:text-lg text-black font-medium text">{{item.title}}</routine-link>
                    <p class="rating text-orange-400 text-sm mb-2">
                        <i class="bx bxs-star "></i> <span class="ml-1 text-gray-600">({{item.review_count}} reviews)</span>
                    </p>
                    <h3 class="text-base md:text-2xl text-black font-semibold">{{item.price}}</h3>
                </div>
                <button class="text-black text-3xl font-semibold flex items-center" @click.prevent="addToCart">
                    <i class="bx bx-shopping-bag"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>