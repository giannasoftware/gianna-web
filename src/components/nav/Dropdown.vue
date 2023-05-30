<template>
    <div v-if="isActive"
        class="absolute left-1/2 z-10 mt-5 flex w-52 origin-top-right rounded-md max-w-max -translate-x-1/2 px-4">
        <div
            class="w-screen max-w-md flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div class="p-2">
                <slot name="menu"></slot>
            </div>
        </div>
    </div>
</template>


<script setup>

defineProps(['isActive'])
</script>