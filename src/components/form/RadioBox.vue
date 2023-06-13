<template>
    <label :for="label" class="flex items-center gap-x-2 text-sm font-medium leading-6 text-gray-900" :class="className">
        <input type="radio" :value="option" name="label" v-bind="$attrs" v-model="newValue"
            @change="$emit('update:newValue', $event.target.value)"
            class="h-4 w-4 border-gray-300 text-primary focus:ring-0 focus:bg-primary active:bg-primary active:ring-primary">
        <img src="" class="w-10 inline" v-if="logo">
        <span>{{ label }}</span>
    </label>

    <slot name="payment"></slot>
</template>


<script setup>
import { ref } from 'vue';


const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    option: {
        type: [String, Number],
        require: true,
        default: ''
    },
    logo: {
        default: '',
        type: String
    },
    className: {
        default: '',
    }
})

const newValue = ref('')

defineOptions({
    inheritAttrs: false
})


</script>

