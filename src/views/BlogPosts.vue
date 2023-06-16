<template>
    <!-- <div class="absolute top-3 left-0 right-0"> -->
    <div class="bg-secondary-500 pt-28 pb-20 h-96">
        <div class="container flex flex-col justify-between h-full">
            <!-- breadcrumb -->
            <Breadcrumb subpage="Press"/>

            <div class="inline-flex items-center self-end -mt-10">
                <h3 class="text-xl md:text-2xl text-black font-bold">Press</h3>
            </div>
        </div>
    </div>


    <!-- content -->
    <section class="-mt-10 pb-32" id="blogs">
        <div class="container">
            <div class="grid md:grid md:grid-cols-2 lg:grid-cols-3 items-center gap-x-6 gap-y-10">
                <div class="blog-item max-w-sm  inline-flex flex-col gap-y-10 bg-white shadow-sm hover:shadow transition-all duration-200">
                    <div class="shrink-0 overflow-hidden relative">
                        <img src="../assets/img/blog/blog.jpg" alt="" class="w-full object-cover object-center">
                        <div class="absolute bottom-0 py-4 px-3 bg-white left-0 text-sm font-medium">Jan 22, 2019</div>
                    </div>
                    <div class="px-4 pb-5">
                        <RouterLink to="#" class="text-lg md:text-xl font-medium text-gray-800 transition duration-150 hover:text-black">The More Important the Work, the More Important the Rest
                        </RouterLink>
                        <p class="text-sm md:text-base text-gray-500 mt-4 pb-3">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium
                        </p>
                    </div>
                </div>
                <div class="blog-item max-w-sm  inline-flex flex-col gap-y-10 bg-white shadow-sm hover:shadow transition-all duration-200">
                    <div class="shrink-0 overflow-hidden relative">
                        <img src="../assets/img/blog/blog.jpg" alt="" class="w-full object-cover object-center">
                        <div class="absolute bottom-0 py-4 px-3 bg-white left-0 text-sm font-medium">Jan 22, 2019</div>
                    </div>
                    <div class="px-4 pb-5">
                        <RouterLink to="#" class="text-lg md:text-xl font-medium text-gray-800 transition duration-150 hover:text-black">The More Important the Work, the More Important the Rest
                        </RouterLink>
                        <p class="text-sm md:text-base text-gray-500 mt-4 pb-3">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium
                        </p>
                    </div>
                </div> 
                <div class="blog-item max-w-sm  inline-flex flex-col gap-y-10 bg-white shadow-sm hover:shadow transition-all duration-200">
                    <div class="shrink-0 overflow-hidden relative">
                        <img src="../assets/img/blog/blog.jpg" alt="" class="w-full object-cover object-center">
                        <div class="absolute bottom-0 py-4 px-3 bg-white left-0 text-sm font-medium">Jan 22, 2019</div>
                    </div>
                    <div class="px-4 pb-5">
                        <RouterLink to="#" class="text-lg md:text-xl font-medium text-gray-800 transition duration-150 hover:text-black">The More Important the Work, the More Important the Rest
                        </RouterLink>
                        <p class="text-sm md:text-base text-gray-500 mt-4 pb-3 ">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium
                        </p>
                    </div>
                </div>
                <div class="blog-item max-w-sm  inline-flex flex-col gap-y-10 bg-white shadow-sm hover:shadow transition-all duration-200">
                    <div class="shrink-0 overflow-hidden relative">
                        <img src="../assets/img/blog/blog.jpg" alt="" class="w-full h-full object-cover object-center">
                        <div class="absolute bottom-0 py-4 px-3 bg-white left-0 text-sm font-medium">Jan 22, 2019</div>
                    </div>
                    <div class="px-4 pb-5">
                        <RouterLink to="#" class="text-lg md:text-xl font-medium text-gray-800 transition duration-150 hover:text-black">The More Important the Work, the More Important the Rest
                        </RouterLink>
                        <p class="text-sm md:text-base text-gray-500 mt-4 pb-3">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- </div> -->
</template>

<script setup>
import Breadcrumb from '@/components/nav/Breadcrumb'
</script>
