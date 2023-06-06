<template>
    <section class="py-10 md:py-16">
        <div class="container mx-auto space-y-8">
            <!-- Section title -->
            <div class="flex flex-1 items-center justify-between">
                <h2 class="text-xl md:text-2xl lg:text-4xl text-black font-bold tracking-normal">
                    {{ title }}
                </h2>
                <router-link :to="link" class="flex items-center text-black-90 text-sm">
                    See all <i class="bx bx-right-arrow-alt ml-3"></i>
                </router-link>
            </div>
            <slot name="content"></slot>
        </div>
    </section>
</template>


<script setup>

defineProps(['title', 'link']);
</script>
