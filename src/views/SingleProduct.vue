<template>
    <main class="mt-32 pb-32">
        <div class="container space-y-14">
            <!-- breadcrumb -->
            <Breadcrumb page="Shop" subpage="Woman Cloth" class="py-4" />

            <!-- Product Details -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0">
                <!-- images -->
                <Suspense>
                    <ProductView />
                    
                </Suspense>
            </div>
        </div>
    </main>
</template>

<script setup>
import Breadcrumb from '@/components/nav/Breadcrumb.vue';
import ProductView from '@/components/ProductView.vue'

import { ref } from 'vue';




</script>
