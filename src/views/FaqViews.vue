<template>
    <div class="bg-secondary pt-28 pb-20 h-96">
        <div class="container flex flex-col justify-between h-full">
            <!-- breadcrumb -->
            <Breadcrumb subpage="FAQs" />

            <div class="inline-flex items-center self-end -mt-10">
                <h3 class="text-xl md:text-2xl text-black font-bold">Frequently Asked Questions</h3>
            </div>
        </div>
    </div>

    <!-- content -->
    <section class="-mt-10 pb-28" id="blogs">
        <div class="container">
            <div class="grid md:gred-cols-2 lg:grid-cols-3 gap-y-4">
                <FaqItem faqTitle="Returns and Exchanges"
                    faqDesc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />
                <FaqItem faqTitle="Returns and Exchanges"
                    faqDesc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />

                <FaqItem faqTitle="Returns and Exchanges"
                    faqDesc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" />
            </div>

        </div>
    </section>
</template>

<script setup>
import FaqItem from '@/components/FaqItem.vue';
import Breadcrumb from '@/components/nav/Breadcrumb'
</script>

<style scoped></style>