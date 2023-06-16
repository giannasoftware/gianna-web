<template>
    <button type="submit"
        class="bg-primary-500 text-white text-center w-full py-2 mt-5 mb-3 hover:border-primary hover:border transition duration-200" @click.prevent="$emit('submitForm')">
        {{label}}
    </button>
</template>


<script setup>

defineProps(['label'])
defineEmits(['submitForm'])
</script>