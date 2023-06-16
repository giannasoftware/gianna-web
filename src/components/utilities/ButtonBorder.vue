<script setup>

defineProps({
    label: {
        type: String,
        default: 'Submit'
    }
})
defineEmits(['click'])

</script>


<template>
    <Button class="border border-primary py-3 px-3 text-base font-medium text-primary-500 text-center flex items-center w-full"
        @click.prevent="$emit('click')" v-bind="$attrs">
        {{ label }}

        <slot name="icon"></slot>
    </Button>
</template>
