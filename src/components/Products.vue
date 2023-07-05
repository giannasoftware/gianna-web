<template>
        <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
                <GridView v-for="(item, i ) in items" :item="item" :key="i" :data-index="i" :data-name="`item-${i}`" />
        </TransitionGroup>
</template>

<script setup>
import GridView from '@/components/products/GridView.vue';
import productsAPI from '@/api/products';
import { onMounted, ref } from 'vue';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger';


const items = ref()

items.value = await productsAPI.getProducts(6);

const beforeEnter = (el) => {

        gsap.to(el, {
                opacity: 0,
                x: -100
        })
}

const enter = (el, done) => {

        gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'back.in(1.7)',
                // scrollTrigger: {
                //         trigger: el,
                //         start: "top center",
                //         // markers: true,
                //         scrub: true,
                //         toggleActions: "restart pause resume pause"
                // },
                delay: el.dataset.index * 0.15,
                onComplete: done
        })
}


onMounted(() => {
        gsap.registerPlugin(ScrollTrigger)
})
</script>

<style>
.before-enter {
        opacity: 0;
        transform: translateY(-100px);
        transition: all ease 2s;
}

.enter {
        opacity: 1;
        transform: translateY(0px);
}
</style>