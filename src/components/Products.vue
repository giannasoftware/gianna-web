<template>
        <GridView v-for="(item, i ) in items" :item="item" :key="i++" />
</template>

<script setup>
import GridView from '@/components/products/GridView.vue';
import productsAPI from '@/api/products';
import { ref } from 'vue';


const items = ref()

items.value = await productsAPI.getProducts(6);



</script>