<template>
    <Teleport to="body">
        <Transition name="sidebar" mode="out-in" v-if="props.isActive">
            <aside class="md:hidden shadow" v-show="props.isActive">
                <div class="fixed inset-0 bg-black bg-opacity-25"></div>
                <div
                    class="z-20 fixed inset-0 top-0 bottom-0 w-60 m-auto     py-8 space-y-2 font-bold bg-white px-4 pb-3 pt-2">
                    <div class="flex flex-col items-start">
                        <div class="flex flex-1 items-center justify-between w-full py-1">
                            <route-link to="/cart" class="inline-flex px-1 py-3">
                                <h6 class="text-sm font-medium mr-4">Cart Items:</h6>
                                <div class="text-sm font-normal">0</div>
                            </route-link>
                            <button type="button" @click.prevent="$emit('close')"
                                class="rounded-md text-gray-900 hover:text-text-gray-700 focus:outline-none ml-auto">
                                <span class="sr-only">Close panel</span>
                                <i class="bx bx-x text-2xl"></i>
                            </button>
                        </div>

                        <!-- Menu -->
                        <div class="relative border-t boder-gray-200 flex- flex-col items-center pt-4 w-full">
                            <TransitionGroup name="list" tag="ul" class="py-3 px-2 text-black list-none space-y-3"
                                role="list" appear>
                                <slot name="menu">

                                </slot>
                            </TransitionGroup>
                        </div>

                        <!-- list -->
                        <slot name="list"></slot>

                        <!-- Account -->
                        <div class="px-4 py-3 w-full mt-60 relative">
                            <h3 class="-mx-2 -my-3 flow-root">
                                <!-- Expand/collapse section button -->
                                <button type="button"
                                    class="inline-flex w-full items-center gap-x-2 bg-white py-3 text-gray-900 hover:text-gray-900"
                                    aria-controls="filter-section-mobile-0" aria-expanded="false"
                                    @click.prevent="handleFilter">
                                    <span class="font-medium text-sm">
                                        <i class="bi bi-person-circle"></i>
                                    </span>
                                    <span class="font-medium text-gray-900">Account</span>
                                    <span class="ml-auto">
                                        <i class="bi bi-chevron-right" v-show="!showFilter"></i>
                                        <i class="bi bi-chevron-down" v-show="showFilter"></i>
                                    </span>
                                </button>
                            </h3>

                            <!-- Filter section, show/hide based on section state. -->
                            <div class="pt-6 absolute -top-40 bg-gray-50 shadow-sm px-4 pb-4 left-0 w-full border border-gray-50"
                                v-if="showFilter">
                                <TransitionGroup tag="div" class="space-y-6">
                                    <router-link to="#" class="block text-sm font-normal">
                                        My Profile
                                    </router-link>
                                    <router-link to="#" class="text-sm font-normal block">
                                        Orders
                                    </router-link>
                                    <router-link to="#" class="text-sm font-normal block">
                                        Saved Items
                                    </router-link>
                                </TransitionGroup>
                            </div>
                        </div>

                    </div>

                    <!-- Bottom Cart -->
                    <!-- <div class="bottom-2 absolute"> -->
                    <!-- <div class="space-y-2">
                        <router-link to="/account/sign-in"
                            class="flex items-center justify-center font-medium text-base bg-black py-2 text-white hover:bg-transparent hover:border hover:text-primary-500 hover:border-primary transition duration-200">
                            Login
                        </router-link>
                        <router-link to="/account/register"
                            class="flex bg-white items-center justify-center font-medium text-base py-2 text-black bg-transparent border-2 border-primary transition duration-200 hover:text-white hover:bg-gray-600">
                            Register
                        </router-link>
                    </div> -->

                    <!-- </div> -->

                </div>
            </aside>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps({
    isActive: {
        default: false,
        type: Boolean
    }
})

defineEmits(['close'])

const showFilter = ref(null)


// method
const handleFilter = () => {
    showFilter.value = !showFilter.value
}

</script>

<style>
/* sidebar  animation*/
.list-enter-active,
.list-move {
    transition: all 0.3s ease-in;
}

.list-leave-active {
    transition: all 0.8s ease-out;
}

.list-enter-from,
.list-leave-to {
    transform: translateX(30px);
    opacity: 0;
}
</style>