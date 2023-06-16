<template>
    <div v-if="isActive"
    class="absolute z-10 mt-4 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
            <div class="p-2">
                <slot name="menu"></slot>
            </div>
        </div>
    </div>
</template>


<script setup>

defineProps(['isActive'])
</script>