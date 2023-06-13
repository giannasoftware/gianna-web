<template>
    <div class="blog-item inline-flex flex-col gap-y-10 bg-white shadow-sm hover:shadow transition-all duration-200">
        <div class="flex-1 shrink-0 h-32 aspect-square overflow-hidden relative">
            <img src="{{image}}" alt="{{ title }}" class="w-full h-full object-cover object-center">
            <div class="absolute bottom-0 py-4 px-3 bg-white left-0 text-sm font-medium">Jan 22, 2019</div>
        </div>
        <div class="px-4 pb-5">
            <RouterLink to="#"
                class="text-lg md:text-xl font-medium text-gray-800 transition duration-150 hover:text-black">The More
                {{title}}
            </RouterLink>
            <p class="text-sm md:text-base text-gray-500 mt-4">
                {{description}}
            </p>
        </div>
    </div>
</template>

<script setup>
const props =  defineProps({
    title: {
        type:String,
        default: 'Title',
        require: true
    },
    description: {
        type:String,
        default: '',
        require: true
    },
    image: {
        type:String,
        default: '',
        require: true
    },
})


const description = props.description.substring(0, 130) + '...'

</script>

<style lang="scss" scoped></style>