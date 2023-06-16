<template #default>
    <GridView v-for="(item, i ) in items" :item="item" :key="i++" v-motion :initial="{ opacity: 0, y: 100, scale: 0.6 }"
        :visible="{
            opacity: 1, y: 0, scale: 1, transition: {
                // repeat: Infinity,
                repeatType: 'mirror',
                delay: `${i}00`,
            },
        }" :delay="`${i}00`" />
</template>

<script setup>
import GridView from '@/components/products/GridView.vue';
import productsAPI from '@/api/products';
import { ref } from 'vue';

const items = ref()

items.value = await productsAPI.getProducts(6);



</script>