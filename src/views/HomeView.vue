<template>

  <!-- Notification -->
  <!-- <NotifyBanner text="FREE UK SHIPPING ON ALL ORDERS £190 OR MORE, INTERNATIONAL SHIPPING £350 OR MORE"/> -->

  <!-- PromoSection -->
  <PromoSection />

  <!-- Category -->
  <PageSection title="Category" link="/shop/category">
    <template #content>
      <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:grid-cols-5 xl:gap-x-6">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </template>
  </PageSection>

  <!-- Products-->
  <PageSection title="Our Products" link="/shop">
    <template #content>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
          <GridView v-for="item in items" :item="item" key="item.id"/>
      </div>
    </template>
  </PageSection>

  <!-- CTAs -->
  <div class="md:container mb-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 py-16 gap-y-5">
      <CTA colors="bg-[#E2B7B1]"/>
      <CTA colors="bg-[#346646]"/>
    </div>
  </div>


</template>
<script setup>
import PromoSection from '@/components/PromoSection';
import CategoryItem from '@/components/products/CategoryItem';
import PageSection from '@/components/PageSection.vue';
import CTA from '@/components/banner/CTA'
import GridView from '@/components/products/GridView';
import { ref } from 'vue';
import NotifyBanner from '@/components/banner/NotifyBanner.vue';


const items = ref([
  {
    id: 1,
    title: 'Basic Tee 6-Pack',
    price: '$400',
    review_count: 330,
    image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg'

  },
  {
    id: 2,
    title: 'Kinda White Basic Tee',
    price: '$220',
    review_count: 1624,
    image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-03.jpg'

  },{
    id: 3,
    title: 'Basic Tee',
    price: '$250',
    review_count: 0,
    image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg'

  },{
    id: 4,
    title: 'Stone Basic Tee',
    price: '$140',
    review_count: 10,
    image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-04.jpg'

  },{
    id: 5,
    title: 'Fall Basic Tee 3-Pack',
    price: '$140',
    review_count: 10,
    image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-05.jpg'

  },{
    id: 6,
    title: 'Linework Artwork Tee 3-Pack',
    price: '$140',
    review_count: 10,
    image: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg'

  },
])

</script>
