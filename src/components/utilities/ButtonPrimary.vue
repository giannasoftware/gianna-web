<template>
    <Button
        class="bg-primary-500 py-3 px-3 text-white text-base font-medium text-center hover:border-primary hover:border transition duration-200 hover:bg-white hover:text-primary-500 shadow-sm w-full"
        @click.prevent="$emit('click')" v-bind="$attrs">
        {{ label }}
    </Button>
</template>


<script setup>

defineProps({
    label: {
        type: String,
        default: 'Submit'
    }
})
defineEmits(['click'])

</script>
