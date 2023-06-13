<template>
    <div class="max-w-2xl" :class="colors">
        <div
            class="relative isolate overflow-hidden shadow-sm rounded-3xl px-5 pt-8 md:pt-10 flex flex-col-reverse md:flex-row md:gap-x-10 md:px-8 pb-10">
            <div class="text-left max-w-lg">
                <h4 class="text-white text-3xl tracking-widest font-medium font-Cormorant leading-loose mb-1">Collectives
                </h4>
                <h2 class="text-xl md:text-3xl font-semibold tracking-tight text-white">Boost your productivity. Start using
                    our app today.</h2>
                <p class="mt-2 tex-sm md:text-lg leading-8 text-slate-50">Ac euismod vel sit maecenas id pellentesque eu sed
                    consectetur. Malesuada adipiscing sagittis vel nulla.</p>
                <!-- <div class="mt-10 flex items-center= justify-center gap-x-6 lg:justify-start"> -->
                <router-link :to="{ name: 'product-list' }"
                    class="capitalize inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-4">
                    Browse now <span class="bx bx-chevron-right ml-4"></span>
                </router-link>
                <!-- </div> -->
            </div>
            <div class="shrink-0 md:-mr-40 w-100 md:w-80 md:-mb-20 border-0">
                <img src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="" class="w-full h-full object-cover object-center">
            </div>
        </div>
    </div>
</template>


<script setup>

defineProps(['colors'])

</script>
 