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
                    <form class="flex flex-col items-start justify-center px-5 py-10 md:py-5">
                        <!-- description -->
                        <div class="block mb-6">
                            <h4 class="text-lg text-black font-medium">Welcome back,</h4>
                            <h3 class="text-2xl text-black font-bold">Login to your account</h3>
                        </div>
                        <!-- form -->
                        <InputBox label="Email Address" v-model="formData.userEmail" type="email">
                            <span class="text-red-500 text-sm pt-2" v-for="error in v$.userEmail.$errors" :key="error.$uid"
                                v-if="formData.userEmail">
                                {{ error.$message }}
                            </span>
                        </InputBox>
                        <!-- password -->
                        <InputBox label="Password" v-model="formData.password" type="password">
                            <span class="text-red-500 text-sm pt-2" v-for="error in v$.password.$errors"
                                v-if="formData.password" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </InputBox>

                        <div class="inline-flex justify-between items-center w-full">
                            <CheckBox label="Remember me" class="!pl-0" />

                            <router-link :to="{ name: 'forget-password' }" class="text-gray-600 text-sm">Forget
                                Password</router-link>
                        </div>

                        <div class="flex flex-col items-center w-full">

                            <button type="submit" @click.prevent="handleForm"
                                class="bg-primary text-white text-center w-full py-2 mt-5 mb-3 hover:border-primary hover:border transition duration-200">Sign
                                in </button>
                            <p class="text-center text-gray-500 text-sm "> Don’t have an account? <RouterLink
                                    :to="{ name: 'signUp' }" class="text-black font-medium">Sign up</RouterLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CheckBox from '@/components/form/CheckBox.vue';
import InputBox from '@/components/form/InputBox.vue';
import Breadcrumb from '@/components/nav/Breadcrumb';
import formValidator from '@/composables/formValidator'
import { reactive } from 'vue';

// form data
// const formData = reactive({
//     userEmail: '',
//     password: ''
// })

// form validation
const { formData, result, v$ } = formValidator()


async function handleForm(){
    if(!result){
        console.log('submited')
    }
}

// const handleForm = async () => {
//     const result = await v$.value.$validate()
// }

</script>
