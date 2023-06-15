<template>
  <!-- <div class="absolute top-8 left-0 right-0"> -->
    <div class="bg-secondary pt-28 pb-10">
      <div class="container">
        <!-- breadcrumb -->
        <Breadcrumb subpage="About" />

        <!-- banner -->
        <div class=" py-10 flex flex-col w-full gap-y-10">
          <blockquote class="max-w-xl">
            <p class="text-base md:text-xl text-black-90 mb-5 font-Jost">To be a woman or a lady is the embodiment of she
              is
              power, I want women to feel power, feminine, gracious and to never accept limitations or downgrades from
              anybody because they alone know what power & beauty they possess.</p>
            <h4 class="text-base md:text-xl font-semibold font-Cormorant inline-flex items-center"><i
                class="bx bx-minus mr-2"></i> <span> O. Winifred Areghan, Founder & CEO</span></h4>
          </blockquote>
          <div class="inline-flex items-center self-end space-x-2">
            <h3 class="text-xl md:text-2xl text-black font-bold">About Us</h3>
            <button class="rounded-full h-10 w-10 bg-primary text-white text-center px-1 py-0.5">
              <i class="bx bx-play text-3xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <section class="pb-32 md:pt-32 lg:pt-0">
      <div class="container">
        <!-- Our story -->
        <div class="flex flex-col-reverse md:flex-row items-center justify-between mb-16 gap-x-10">
          <div class="md:w-3/4 lg:max-w-3xl">
            <h2
              class="block text-xl md:text-4xl text-left self-start mb-5 font-extrabold font-Jost text-black tracking-widest uppercase">
              Our Story</h2>
            <div class="">
              <p class="text-sm md:text-base leading-loose mb-3 text-justify">
                Gianna meaning (God is gracious) is a luxury fashion design retail brand inspired by original ideas for
                women
                design. I found this brand on my love & passion for fashion to focus on the use of staple pieces and
                sustainable
                resources to highlight on feminine beauty and figures
              </p>

              <p class="text-sm md:text-base leading-loose mb-5 text-justify">
                Our brand creates design which tends to think outside of the box either by art, mood boards, craft etc.
                HOUSEOFGIANNA is meant to be complex and incomparable to our competitors by standing out either by the
                designs
                or the colour and context. Our pieces start off being imperfect till they are perfect as that is the
                beauty
                of
                being graceful.
              </p>

              <ButtonPrimary class="max-w-max px-8" label="Explore Now" />
            </div>
          </div>
          <div class="lg:shrink-0 -mt-12 self-end mb-10">
            <img src="../assets/img/about-us/1.png" alt="">
          </div>
        </div>

        <!-- Our Collection -->
        <div class="flex flex-col items-center justify-between md:flex-row-reverse gap-x-10 mb-16">
          <div class="md:w-3/5 lg:max-w-3xl flex flex-col mb-10">
            <h2 class="text-lg lg:text-2xl self-start mb-5 font-extrabold font-Jost text-black uppercase">
              GIANNA FIRST COLLECTION - ONY
            </h2>
            <p class="text-sm md:text-base leading-loose md:text-justify">
              The Idalia power mesh cut out design was inspired the definition of “Gianna” meaning graceful and “Idalia”
              to
              behold the sun mostly used for Greek feminine. Its whole idea is to seemingly portray sculpted images of
              feminine goddess beauty and the textures of a power mesh design how it can flow with every shape of the
              body.
              The fabric and silhouette designs are inspired by the physique of the female form in all its embodiment,
              thus
              as a result lead us to create this beautiful piece to celebrate femineity in all its glory.
            </p>

            <h3 class="text-lg font-extrabold uppercase tracking-wider ml-auto mt-10">“IDALIA”</h3>
          </div>
          <div class="lg:shrink-0">
            <img src="../assets/img/about-us/2.jpg" alt="" class="w-full">
          </div>
        </div>

        <!-- Story of   Safiyah -->
        <div class="flex flex-col-reverse justify-between items-center md:flex-row md:gap-x-10 gap-y-10 mb-16">
          <div class="md:w-3/5 lg:max-w-3xl flex flex-col mb-10">
            <h2 class="text-lg lg:text-2xl self-start mb-5 font-extrabold font-Jost text-black uppercase">
              Story of safiyah
            </h2>
            <p class="text-sm md:text-base leading-loose md:text-justify">
              The Idalia power mesh cut out design was inspired the definition of “Gianna” meaning graceful and “Idalia”
              to
              behold the sun mostly used for Greek feminine. Its whole idea is to seemingly portray sculpted images of
              feminine goddess beauty and the textures of a power mesh design how it can flow with every shape of the
              body.
              The fabric and silhouette designs are inspired by the physique of the female form in all its embodiment,
              thus
              as a result lead us to create this beautiful piece to celebrate femineity in all its glory.
            </p>

            <button class="text-sm font-medium ml-auto mt-5 bg-slate-50 p-2 text-gray-600">Continue reading</button>
          </div>
          <div class="lg:shrink-0">
            <img src="../assets/img/about-us/3.jpg" alt="">
          </div>
        </div>

        <!-- Story of  -->
        <div class="flex flex-col items-center justify-between md:flex-row-reverse gap-x-10">
          <div class="md:w-3/5 lg:max-w-3xl flex flex-col mb-10">
            <h2 class="text-lg lg:text-2xl self-start mb-5 font-extrabold font-Jost text-black uppercase">
              Story of Safiyah
            </h2>
            <p class="text-sm md:text-base leading-loose md:text-justify">
              The Idalia power mesh cut out design was inspired the definition of “Gianna” meaning graceful and “Idalia”
              to
              behold the sun mostly used for Greek feminine. Its whole idea is to seemingly portray sculpted images of
              feminine goddess beauty and the textures of a power mesh design how it can flow with every shape of the
              body.
              The fabric and silhouette designs are inspired by the physique of the female form in all its embodiment,
              thus
              as a result lead us to create this beautiful piece to celebrate femineity in all its glory.
            </p>

            <button class="text-sm font-medium ml-auto mt-5 bg-slate-50 p-2 text-gray-600">Continue reading</button>
          </div>
          <div class="lg:shrink-0">
            <img src="../assets/img/about-us/4.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
  <!-- </div> -->
</template>


<script setup>
import Breadcrumb from '@/components/nav/Breadcrumb.vue';
import ButtonPrimary from '@/components/utilities/ButtonPrimary.vue';

</script>