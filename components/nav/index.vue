<template>
  <div class="lg:py-4 px-4 py-5 z-0 transition-all duration-300 ease-in-out">
    <nav class="flex lg:flex-col gap-6 relative font-semibold transition-all duration-300 ease-in-out">
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 lg:px-3" to="/">
        <span class="w-8 flex items-center justify-end group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-home" class="w-8 h-8 flex" /></span>
        <span class="max-md:hidden max">Home</span></NuxtLink
      >
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 lg:px-3" to="/about">
        <span class="w-8 flex items-center justify-end group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-account-circle" class="w-8 h-8 flex" /></span>
        <span class="max-md:hidden max">About</span></NuxtLink
      >
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 lg:px-3" to="/projects">
        <span class="w-8 flex items-center justify-end group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-work" class="w-8 h-8 flex" /></span>
        <span class="max-md:hidden max">Projects</span></NuxtLink
      >
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 lg:px-3" to="/contact">
        <span class="w-8 flex items-center justify-end group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-mail" class="w-8 h-8 flex" /></span>
        <span class="max-md:hidden max">Contact</span></NuxtLink
      >
      <NuxtLink class="flex items-center gap-2 group hover:scale-105 transition-all ease-in-out duration-300 lg:px-3" to="/dashboard">
        <span class="w-8 flex items-center justify-end group-hover:-rotate-[15deg] transition-all ease-in-out duration-300"> <Icon name="ic:round-dashboard" class="w-8 h-8 flex" /></span>
        <span class="max-md:hidden max">Dashboard</span></NuxtLink
      >
      <div
        :class="{
          'translate-x-[calc(0px)] md:translate-x-[0px]  lg:translate-y-0': route.path === '/',
          'translate-x-[calc(24px+32px)] md:translate-x-[calc(86.7px+24px)] lg:translate-x-0 lg:translate-y-[calc(32px+24px)]': route.path === '/about',
          'translate-x-[calc(24px*2+32px*2)] md:translate-x-[calc(88.1px+24px+86.7px+24px)] lg:translate-x-0 lg:translate-y-[calc((32px+24px)*2)]': route.path === '/projects',
          'translate-x-[calc(24px*3+32px*3)] md:translate-x-[calc(104.683px+24px+88.1px+24px+86.7px+24px)] lg:translate-x-0 lg:translate-y-[calc((32px+24px)*3)]': route.path === '/contact',
          'translate-x-[calc(24px*4+32px*4)] md:translate-x-[calc(103.933px+24px+104.683px+24px+88.1px+24px+86.7px+24px)] lg:translate-x-0 lg:translate-y-[calc((32px+24px)*4)]': route.path === '/dashboard',
        }"
        class="absolute top-1/2 -left-[calc(0.75rem+2px)] lg:translate-x-0 lg:-top-3 lg:w-full rounded-xl lg:rounded-xl border-2 border-zinc-700 -z-10 p-3 lg:left-0 lg:px-1 -translate-y-1/2 transition-all duration-500 ease-in-out"
      >
        <div
          :class="{
            'md:w-[86.7px]': route.path === '/',
            'md:w-[88.1px]': route.path === '/about',
            'md:w-[104.683px]': route.path === '/projects',
            'md:w-[103.933px]': route.path === '/contact',
            'md:w-[125.55px]': route.path === '/dashboard',
          }"
          class="lg:h-[32px] lg:w-full transition-all w-8 h-8 duration-500 ease-in-out flex justify-end"
        >
          <Icon name="ic:round-chevron-right" class="w-8 h-8 max-lg:hidden opacity-30" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
