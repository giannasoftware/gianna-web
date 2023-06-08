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
                    <div class="flex flex-col items-center justify-center px-5 py-10 md:py-5 col-span-2">
                        <!-- description -->
                        <div class="block mb-6 self-start">
                            <h4 class="text-lg text-black font-medium">Let’s get started,</h4>
                            <h3 class="text-2xl text-black font-bold">Setup an account</h3>
                        </div>
                        <!-- form -->
                        <div class="grid md:grid-cols-2 items-center gap-x-4 w-full">
                            <InputBox label="First Name" v-model="v$.fname.$model" type="text">
                                <span class="text-red-500 text-sm pt-2" v-for="error in v$.fname.$errors" :key="error.$uid" v-if="v$.fname.$model">
                                    {{ error.$message }}
                                </span>
                            </InputBox>
                            <InputBox label="Last Name" v-model="formData.lname" type="text">
                                <span class="text-red-500 text-sm pt-2" v-for="error in v$.lname.$errors" :key="error.$uid" v-if="formData.lname">
                                    {{ error.$message }}
                                </span>
                            </InputBox>
                        </div>
                        <InputBox label="Email Address" v-model="v$.userEmail.$model" type="email">
                            <span class="text-red-500 text-sm pt-2" v-for="error in v$.userEmail.$errors" :key="error.$uid"  v-if="v$.userEmail.$model">
                                {{ error.$message }}
                            </span>
                        </InputBox>

                        <InputBox label="Password" v-model="formData.password" type="password">
                            <span class="text-red-500 text-sm pt-2" v-for="error in v$.password.$errors" :key="error.$uid" v-if="v$.password.$model">
                                {{ error.$message }}
                            </span>
                        </InputBox>

                        <div class="flex items-center flex-col w-96">
                            <button type="submit" @click.prevent="handleForm"
                                class="bg-primary text-white text-center w-full py-2 mb-3 hover:bg-transparent hover:text-primary hover:border-primary hover:border transition duration-200">
                                Sign
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
import InputBox from '@/components/form/InputBox.vue';
import { formValidator } from '@/composables/formValidator'


// form validation
const {formData, result, v$ } = formValidator()


async function handleForm(){
    if(!result){
        console.log('submited')
    }
}

</script>
