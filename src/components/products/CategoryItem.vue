<template>

    <route-link :to="item.link" class="group relative">
        <div
            class="rounded-tr-[45px] aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:hmd-80">
            <img :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="mt-4 flex flex-col absolute bottom-1 pb-3">
            <div class="pl-4">
                <h3 class="text-lg text-black mb-0 font-medium">
                    <route-link :to="item.link">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {{item.title}}
                    </route-link>
                </h3>
                <p class="mt-0.5 text-sm text-gray-500">{{item.total_item}} Items</p>
            </div>
        </div>
    </route-link>

</template>


<script setup>

defineProps({
    item: {
        type: Object,
        default: {
            title: 'Item 1',
            total_item: 5,
            image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            link: '/'
        }
    },
})
</script>
