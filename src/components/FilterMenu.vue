<template>
    <div class="border-b border-gray-200 py-4 px-2 bg-white">
        <h3 class="-mx-1 -my-3 flow-root text-lg">
            <button type="button"
                class="flex w-full items-center justify-between py-3 text-gray-400 hover:text-gray-500 px-4 border-b-1 border-gray-300"
                aria-controls="filter-section-mobile-0" aria-expanded="false" @click.prevent="openFilter">
                <span class="font-medium text-gray-900">{{ name }}</span>
                <span class="ml-5 flex items-center">
                    <!-- Expand icon, show/hide based on section open state. -->
                    <i class="bx bx-plus" :class="{ hidden: isExpanded }"></i>
                    <!-- Collapse icon, show/hide based on section open state. -->
                    <i class="bx bx-minus" v-show="isExpanded"></i>
                </span>
            </button>
        </h3>
        <div class="pt-6 pb-5" v-if="isExpanded">
            <div class="space-y-4">
                <slot name="filterMenu"></slot>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps(['name', 'open'])

// defineEmits(['openFilter']);

const isExpanded = ref(props.open)

const openFilter = () => {
    isExpanded.value = !isExpanded.value
}


</script>
