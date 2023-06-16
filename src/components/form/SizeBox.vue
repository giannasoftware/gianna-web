<template>
    <label
        class="flex w-12 h-10 shrink-0 group relative  items-center justify-center border border-gray-300 py-5 px-4 text-sm font-medium uppercase hover:bg-primary-500 hover:text-white focus:outline-none cursor-pointer bg-white text-black shadow-sm">
        <input type="radio" name="size" :value="label" class="sr-only" v-bind="$attrs" v-model="selectedSize"
            @change="$emit('update:selectedSize', $event.target.value)">
        <span id="size-choice-2-label">{{ label }}</span>
        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    </label>
</template>


<script setup>
import { ref } from 'vue'


defineProps(['label'])

defineOptions({
    inheritAttrs: false
})

const selectedSize = ref('')
</script>
