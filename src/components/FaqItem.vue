<template>
    <div class="bg-white shadow-sm px-6 py-5 max-w-sm inline-flex flex-col">
        <RouterLink :to="{ name: 'faq', params: { title: link } }"
            class="text-lg text-black hover:text-gray-900 font-semibold mb-2">
            {{ props.faqTitle }}
        </RouterLink>
        <p class="text-sm md:text-base text-gray-600 pb-5">
            {{ props.faqDesc }}
        </p>
        <div class="self-end">
            <RouterLink :to="{ name: 'faq', params: { title: link } }"
                class="text-black hover:text-gray-900 font-semibold mb-2">
                <i class="bi bi-arrow-up-right text-lg"></i>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['faqTitle', 'faqDesc'])

const link = props.faqTitle.toLowerCase().replaceAll(' ', '-')
</script>

<style lang="scss" scoped></style>