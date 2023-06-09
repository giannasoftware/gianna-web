<template>
    <div class="form-group w-full mb-5 last-child:mb-0">
        <input type="text" :placeholder="label" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs" class="w-full border-gray-300 placeholder:text-gray-300 placeholder:capitalize text-base focus:border-0 focus:outline-0 focus:ring-stone-400">
        <slot></slot>
    </div>
</template>


<script setup>
defineProps({
    'label': {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
})

defineOptions({
  inheritAttrs: false
})
</script>
