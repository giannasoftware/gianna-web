<template>
    <div class=" bg-secondary-500 pt-28 pb-20 h-96">
        <div class="container flex flex-col justify-between w-full h-full">
            <!-- breadcrumb -->
            <Breadcrumb subpage="Contact" />

            <div class="inline-flex items-center self-end -mt-10">
                <h3 class="text-xl md:text-2xl text-black font-bold">Contact</h3>
                <!-- <button class="rounded-full h-10 w-10 bg-primary-500 text-white text-center px-1 py-0.5">
            <i class="bx bx-play text-3xl"></i>
          </button> -->
            </div>
        </div>
    </div>

    <section class="-mt-12 pb-32" id="blogs" v-motion="'custom'" :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }" :delay="200">
        <div class="container">
            <div class="max-w-5xl mx-auto bg-white shadow-xl">
                <div class="flex flex-col md:flex-row">
                    <form class="max-w-2xl flex flex-col px-6 py-10 w-full">
                        <div class="flex flex-row justify-between items-center w-full mb-10">
                            <h3 class="text-2xl text-black font-bold tracking-wider">Leave a Message</h3>
                            <div class="">
                                <i class="bx bx-envelope text-3xl text-black"></i>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 items-center gap-x-8 mb-5">
                            <InputBox label="name" v-model="data.fname" />
                            <InputBox label="email address" v-model="data.email" />
                        </div>
                        <InputBox class="w-full mb-5" label="Subject" v-modal="data.subject" />
                        <textarea placeholder="Message"
                            class="w-full mb-5 border-gray-300 placeholder:text-gray-300 placeholder:capitalize text-base focus:border-0 focus:outline-0 focus:ring-stone-400 h-52"
                            v-model="data.message"></textarea>
                        <ButtonPrimary label="submit message" class="max-w-max px-6 py-2 uppercase text-sm shadow-sm" />
                    </form>
                    <div class="bg-secondary py-10 w-96 px-6">
                        <h3 class="text-2xl text-black font-bold tracking-wider mb-10">Contact Info</h3>

                        <div class="inline-flex gap-x-3 mb-10">
                            <RouterLink to="#"
                                class="flex items-center rounded-full bg-white px-2 py-2 h-10 w-10 hover:bg-primary-100 transition duration-300 group">
                                <i
                                    class="bx bxl-facebook text-black mx-auto text-2xl group-hover:text-gray-50 transition duration-300"></i>
                            </RouterLink>
                            <RouterLink to="#"
                                class="flex items-center rounded-full bg-white h-10 w-10 hover:bg-primary-100 transition duration-300 group">
                                <i
                                    class="bx bxl-instagram text-2xl text-black mx-auto group-hover:text-gray-50 transition duration-300"></i>
                            </RouterLink>
                            <RouterLink to="#"
                                class="flex items-center rounded-full bg-white h-10 w-10 hover:bg-primary-100 transition duration-300 group">
                                <i
                                    class="bx bxl-whatsapp text-2xl text-black mx-auto group-hover:text-gray-50 transition duration-300"></i>
                            </RouterLink>
                            <RouterLink to="#"
                                class="group flex items-center rounded-full bg-white h-10 w-10 hover:bg-primary-100 transition duration-300">
                                <i
                                    class="bx bxl-tiktok text-2xl text-black mx-auto group-hover:text-gray-50 transition duration-300"></i>
                            </RouterLink>
                        </div>
                        <div class="map w-full h-72 bg-white shrink-0">
                            <GoogleMap api-key="AIzaSyCtXsWz2FCLUZvu5Dam_wD7TKP0uY4X30c" mapTypeId="terrain"
                                style="width: 100%; height: 100%;" :center="center" :zoom="1">
                                <Rectangle :options="rectangle" />
                            </GoogleMap>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import InputBox from '@/components/form/InputBox.vue';
import Breadcrumb from '@/components/nav/Breadcrumb'
import ButtonPrimary from '@/components/utilities/ButtonPrimary.vue';
import { reactive, ref, defineComponent } from 'vue';
import { GoogleMap, Marker } from "vue3-google-map";


const data = reactive({
    fname: '',
    email: '',
    subject: '',
    message: ''
})


defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 33.678, lng: -116.243 };
        const rectangle = {
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            bounds: {
                north: 33.685,
                south: 33.671,
                east: -116.234,
                west: -116.251,
            },
        };

        return { center, rectangle };
    },
});

</script>
