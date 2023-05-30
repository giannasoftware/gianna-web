<template>
    <div class="w-full bg-secondary pt-4 md:pt-6 lg:pt-10 xl:pt-11">
        <div class="container mx-auto">
            <div class="flex flex-col-reverse items-center py-16 md:py-0 md:flex-row overflow-hidden">
                <!-- Left Item -->
                <div class="flex flex-col mt-4 md:mt-0 md:w-1/2">
                    <h4 class="text-xl md:text-2xl text-center font-Cormorant tracking-sm md:text-left uppercase">Annual
                        sale</h4>
                    <h1
                        class="text-2xl md:text-3xl lg:text-2xl font-bold text-center !leading-relaxed uppercase md:text-left xl:text-5xl">
                        Find the best fashion style for you
                    </h1>
                    <p class=" text-base text-center md:text-left text-black-90 xl:text-xl xl:max-w-xl">
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
                        mollit
                        dolore cillum minim tempor enim. Elit aute irure tempor.
                    </p>
                    <div class="flex justify-center flex-end md:justify-start !mt-10">
                        <a href="#"
                            class="py-3 px-5 text-white bg-primary flex items-center justify-between baseline capitalize text-base hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary">
                            Explore now <i class="bx bx-right-arrow-alt ml-4 transition-all ease-in-out delay-300" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <!-- Right Item -->
                <div class="md:w-1/2 self-center relative z-0">

                    <div class="shrink-0 md:-mb-2 xl:-mt-2">
                        <img src="@/assets/img/banner.png" alt="Summer Collective"
                            class="w-full h-full object-fill object-center">
                    </div>

                    <div class="hidden text-sm absolute right-0 top-80 group btn-slides items-center lg:block ">
                        <button class="flex items-center hover:text-primary">
                            <span class="">1</span>
                        </button>
                        <button
                            class="flex items-center group-[.btn-slides]:-ml-6 text-black text-base hover:text-primary group/active">
                            <span class="group-[.btn-slides]:pr-1 group-[.btn-slides]:font-medium">2</span>
                            <span class="w-8 h-[2px] bg-black ml-0.5 group-hover/active:bg-primary"></span>
                        </button>
                        <button class="flex items-center hover:text-primary">
                            <span class="">3</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- <script setup>
</script> -->
