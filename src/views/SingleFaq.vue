<template>
    <div class="bg-secondary-500 pt-28 pb-20 h-96">
        <div class="container flex flex-col justify-between h-full">
            <!-- breadcrumb -->
            <Breadcrumb page="FAQs" subpage="Shipping" />

            <div class="inline-flex items-center self-end -mt-10">
                <h3 class="text-xl md:text-2xl text-black font-bold">Shipping</h3>
            </div>
        </div>
    </div>

    <section class="-mt-16 md:-mt-20 pb-28" id="">
        <div class="container">
            <div class="max-w-xl mx-auto bg-white mb-5">
                <InputBox placeholder="Search for your question"
                    class="border-0 text-sm py-3 font-normal px-4 focus:ring-0 focus:border-b-2 focus:border-black" />
            </div>
            <div class="max-w-3xl mx-auto bg-white shadow-sm md:shadow-xl py-5 px-4 md:py-10 md:px-6">
                <Accordion title="How long does shipping product takes"
                    description="In most states, the legal limit in blood alcohol to not be considered DUI is 500 to 1,000 mg/L. Ther" />
            </div>
        </div>
    </section>
</template>

<script setup>
import InputBox from '@/components/form/InputBox.vue';
import Breadcrumb from '@/components/nav/Breadcrumb'
import Accordion from '@/components/utilities/Accordion.vue';
</script>

<style scoped></style>