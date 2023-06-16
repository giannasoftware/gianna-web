<template>
    <div class="pt-8 pb-20 mt-20">
        <div class="container">
            <!-- Breadcrumb -->
            <Breadcrumb page="account" subpage="forget password" />

            <div class="max-w-2xl mx-auto bg-white shadow mt-10">
                <div class="grid md:grid-cols-2 gap-x-0">
                    <div class="shrink-0 overflow-hidden hidden md:block">
                        <img src="../assets/img/banner-2.png" class="h-full">
                    </div>
                    <div class="flex flex-col items-start justify-center px-5 py-10 md:py-5">
                        <!-- description -->
                        <div class="block mb-6">
                            <h4 class="text-lg text-black font-medium">Forgot Password?</h4>
                            <h3 class="text-2xl text-black font-bold">A reset link will be sent to you</h3>
                        </div>
                        <!-- form -->
                        <InputBox label="Email address" v-model="formData.userEmail" type="email">
                            <span class="text-red-500 text-sm pt-2" v-for="error in v$.userEmail.$errors" :key="error.$uid" v-if="v$.userEmail.$model">
                                {{ error.$message }}
                            </span>
                        </InputBox>

                        <div class="flex items-center flex-col w-full">
                            <button type="submit"
                                class="bg-primary-500 text-white text-center w-full py-2 mt-2 mb-3 hover:border-primary hover:border transition duration-200">Reset
                                Password</button>
                            <p class="text-center text-gray-500 text-sm ">Back to <RouterLink :to="{ name: 'login' }"
                                    class="text-black font-medium">Login</RouterLink>
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
import InputBox from '@/components/form/InputBox';
import formValidator from '@/composables/formValidator'


// form validation
const { formData, result, v$ } = formValidator()



</script>
