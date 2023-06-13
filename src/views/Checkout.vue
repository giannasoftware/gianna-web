<template>
    <div class="pt-8 pb-20 mt-20">
        <div class="container">
            <!-- Breadcrumb -->
            <Breadcrumb page="Shop" subpage="Checkout" />

            <div class="gap-x-10 gap-y-5 flex flex-col md:flex-row pt-10 justify-between">

                <div class="w-full md:max-w-4xl col-span-2">
                    <!-- Personal Information -->
                    <div class="bg-white block mb-7 shadow px-5 py-6">
                        <div class="border-b-2 border-gray-100 pb-3 flex items-center justify-between mb-8">
                            <h3 class="text-lg md:text-xl font-semibold text-black">Personal Details</h3>
                            <span class="bx bx-chevron-down text-2xl"></span>
                        </div>

                        <!-- User detail -->
                        <div class="form">
                            <div class="flex gap-x-4 gap-y-5 flex-col md:flex-row">
                                <InputBox label="first name" type="text" v-model="v$.fname.$model" class="mb-2">
                                    <span v-for="error in v$.fname.$errors" :key="error.$uid" class="text-red-400"
                                        v-if="v$.fname.$model">
                                        {{ error.$message }}
                                    </span>
                                </InputBox>

                                <InputBox label="last name" type="text" v-model="v$.lname.$model" class="mb-2">
                                    <span v-for="error in v$.lname.$errors" :key="error.$uid" class="text-red-400"
                                        v-if="v$.lname.$model">
                                        {{ error.$message }}
                                    </span>
                                </InputBox>
                            </div>

                            <div class="flex gap-x-4 gap-y-5 flex-col md:flex-row">
                                <InputBox label="email address" type="email" v-model="v$.userEmail.$model" class="mb-2">
                                    <span v-for="error in v$.userEmail.$errors" :key="error.$uid" class="text-red-400"
                                        v-if="v$.userEmail.$model">
                                        {{ error.$message }}
                                    </span>
                                </InputBox>

                                <InputBox label="phone number" type="tel" v-model="v$.phoneNumber.$model" class="mb-2">
                                    <span v-for="error in v$.phoneNumber.$errors" :key="error.$uid" class="text-red-400"
                                        v-if="v$.phoneNumber.$model">
                                        {{ error.$message }}
                                    </span>
                                </InputBox>
                            </div>


                        </div>
                    </div>

                    <!-- Shipping Deet -->
                    <div class="bg-white block mb-7 shadow px-5 py-6">
                        <div class="border-b-2 border-gray-100 pb-3 flex items-center justify-between mb-8">
                            <h3 class="text-lg md:text-xl font-semibold text-black">Shipping Information</h3>
                            <span class="bx bx-chevron-down text-2xl"></span>
                        </div>

                        <div class="form">

                            <InputBox label="Address e.g 123 Main Street" type="text" v-model="v$.address.$model"
                                class="mb-2 placeholder:lowercase">
                                <span v-for="error in v$.address.$errors" :key="error.$uid" class="text-red-400"
                                    v-if="formData.address">
                                    {{ error.$message }}
                                </span>
                            </InputBox>

                            <div class="flex gap-x-4 gap-y-5 flex-col md:flex-row">
                                <InputBox label="apartment, suites, etc (optional) e.g Apartment 4B" type="text"
                                    v-model="formData.apartment" class="mb-2 placeholder:lowercase" />

                                <InputBox label="city" v-model="v$.city.$model" class="mb-2">
                                    <span v-for="error in v$.city.$errors" :key="error.$uid" class="text-red-400"
                                        v-if="formData.city">
                                        {{ error.$message }}
                                    </span>
                                </InputBox>
                            </div>

                            <div class="flex gap-x-4 gap-y-5 flex-col md:flex-row">
                                <InputBox label="Postal code" type="text" v-model="v$.postalCode.$model"
                                    class="mb-2 placeholder:lowercase">
                                    <span v-for="error in v$.postalCode.$errors" :key="error.$uid" class="text-red-400"
                                        v-if="formData.postalCode">
                                        {{ error.$message }}
                                    </span>
                                </InputBox>


                                <InputBox label="state" type="tel" v-model="v$.state.$model" class="mb-2">
                                    <span v-for="error in v$.state.$errors" :key="error.$uid" class="text-red-400"
                                        v-if="formData.state">
                                        {{ error.$message }}
                                    </span>
                                </InputBox>

                                <InputBox label="country" type="tel" v-model="v$.countryCode.$model" class="mb-2">
                                    <span v-for="error in v$.countryCode.$errors" :key="error.$uid" class="text-red-400"
                                        v-if="formData.countryCode">
                                        {{ error.$message }}
                                    </span>
                                </InputBox>
                            </div>

                        </div>
                    </div>

                    <!-- Payment Options -->
                    <div class="bg-white shadow px-4 py-5">
                        <div class="border-b-2 border-gray-100 pb-3 flex items-center justify-between mb-8">
                            <h3 class="text-lg md:text-xl font-semibold text-black">Payment Options</h3>
                            <span class="bx bx-chevron-down text-2xl"></span>
                        </div>

                        <div class="form">

                            <RadioBox v-model="paymentType" :className="['mb-3']" v-for="option in valueOptions"
                                :key="option" :label="option.label" :option="option.value" name="paymentType">
                                <template #payment v-if="option.value === 'card'">
                                    <div class="mt-4"  v-if="paymentType === 'card'"
                                        >
                                        <InputBox label="Card Number" name="cardNumber"></InputBox>
                                        <div class="flex flex-col items-center md:flex-row gap-x-6 gap-y-5">
                                            <InputBox label="Expire Date" name="cardExp"></InputBox>
                                            <InputBox label="cvv" name="cardCvv"></InputBox>
                                        </div>
                                    </div>
                                </template>
                                <template #payment v-else></template>
                            </RadioBox>

                            {{ paymentType }}
                        </div>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="bg-white w-full lg:w-4/12 shadow px-5 py-6 min-h-fit max-h-max">
                    <div class="border-b-2 border-gray-100 pb-3">
                        <h3 class="text-lg md:text-xl font-semibold text-black">Order Summary</h3>
                    </div>

                    <!-- container -->
                    <div class="flex flex-col gap-y-4 py-6 items-center">
                        <!-- shipping method -->
                        <div class="inline-flex gap-x-3 gap-y-5 md:g-y-2 items-center justify-center w-full pb-10">
                            <ShippingTypeRadio inputLabel="Free" inputId="free-shipping" inputValue="free" v-model="shipping" name="shippingType"/>
                            <ShippingTypeRadio inputLabel="Express $9.99" inputId="express-shipping" inputValue="express" v-model="shipping" name="shippingType"/>
                        </div>

                        <div class="block self-start">

                            <div
                                class="inline-flex flex-1 items-center gap-x-4 mb-6 border-b-2 border-gray-200 pb-3 w-full">
                                <div class="w-16 h-16">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="flex-col flex items-start">
                                    <h4 class="text-sm text-black font-medium">Woman Cloth</h4>
                                    <div class="grid grid-cols-2 items-center gap-x-3">
                                        <p class="text-gray-400 capitalize text-11"><span class="pr-2">color:</span> <span
                                                class="font-medium text-gray-600">black</span></p>
                                        <p class="text-gray-400 capitalize text-11"><span class="pr-2">size:</span> <span
                                                class="font-medium text-gray-600">XL</span></p>
                                    </div>
                                    <div class="font-semibold text-black text-xl">$300</div>
                                </div>
                            </div>

                            <div
                                class="inline-flex flex-1 items-center gap-x-4 mb-6 border-b-2 border-gray-200 pb-3 w-full">
                                <div class="w-16 h-16">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="flex-col flex items-start">
                                    <h4 class="text-sm text-black font-medium">Woman Cloth</h4>
                                    <div class="grid grid-cols-2 items-center gap-x-3">
                                        <p class="text-gray-400 capitalize text-11"><span class="pr-2">color:</span> <span
                                                class="font-medium text-gray-600">black</span></p>
                                        <p class="text-gray-400 capitalize text-11"><span class="pr-2">size:</span> <span
                                                class="font-medium text-gray-600">XL</span></p>
                                    </div>
                                    <div class="font-semibold text-black text-xl">$300</div>
                                </div>
                            </div>

                            <div class="inline-flex flex-1 items-center gap-x-4 mb-6 pb-3 w-full">
                                <div class="w-16 h-16">
                                    <img src="" alt="" class="w-full h-full">
                                </div>
                                <div class="flex-col flex items-start">
                                    <h4 class="text-sm text-black font-medium">Woman Cloth</h4>
                                    <div class="grid grid-cols-2 items-center gap-x-3">
                                        <p class="text-gray-400 capitalize text-11"><span class="pr-2">color:</span> <span
                                                class="font-medium text-gray-600">black</span></p>
                                        <p class="text-gray-400 capitalize text-11"><span class="pr-2">size:</span> <span
                                                class="font-medium text-gray-600">XL</span></p>
                                    </div>
                                    <div class="font-semibold text-black text-xl">$300</div>
                                </div>
                            </div>
                        </div>

                        <!-- Price Summary -->
                        <PriceSummary subtotal=100 delivery=10 currency="$" />



                        <ButtonPrimary label="Pay Now" @click="(() => console.log('clicked'))" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import InputBox from '@/components/form/InputBox.vue';
import Breadcrumb from '@/components/nav/Breadcrumb';
import RadioBox from '@/components/form/RadioBox'
import PriceSummary from '@/components/cart/PriceSummary';
import formValidator from '@/composables/formValidator';
import ButtonPrimary from '@/components/utilities/ButtonPrimary';
import { ref } from 'vue'
import ShippingTypeRadio from '@/components/form/ShippingTypeRadio.vue';

const paymentType = ref(null)
const valueOptions = [{ value: 'card', label: 'Debit/credit card' }, { value: 'paypal', label: 'PayPal' }, { value: 'applePay', label: 'Apple Pay' }]
// validate form
const { formData, result, v$ } = formValidator()

const shipping = ref('')

</script>


<style>
.slot.active {
    display: block;
}</style>