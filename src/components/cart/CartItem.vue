<template>
    <div class="inline-flex space-x-3 w-full border-b border-gray-200 pb-5">
        <div class="shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden">
            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="">
        </div>
        <div class="w-full">
            <div class="flex justify-between flex-col md:flex-row mb-3">
                <div class="">
                    <h3>
                        <a href="#">{{props.name}}</a>
                    </h3>
                    <p class="price font-medium mb-4 hidden md:block">{{props.currency}}{{props.price}}</p>
                </div>
                <div class="">
                    <h3 class="text-lg md:text-2xl font-bold text-gray-900">{{props.currency}}{{props.subtotal}}</h3>
                </div>
            </div>

            <div class="flex justify-between flex-col lg:flex-row gap-y-3">

                <div class="inline-flex items-center gap-x-1 gap-y-3 xs:flex-wrap sm:flex-row">
                    <!-- select size -->
                    <div class="border border-gray-300 px-2 py-0.5 flex items-center justify-between">
                        <span class="uppercase pr-1 text-sm">Xl</span>
                        <span class="bx bx-chevron-down text-lg"></span>
                    </div>
                    <!-- select color -->
                    <div class="box border border-gray-300 px-2 py-1.5 flex items-center justify-between">
                        <span class="capitalize pr-1 text-sm">Black</span>
                        <span class="bx bx-chevron-down"></span>
                    </div>
                    <!-- quantity -->
                    <div class="box border border-gray-300 px-2 py-1 flex items-center justify-between text-sm">
                        <button @click="decreaseValue">
                            <span class="bx bx-minus"></span>
                        </button>
                        <input type="text" :value="quantity" name="quantity"
                            class="text-sm border-0 w-7 h-6 mx-1 px-1 focus:outline-offset-0 focus:outline-0 focus:border-0 focus:ring-0"
                            disabled>
                        <!-- <span class="capitalize px-4">100</span> -->
                        <button @click.prevent="increaseValue">
                            <span class="bx bx-plus"></span>
                        </button>
                    </div>
                </div>

                <div class="space-x-4 flex items-center">
                    <button class="flex items-center text-sm">
                        <span class="bx bx-heart pr-1 text-lg"></span>
                        <span>Save</span>
                    </button>
                    <button class="flex items-center text-sm">
                        <span class="bx bx-x pr-1 text-lg"></span>
                        <span>Remove</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const quantity = ref(1);

const increaseValue = () => {
    quantity.value++
}
const decreaseValue = () => {
    if (quantity.value <= 1) {
        quantity.value = 1
        return;
    }

    quantity.value--
}

</script>