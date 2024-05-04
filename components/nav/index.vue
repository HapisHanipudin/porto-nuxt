<template>
  <div class="py-4 px-8 bg-zinc-800 w-min rounded-ee-3xl z-0">
    <nav class="flex gap-6 relative">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      <div
        :class="{
          'translate-x-0': route.path === '/',
          'translate-x-[calc(44.63px+24px)]': route.path === '/about',
          'translate-x-[calc(45.42px+24px+44.63px+24px)]': route.path === '/projects',
          'translate-x-[calc(61.47px+24px+45.42px+24px+44.63px+24px)]': route.path === '/contact',
          'translate-x-[calc(60.14px+24px+61.47px+24px+45.42px+24px+44.63px+24px)]': route.path === '/dashboard',
        }"
        class="absolute top-1/2 -left-3 rounded-xl bg-zinc-900 -z-10 p-3 px-3 -translate-y-1/2 transition-all duration-200 ease-in-out"
      >
        <div
          :class="{ 'w-[44.63px]': route.path === '/', 'w-[45.42px]': route.path === '/about', 'w-[61.47px]': route.path === '/projects', 'w-[60.14px]': route.path === '/contact', 'w-[82.47px]': route.path === '/dashboard' }"
          class="h-4 transition-all duration-200 ease-in-out"
        ></div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
