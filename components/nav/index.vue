<template>
  <div class="sm:py-4 px-8 py-5 bg-zinc-800 w-min rounded-ee-3xl z-0 transition-all duration-300 ease-in-out">
    <nav class="flex gap-6 relative font-semibold transition-all duration-300 ease-in-out">
      <NuxtLink to="/"
        ><span class="sm:hidden w-8"><Icon name="ic:round-home" class="w-8 h-8" /></span> <span class="max-sm:hidden max">Home</span></NuxtLink
      >
      <NuxtLink to="/about"
        ><span class="sm:hidden w-6"><Icon name="ic:round-account-circle" class="w-8 h-8" /></span> <span class="max-sm:hidden max">About</span></NuxtLink
      >
      <NuxtLink to="/projects"
        ><span class="sm:hidden w-6"><Icon name="ic:round-work" class="w-8 h-8" /></span> <span class="max-sm:hidden max">Projects</span></NuxtLink
      >
      <NuxtLink to="/contact"
        ><span class="sm:hidden w-6"><Icon name="ic:round-mail" class="w-8 h-8" /></span> <span class="max-sm:hidden max">Contact</span></NuxtLink
      >
      <NuxtLink to="/dashboard"
        ><span class="sm:hidden w-6"><Icon name="ic:round-dashboard" class="w-8 h-8" /></span> <span class="max-sm:hidden max">Dashboard</span></NuxtLink
      >
      <div
        :class="{
          'translate-x-[calc(0px)] sm:translate-x-0': route.path === '/',
          'translate-x-[calc(24px+32px)] sm:translate-x-[calc(45.4833px+24px)]': route.path === '/about',
          'translate-x-[calc(24px*2+32px*2)] sm:translate-x-[calc(47.2167px+24px+45.4833px+24px)]': route.path === '/projects',
          'translate-x-[calc(24px*3+32px*3)] sm:translate-x-[calc(63.6333px+24px+47.2167px+24px+45.4833px+24px)]': route.path === '/contact',
          'translate-x-[calc(24px*4+32px*4)] sm:translate-x-[calc(61.9833px+24px+63.6333px+24px+47.2167px+24px+45.4833px+24px)]': route.path === '/dashboard',
        }"
        class="absolute top-1/2 -left-3 rounded-xl bg-zinc-900 -z-10 p-3 px-3 -translate-y-1/2 transition-all duration-200 ease-in-out"
      >
        <div
          :class="{
            'sm:w-[45.4833px]': route.path === '/',
            'sm:w-[47.2167px]': route.path === '/about',
            'sm:w-[63.6333px]': route.path === '/projects',
            'sm:w-[61.9833px]': route.path === '/contact',
            'sm:w-[84.45px]': route.path === '/dashboard',
          }"
          class="sm:h-4 transition-all w-8 h-8 duration-200 ease-in-out"
        ></div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
