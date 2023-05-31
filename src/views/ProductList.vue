<template>
    <section class="mt-32 pb-24">
        <div class="container">
            <div class="py-10">
                <!-- Breadcrumb -->
                <Breadcrumb page="Shop" subpage="All Products" class="pb-10" />

                <!-- Filter -->
                <div class="flex justify-between items-baseline" aria-labelledby="products-heading">
                    <button @click="handleFilter"
                        class="px-2 py-4 inline-flex gap-x-1 items-center text-gray-600 text-lg hover:text-black cursor-pointer">
                        <span class="bx bx-filter text-3xl"></span>
                        <h3 class="font-medium">Filter</h3>
                        <span class="bx bx-x transition-transform ease-in-out duration-200" :class="{'hidden': !showX}"></span>
                    </button>

                    <div class="inline-flex items-center">
                        <div class="relative inline-block text-left">
                            <div>
                                <button type="button" @click.prevent="handleSort"
                                    class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                    id="menu-button" aria-expanded="false" aria-haspopup="true">
                                    Sort
                                    <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <Dropdown :isActive="activateDrop">
                                <template #menu>
                                    <a href="#" class="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem"
                                        tabindex="-1" id="menu-item-0">Most Popular</a>
                                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                                        id="menu-item-1">Best Rating</a>
                                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                                        id="menu-item-2">Newest</a>
                                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                                        id="menu-item-3">Price: Low to High</a>
                                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                                        id="menu-item-4">Price: High to Low</a>
                                </template>
                            </Dropdown>
                        </div>
                        <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span class="sr-only">View grid</span>
                            <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- SideBar -->
                <div class="flex mt-10">
                    <div class="lg:col-span-3">
                        
                    </div>
                </div>
                <div class=" grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
                    <GridView v-for="item in items" :item="item" key="item.id" />
                </div>
            </div>

        </div>
    </section>
</template>


<script setup>
import Breadcrumb from '@/components/nav/Breadcrumb.vue'
import Dropdown from '@/components/nav/Dropdown.vue';
import GridView from '@/components/products/GridView'
import { ref } from 'vue'

const items = ref([
    {
        id: 1,
        title: 'Basic Tee 6-Pack',
        price: '$400',
        review_count: 330,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg'

    },
    {
        id: 2,
        title: 'Kinda White Basic Tee',
        price: '$220',
        review_count: 1624,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-03.jpg'

    }, {
        id: 3,
        title: 'Basic Tee',
        price: '$250',
        review_count: 0,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg'

    }, {
        id: 4,
        title: 'Stone Basic Tee',
        price: '$140',
        review_count: 10,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-04.jpg'

    }, {
        id: 5,
        title: 'Fall Basic Tee 3-Pack',
        price: '$140',
        review_count: 10,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-05.jpg'

    }, {
        id: 6,
        title: 'Linework Artwork Tee 3-Pack',
        price: '$140',
        review_count: 10,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg'

    },
])


const activateDrop = ref(false)
const showX = ref(false)

function handleSort(){
    activateDrop.value = !activateDrop.value
}

function handleFilter(){
    showX.value = !showX.value
}

</script>
