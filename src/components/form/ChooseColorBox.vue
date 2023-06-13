<template>
    <label
        class="relative h-8 w-8 -m-0.5 flex cursor-pointer items-center justify-center rounded-full focus:outline-none ring-gray-400 transition-shadow hover:shadow" :for="colorId" :title="colorValue">
        <input type="radio" :name="colorName" :id="colorId" v-model="modalColor" :value="colorValue" class="sr-only" v-bind="$attrs"
             @change="$emit('update:modalColor', $event.target.value)"/>
        <span id="color-choice-0-label" class="capitalize sr-only">{{ colorLabel }}</span>
        <span aria-hidden="true" class="h-8 w-8 rounded-full border border-black border-opacity-10"
            :class="`bg-${colorLabel}`"></span>
        <i class="bx bx-check text-xl absolute text-black transition-all duration-150"></i>
    </label>
</template>


<script setup>
import { ref } from 'vue';


const modalColor = ref('')

// props
defineProps(['colorLabel', 'colorName', 'colorId', 'colorValue'])
defineOptions({
    inheritAttrs: false
})
</script>


<style scoped>

input:checked{
   box-shadow: 0px 10px 0px -3px rgba(0, 0, 0, 0.1);
}

</style>