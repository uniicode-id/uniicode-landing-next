<template>
  <nav class="border border-black w-full flex justify-between p-12 text-xl bg-transparent backdrop-blur-sm">
    <div><icons-uc-logo /></div>
    <div class="flex justify-between w-full max-w-lg">
      <a href="#" class="block">Home</a>
      <a href="#" class="block">About</a>
      <a href="#" class="block">Member</a>
      <a href="#" class="block">Partnership</a>
    </div>

    <div class="flex gap-4">
      <button class="block">Support Us</button>
      <div class="p-[1px] button-join--container">
        <button class="block button-join px-4 py-2 h-full relative">
          Join Now
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const isNavbar = ref("");
</script>
<style scoped>
.button-join {
  border-radius: 10px;
  background: #2a3502;
  transition: all ease 0.3s;
}

.button-join--container {
  position: relative;
}
.button-join--container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(140deg, #ccff00, #000000);
  transition: all ease 0.5s;
}

.button-join--container:hover .button-join {
  @apply text-uc-7;
  background: #ccff00;
}
</style>
