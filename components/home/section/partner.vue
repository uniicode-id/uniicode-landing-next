<template>
  <section class="p-4 border border-black mt-12">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-6xl font-bold text-center">Our Partnership</h2>
      <p class="mt-12 text-center text-lg">
        Lorem ipsum dolor sit amet consectetur. Vel faucibus aliquam posuere
        lectus odio laoreet. Pharetra sodales gravida luctus neque nunc
        placerat. Vel felis ut nulla eget ultrices cras duis mauris interdum.
        Tortor sapien sagittis pulvinar et mattis sed.
      </p>

      <div class="flex place-items-center gap-4 justify-center mt-12">
        <div v-for="partner in partners">
          <NuxtImg
            :src="partner.src"
            class="block w-64 grayscale hover:grayscale-0 transition-all"
            :class="[partner.class]"
          ></NuxtImg>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const partners = [
  {
    name: "Skilvul",
    src: "/logo/skilvul.png",
    class: "bg-white rounded-xl",
    website: "https://skilvul.com",
  },
  {
    name: "Buat Usaha",
    src: "/logo/buatusaha.png",
  },
];
</script>
