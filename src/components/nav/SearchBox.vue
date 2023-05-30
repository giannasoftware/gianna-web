<template>
    <Teleport to="body" v-show="open">
        <Transition name="search">
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="open">
                <TransitionGroup enter-active-class="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                    leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                </TransitionGroup>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <button class="absolute top-48 right-4 md:right-96 text-2xl text-white z-20" @click.prevent="$emit('close')"><i class="bx bx-x"></i></button>
                    <div class="flex mt-60 items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionGroup enter-active-class="ease-out duration-300" enter-from-class="" enter-to-class="">
                            <div
                                class="relative transform rounded-lg bg-white text-left shadow-md transition-all sm:my-8 w-full sm:max-w-lg">
                                <div class="bg-white pt-4 pb-2 px-3 space-y-6">

                                    <div class="flex items-center flex-row-reverse">
                                        <input type="text"
                                            class="w-full border-b border-gray-300 outline-0 focus:ring-0 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal focus:border-primary"
                                            placeholder="Search for any product">

                                        <button class="flex items-center px-2">
                                            <i class="bx bx-search text-xl text-black"></i>
                                        </button>
                                    </div>
                                  <ListView/>
                                </div>
                            </div>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>


<script setup>

import { Transition, TransitionGroup } from 'vue';
import ListView from '../products/ListView'


defineProps(['open'])
defineEmits(['close'])
</script>
