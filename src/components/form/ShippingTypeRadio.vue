<template>
    <div class="block">
        <input type="radio" name="label" :id="inputId" class="hidden" v-bind="$attrs" :value="inputValue" v-model="modalValue"
            @click="$emit('update:modalValue', $event.target.value)">
        <label :for="inputId"
            class="text-sm text-black px-4 py-2 font-medium hover:bg-primary-100 hover:transition-shadow hover:text-gray-50 hover:shadow duration-150">
            {{ inputLabel }}
        </label>
    </div>
</template>

<script setup>
import { ref } from 'vue';


defineProps(['inputName', 'inputId', 'inputValue', 'inputLabel'])

const modalValue = ref('')

defineOptions({
    inheritAttrs: false
})
</script>

<style scoped>
input:checked + label {
    background-color: hsl(326, 93%, 61%);
    color: #fff;
    padding-inline: .875rem;
}
</style>