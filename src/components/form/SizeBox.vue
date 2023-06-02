<template>
    <label
        class="group relative flex items-center justify-center border border-gray-300 py-5 px-1 text-sm font-medium uppercase hover:bg-primary hover:text-white focus:outline-none flex-1 md:flex-0 cursor-pointer bg-white text-black shadow-sm">
        <input type="radio" name="size-choice" :value="label" class="sr-only" aria-labelledby="size-choice-2-label">
        <span id="size-choice-2-label">{{ label }}</span>
        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
    </label>
</template>


<script setup>

defineProps(['label'])
</script>
