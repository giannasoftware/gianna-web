<template>
    <div class="pt-8 pb-20 mt-20">
        <div class="container">
            <!-- Breadcrumb -->
            <Breadcrumb page="account" subpage="Login" />

            <div class="max-w-2xl mx-auto bg-white shadow mt-10">
                <div class="grid md:grid-cols-2 gap-x-0">
                    <div class="shrink-0 overflow-hidden hidden md:block">
                        <img src="../assets/img/banner-2.png" class="h-full">
                    </div>
                    <div class="flex flex-col items-start justify-center px-5 py-5">
                        <!-- description -->
                        <div class="block mb-6">
                            <h4 class="text-lg text-black font-medium">Welcome back,</h4>
                            <h3 class="text-2xl text-black font-bold">Login to your account</h3>
                        </div>
                        <!-- form -->
                        <div class="form-group w-full mb-5">
                            <input type="email" v-model="email" placeholder="Email address" class="w-full border-gray-200 placeholder:text-gray-300 placeholder:capitalize text-base focus:border-0 focus:outline-0 focus:ring-stone-400">
                        </div>

                        <div class="form-group w-full">
                            <input type="password" v-model="password" placeholder="Password" class="w-full border-gray-200 placeholder:text-gray-300 placeholder:capitalize text-base focus:border-0 focus:outline-0 focus:ring-stone-400">
                        </div>

                        <div class="inline-flex justify-between items-center mt-3 w-full">
                            <CheckBox label="Remember me" class="!pl-0"/>

                            <router-link :to="{name:'forget-password'}" class="text-gray-500">Forget Password</router-link>
                        </div>

                        <button type="submit" class="bg-primary text-white text-center w-full py-2 mt-5 mb-3 hover:border-primary hover:border transition duration-200"> Sign in</button>
                        <p class="text-center text-gray-500 text-sm "> Don’t have an account? <RouterLink :to="{name:'signUp'}" class="text-black font-medium">Sign up</RouterLink></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CheckBox from '@/components/form/CheckBox.vue';
import Breadcrumb from '@/components/nav/Breadcrumb';
</script>
