<template>
    <div class="bg-white shadow-sm px-6 py-5 max-w-sm inline-flex flex-col">
        <RouterLink :to="{ name: 'faq' }" class="text-lg text-black hover:text-gray-900 font-semibold mb-2">
            {{ faqTitle }}
        </RouterLink>
        <p class="text-sm md:text-base text-gray-600 pb-5">
            {{ faqDesc }}
        </p>
        <div class="self-end">
            <RouterLink :to="{ name: 'faq' }" class="text-black hover:text-gray-900 font-semibold mb-2">
                <i class="bi bi-arrow-up-right text-lg"></i>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
defineProps(['faqTitle', 'faqDesc'])
</script>

<style lang="scss" scoped></style>