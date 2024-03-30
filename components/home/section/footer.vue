<template>
  <footer class="p-4 border border-black mt-28">
    <div class="flex gap-2 justify-between max-w-7xl mx-auto">
      <div>
        <logo-uniicode></logo-uniicode>

        <div class="text-slate-400 mt-4">
          <p>Programming Community</p>
          <p>BSD City, South Jakarta, Indonesia</p>
        </div>
      </div>

      <div class="flex justify-around gap-8 w-1/2">
        <div>
          <strong> Informations </strong>
          <ul class="text-slate-400">
            <li><a class="py-2 block" href="#">Home</a></li>
            <li><a class="py-2 block" href="#">About</a></li>
            <li><a class="py-2 block" href="#">Members</a></li>
            <li><a class="py-2 block" href="#">Partners</a></li>
          </ul>
        </div>
        <div>
          <strong>Terms</strong>
          <ul class="text-slate-400">
            <li><a class="py-2 block" href="#">Privacy Policy</a></li>
            <li><a class="py-2 block" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="divider-wrapper py-[1px] mt-12 max-w-7xl mx-auto">
      <div class="bg-black h-full py-8 flex justify-center gap-4">
        <div class="flex text-4xl">
          <a
            class="p-2 hover:bg-slate-100 hover:bg-opacity-10 transition-all rounded-lg hover:text-indigo-500"
            target="_blank"
            href="https://google.com"
          >
            <icon name="mdi:discord"></icon>
          </a>
          <a
            class="p-2 hover:bg-slate-100 hover:bg-opacity-10 transition-all rounded-lg hover:text-red-500"
            target="_blank"
            href="https://google.com"
          >
            <icon name="mdi:instagram"></icon>
          </a>
          <a
            class="p-2 hover:bg-slate-100 hover:bg-opacity-10 transition-all rounded-lg hover:text-sky-600"
            target="_blank"
            href="https://google.com"
          >
            <icon name="mdi:telegram"></icon>
          </a>
          <a
            class="p-2 hover:bg-slate-100 hover:bg-opacity-10 transition-all rounded-lg hover:text-white"
            target="_blank"
            href="https://google.com"
          >
            <icon name="mdi:github"></icon>
          </a>
        </div>

        <a
          href="https://wa.me/628779310422"
          target="_blank"
          class="flex gap-1 place-items-center p-2 hover:bg-slate-100 hover:bg-opacity-10 transition-all rounded-lg"
        >
          <div>
            <strong>Join Community</strong>
            <p>Join to get more benefit</p>
          </div>
          <icon class="text-3xl" name="mdi:arrow-right"></icon>
        </a>
      </div>
    </div>

    <div class="py-12 text-slate-400 max-w-7xl mx-auto">
      <p>UNIICODE Community, All Rights Reserved.</p>
      <p>© 2023 Design By Muhammad Iqbal Maulana.</p>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>

<style>
.divider-wrapper {
  background: radial-gradient(circle at center, #ccff004d, transparent);
}
</style>
