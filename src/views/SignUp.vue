<template>
    <div class="pt-8 pb-20 mt-20">
        <div class="container">
            <!-- Breadcrumb -->
            <Breadcrumb page="Account" subpage="Create Account" />
            <div class="max-w-3xl mx-auto bg-white shadow mt-10">
                <div class="grid md:grid-cols-3 gap-x-8">
                    <div class="shrink-0 overflow-hidden hidden md:block w-64">
                        <img src="../assets/img/banner-2.png" class="h-full">
                    </div>
                    <div class="flex flex-col items-center justify-center px-5 py-5 col-span-2">
                        <!-- description -->
                        <div class="block mb-6 self-start">
                            <h4 class="text-lg text-black font-medium">Let’s get started,</h4>
                            <h3 class="text-2xl text-black font-bold">Setup an account</h3>
                        </div>
                        <!-- form -->
                        <div class="grid md:grid-cols-2 items-center gap-x-4 w-full py-6">
                            <div class="form-group w-full mb-5">
                                <input type="text" v-model="fname" placeholder="First naame"
                                    class="w-full border-gray-200 placeholder:text-gray-300 placeholder:capitalize text-base focus:border-0 focus:outline-0 focus:ring-stone-400">
                            </div>
                            <div class="form-group w-full mb-5">
                                <input type="text" v-model="lname" placeholder="Last name"
                                    class="w-full border-gray-200 placeholder:text-gray-300 placeholder:capitalize text-base focus:border-0 focus:outline-0 focus:ring-stone-400">
                            </div>
                        </div>
                        <div class="form-group w-full mb-5">
                            <input type="email" v-model="email" placeholder="Email address"
                                class="w-full border-gray-200 placeholder:text-gray-300 placeholder:capitalize text-base focus:border-0 focus:outline-0 focus:ring-stone-400">
                        </div>

                        <div class="form-group w-full">
                            <input type="password" v-model="password" placeholder="Password"
                                class="w-full border-gray-200 placeholder:text-gray-300 placeholder:capitalize text-base focus:border-0 focus:outline-0 focus:ring-stone-400">
                        </div>

                        <div class="flex items-center flex-col w-96">
                            <button type="submit" class="bg-primary text-white text-center w-full py-2 mt-5 mb-3 hover:bg-transparent hover:text-primary hover:border-primary hover:border transition duration-200"> Sign
                                in</button>
                            <p class="text-center text-gray-500 text-sm "> Already have an account? <RouterLink
                                    :to="{ name: 'login' }" class="text-black font-medium">Login</RouterLink>
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
