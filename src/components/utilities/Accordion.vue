<template>
    <div>
        <h2 id="accordion-collapse-heading-1">
            <button type="button"
                class="flex items-center justify-between w-full p-5 font-semibold text-left text-base md:text-lg text-black border-b border-gray-200 hover:bg-gray-50"
                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"

                aria-controls="accordion-collapse-body-1" @click.prevent="() => isOpen = !isOpen">
                <span>{{ props.title}}</span>
                <i class="bi bi-chevron-down" :class="{'hidden': isOpen}"></i>
                <i class="bi bi-chevron-up" v-if="isOpen"></i>
            </button>
        </h2>
        <div id="accordion-collapse-body-1" :class="[ isOpen ? 'active' : 'hidden']"   aria-labelledby="accordion-collapse-heading-1">
            <div class="px-2 py-4 md:py-10 md:px-5 ">
                <p class="mb-2 text-gray-500 dark:text-gray-400 text-sm">
                   {{props.description}}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps(['title', 'description'])
const isOpen = ref(false)

</script>

<style scoped>
.active{
    transition: height 300ms cubic-bezier(0.3, 0, 0.6, 1);
}
</style>