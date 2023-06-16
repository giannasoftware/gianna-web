<template>
    <Transition name="fade" enter-active-class="animate__animated animate__slideInRight"
        leave-active-class="animate__animated animate__slideOutRight" :duration="{ enter: 500, leave: 800 }">
        <aside class="relative z-10 md:hidden shadow" v-show="isActive">
            <div class="fixed inset-0 bg-black bg-opacity-25 z-10"></div>
            <div class="fixed inset-0 bottom-0 top-0 !right-0 h-[663px] w-60 z-20 py-8 space-y-2 font-bold bg-white px-4 pb-3 pt-2">
                <div class="flex flex-col items-start mb-5">
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
                        <TransitionGroup name="list" tag="div"
                            class="py-3 px-2 font-medium text-gray-900 rounded-md list-none" role="list">
                            <slot name="menu">

                            </slot>
                        </TransitionGroup>
                    </div>

                    <!-- Category -->
                   <slot name="category"></slot>

                    <!-- Account -->
                    <div class="border-t border-b border-gray-200 px-4 py-3 w-full">
                        <h3 class="-mx-2 -my-3 flow-root">
                            <!-- Expand/collapse section button -->
                            <button type="button"
                                class="flex w-full items-center justify-between bg-white py-3 text-gray-400 hover:text-gray-500"
                                aria-controls="filter-section-mobile-0" aria-expanded="false" @click.prevent="handleFilter">
                                <span class="font-medium text-gray-900">Account</span>
                                <span class="ml-6 flex items-center">
                                    <!-- Expand icon, show/hide based on section open state. -->
                                    <i class="bx bx-plus" :class="{ hidden: showFilter }"></i>
                                    <!-- Collapse icon, show/hide based on section open state. -->
                                    <i class="bx bx-minus" v-show="showFilter"></i>
                                </span>
                            </button>
                        </h3>

                        <!-- Filter section, show/hide based on section state. -->
                        <div class="pt-6" v-if="showFilter">
                            <div class="space-y-6">
                                <a href="#" class="block text-sm font-normal">
                                    My Profile
                                </a>
                                <a href="#" class="text-sm font-normal block">
                                    Orders
                                </a>
                                <a href="#" class="text-sm font-normal block">
                                    Saved Items
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Bottom Cart -->
                <!-- <div class="bottom-2 absolute"> -->
                <div class="space-y-2">
                    <router-link to="/account/sign-in"
                        class="flex items-center justify-center font-medium text-base bg-primary-500 py-2 text-white hover:bg-transparent hover:border hover:text-primary-500 hover:border-primary transition duration-200">
                        Login
                    </router-link>
                    <router-link to="/account/register"
                        class="flex bg-white items-center justify-center font-medium text-base py-2 text-primary-500 bg-transparent border-2 border-primary transition duration-200 hover:text-white hover:bg-primary-500">
                        Register
                    </router-link>
                </div>

                <!-- </div> -->

            </div>
        </aside>
    </Transition>
</template>

<script>

export default {
    name: 'SideBar',
    props: ['isActive'],
    emits: ['close'],
    data() {
        return {
            showFilter: false
        }
    },
    methods: {
        handleFilter() {
            this.showFilter = !this.showFilter
        }
    }
}
</script>

<style setup>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>