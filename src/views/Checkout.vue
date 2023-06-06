<template>
    <div class="pt-8 pb-20 mt-20">
        <div class="container">
            <!-- Breadcrumb -->
            <Breadcrumb page="Shop" subpage="Checkout" />

            <div class="gap-x-6 gap-y-5 flex flex-col md:flex-row pt-10">

                <div class="bg-white w-full md:max-w-4xl shadow col-span-2 px-5 py-5 md:py-8">
                    <div class="border-b-2 border-gray-100 pb-3">
                        <h3 class="text-lg md:text-2xl font-semibold text-black">Personal Details</h3>
                    </div>
                </div>
                <div class="bg-white w-full lg:w-3/12 shadow px-6 py-8">
                    <div class="border-b-2 border-gray-100 pb-3">
                        <h3 class="text-lg md:text-2xl font-semibold text-black">Order Summary</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumb from '@/components/nav/Breadcrumb';
</script>
