<template>
    <label :for="label" class="flex items-center gap-x-2 text-sm font-medium leading-6 text-gray-900" :class="className">
        <input type="radio" :value="option" v-bind="$attrs" :checked="modelValue === option"
            @change="$emit('update:modalValue', option)"
            class="h-4 w-4 border-gray-300 text-primary focus:ring-0 focus:bg-primary active:bg-primary active:ring-primary">
        <img src="" class="w-10 inline" v-if="logo">
        <span>{{ label }}</span>
    </label>

    <slot name="payment"></slot>
</template>


<script setup>
import { watch } from 'vue';


const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
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

defineOptions({
    inheritAttrs: false
})


watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== option) {
      // If the model value changes externally, update the checked state
      emit('update:modelValue', '');
    }
  }
);

</script>
