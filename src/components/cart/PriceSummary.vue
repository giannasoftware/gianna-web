<template >
    <div class="summary flex flex-col w-full mb-5">
        <span sr-only="order summary"></span>
        <div class="pb-3 border-b border-gray-100 flex justify-between items-center font-medium text-base">
            <!-- title -->
            <h3>Subtotal</h3>
            <!-- price -->
            <p>
                <span sr-only="subtotal">{{ `${currency}${subtotal}` }}</span>
            </p>
        </div>
        <!-- discount -->
        <div class="py-1 text-gray-500 flex justify-between items-center text-sm">
            <!-- discount -->
            <h3>Discount</h3>
            <!-- price -->
            <p>
                <span sr-only="discount">{{ `${currency}${discount}` }}</span>
            </p>
        </div>
        <!-- delivery -->
        <div class="py-1 text-gray-500 flex justify-between items-center text-sm">
            <!-- title -->
            <h3>Delivery</h3>
            <!-- price -->
            <p>
                <span sr-only="deliverey">{{ `${currency}${delivery}` }}</span>
            </p>
        </div>
        <!-- tax -->
        <div class="pb-2 border-b text-gray-500 flex justify-between items-center text-sm">
            <!-- title -->
            <h3>Tax</h3>
            <!-- price -->
            <p>
                <span sr-only="tax">{{ `${currency}${tax}` }}</span>
            </p>
        </div>
        <div class="py-3 flex justify-between items-center font-medium text-base">
            <!-- title -->
            <h3>Total</h3>
            <!-- price -->
            <p>
                <span sr-only="subtotal">{{ `${currency}${total}` }}</span>
            </p>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    currency: {
        type: String,
        default: "$"
    },
    subtotal: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    delivery: {
        type: Number,
        default: 0
    },
    tax: {
        type: Number,
        default: 0
    },
})

const total = parseInt(props.subtotal) + parseInt(props.discount) + parseInt(props.delivery) + (props.tax)

</script>
