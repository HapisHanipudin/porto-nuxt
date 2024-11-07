<template>
  <div class="sm:py-4 px-4 py-5 z-0 transition-all duration-300 ease-in-out">
    <nav class="flex sm:flex-col gap-6 relative font-semibold transition-all duration-300 ease-in-out">
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 sm:px-3" to="/">
        <span class="w-8 flex items-center justify-center group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-home" class="w-8 h-8" /></span>
        <span class="max-sm:hidden max">Home</span></NuxtLink
      >
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 sm:px-3" to="/about">
        <span class="w-8 flex items-center justify-center group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-account-circle" class="w-8 h-8" /></span>
        <span class="max-sm:hidden max">About</span></NuxtLink
      >
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 sm:px-3" to="/projects">
        <span class="w-8 flex items-center justify-center group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-work" class="w-8 h-8" /></span>
        <span class="max-sm:hidden max">Projects</span></NuxtLink
      >
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 sm:px-3" to="/contact">
        <span class="w-8 flex items-center justify-center group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-mail" class="w-8 h-8" /></span>
        <span class="max-sm:hidden max">Contact</span></NuxtLink
      >
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 sm:px-3" to="/dashboard">
        <span class="w-8 flex items-center justify-center group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-dashboard" class="w-8 h-8" /></span>
        <span class="max-sm:hidden max">Dashboard</span></NuxtLink
      >
      <div
        :class="{
          'translate-x-[calc(0px)] sm:translate-x-0 sm:translate-y-0': route.path === '/',
          'translate-x-[calc(24px+32px)] sm:translate-x-0 sm:translate-y-[calc(32px+24px)]': route.path === '/about',
          'translate-x-[calc(24px*2+32px*2)] sm:translate-x-0 sm:translate-y-[calc((32px+24px)*2)]': route.path === '/projects',
          'translate-x-[calc(24px*3+32px*3)] sm:translate-x-0 sm:translate-y-[calc((32px+24px)*3)]': route.path === '/contact',
          'translate-x-[calc(24px*4+32px*4)] sm:translate-x-0 sm:translate-y-[calc((32px+24px)*4)]': route.path === '/dashboard',
        }"
        class="absolute top-1/2 -left-3 sm:-top-3 sm:w-full sm:p-3 rounded-xl sm:rounded-xl border-2 border-zinc-700 -z-10 p-3 sm:left-0 sm:px-1 -translate-y-1/2 transition-all duration-500 ease-in-out"
      >
        <div class="sm:h-[32px] sm:w-full transition-all w-8 h-8 duration-500 ease-in-out flex justify-end">
          <Icon name="ic:round-chevron-right" class="w-8 h-8 max-sm:hidden opacity-30" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
