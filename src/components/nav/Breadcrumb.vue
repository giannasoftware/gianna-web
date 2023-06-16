<template>
    <nav aria-label="Breadcrumb" class="py-4 z-0 relative">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <a href="/"
                    class="inline-flex items-center text-base font-normal text-gray-600 hover:text-primary-500 dark:text-gray-500 dark:hover:text-black">
                   <!-- <span class="bx bxs-home mr-1"></span> -->
                    Home
                </a>
            </li>
            <li v-if="page">
                <div class="flex items-center">
                    <span class="bx bxs-chevron-right text-gray-500" :class="[ subpage  ? 'font-normal text-gray-600' : 'text-black font-medium']"></span>
                    <a href="#"
                        class="ml-1 text-base capitalize hover:text-primary-500 md:ml-2  dark:hover:text-black" :class="[ subpage  ? 'font-normal text-gray-600' : 'text-black font-medium']">{{page}}</a>
                </div>
            </li>
            <li aria-current="page" v-if="subpage">
                <div class="flex items-center">
                   <span class="bx bxs-chevron-right text-black"></span>
                    <span class="ml-1 text-base font-medium md:ml-2 dark:text-black capitalize">{{subpage}}</span>
                </div>
            </li>
        </ol>
    </nav>
</template>


<script setup>

defineProps(['subpage', 'page'])

</script>
