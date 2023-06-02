<template>
    <label
        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
        <input type="radio" name="color-choice" value="label" class="sr-only" aria-labelledby="color-choice-0-label">
        <span id="color-choice-0-label" class="capitalize sr-only">{{label}}</span>
        <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10" :class="`bg-${label}`"></span>
    </label>
</template>


<script setup>

defineProps(['label'])
</script>
