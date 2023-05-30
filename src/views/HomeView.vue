<template>

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
     
    </template>
  </PageSection>

  <!-- CTAs -->
  <div class="container">
    <div class="grid grid-cols-2">
      <CTA/>
      <CTA/>
    </div>
  </div>


</template>
<script setup>
import PromoSection from '@/components/PromoSection';
import CategoryItem from '@/components/CategoryItem.vue';
import PageSection from '@/components/PageSection.vue';
import ProductItem from '@/components/ProductItem.vue';
import CTA from '@/components/banner/CTA';


</script>
