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
      <div class="mt-10">
        <div class="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2 xl:gap-x-8 md:grid-cols-3">
          <Suspense>
            <Products />
            <template #fallback>
              Loading...
            </template>
          </Suspense>
        </div>
      </div>
    </template>
  </PageSection>

  <!-- CTAs -->
  <div class="md:container mb-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 py-10 gap-y-5">
      <CTA colors="bg-[#E2B7B1]" />
      <CTA colors="bg-[#346646]" />
    </div>
  </div>
</template>
<script setup>
import PromoSection from '@/components/PromoSection';
import CategoryItem from '@/components/products/CategoryItem';
import PageSection from '@/components/PageSection.vue';
import Products from '@/components/Products'
import CTA from '@/components/banner/CTA'
import NotifyBanner from '@/components/banner/NotifyBanner.vue';


</script>
