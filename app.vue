<template>
  <NuxtLoadingIndicator color="#fff" class="z-50" :height="4" />
  <div class="min-h-screen flex justify-center font-sans w-full text-white bg-dark-800">
    <div class="container my-6 transition-all duration-700 ease-in-out flex max-lg:flex-col gap-4">
      <div class="min-w-[30%] transition-all duration-700 ease-in-out">
        <Sidebar />
      </div>
      <div class="flex h-min overflow-hidden transition-all duration-700 w-full ease-in-out flex-col">
        <!-- <Nav /> -->
        <main class="flex justify-center transition-all duration-700 ease-in-out items-center lg:pt-6 px-6">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>
<style>
body,
html {
  @apply bg-zinc-900 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-500;
}
</style>
