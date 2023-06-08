<template>
    <div class="pt-8 pb-20 mt-20">
        <div class="container">
            <!-- Breadcrumb -->
            <Breadcrumb page="account" subpage="Email Confirmation" />

            <div class="max-w-2xl mx-auto bg-white shadow mt-10">
                <div class="grid md:grid-cols-2 gap-x-0">
                    <div class="shrink-0 overflow-hidden hidden md:block">
                        <img src="../assets/img/banner-2.png" class="h-full">
                    </div>
                    <div class="flex flex-col items-start justify-center px-5 py-10 md:py-5">
                        <!-- description -->
                        <div class="block mb-6">
                            <h3 class="text-2xl text-black font-bold">A confirmation code
                                was sent to your email</h3>
                        </div>
                        <!-- form -->
                        <div class="form-group w-full mb-3">
                            <input type="text" v-model="code" placeholder="code"
                                class="w-full border-gray-200 placeholder:text-gray-300 placeholder:capitalize text-base focus:border-0 focus:outline-0 focus:ring-stone-400">
                        </div>

                        <div class="flex items-center flex-col w-full">
                            <button type="submit"
                                class="bg-primary text-white text-center w-full py-2 mt-5 mb-3 hover:border-primary hover:border transition duration-200">Reset
                                Password</button>
                            <p class="text-center text-gray-500 text-sm ">Don’t receive an email? <button type="submit"
                                    class="text-black font-medium">Click here</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumb from '@/components/nav/Breadcrumb';
</script>
