<template>
  <div class="min-h-screen flex justify-center font-sans w-full text-white bg-dark-800">
    <div class="container m-10 transition-all duration-300 ease-in-out flex max-lg:flex-col gap-4">
      <div class="lg:min-w-[30%] transition-all duration-300 ease-in-out">
        <Sidebar />
      </div>
      <div class="flex h-min overflow-hidden transition-all duration-300 ease-in-out flex-col lg:flex-grow bg-zinc-900 rounded-3xl">
        <Nav />
        <main class="flex justify-center transition-all duration-300 ease-in-out items-center pt-6 p-8">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>
<script setup></script>
