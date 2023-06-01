<template>
    <nav aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <a href="#"
                    class="inline-flex items-center text-base font-normal text-gray-600 hover:text-primary dark:text-gray-500 dark:hover:text-black">
                   <!-- <span class="bx bxs-home mr-1"></span> -->
                    Home
                </a>
            </li>
            <li v-if="page">
                <div class="flex items-center">
                    <span class="bx bxs-chevron-right"></span>
                    <a href="#"
                        class="ml-1 text-base font-normal text-gray-6   00 hover:text-primary md:ml-2 dark:text-gray-500 dark:hover:text-black">{{page}}</a>
                </div>
            </li>
            <li aria-current="page" v-if="subpage">
                <div class="flex items-center">
                   <span class="bx bxs-chevron-right text-gray-500"></span>
                    <span class="ml-1 text-base font-medium md:ml-2 dark:text-black">{{subpage}}</span>
                </div>
            </li>
        </ol>
    </nav>
</template>


<script setup>

defineProps(['subpage', 'page'])

</script>
