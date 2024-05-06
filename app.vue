<template>
  <div class="min-h-screen flex justify-center font-sans w-full text-white bg-dark-800">
    <div class="container m-10 transition-all duration-300 ease-in-out flex max-lg:flex-col gap-4">
      <div class="lg:w-1/4">
        <Sidebar />
      </div>
      <div class="flex h-min overflow-hidden flex-col flex-grow bg-zinc-900 rounded-3xl">
        <Nav />
        <main class="flex w-full justify-center items-center pt-6 p-8">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>
<script setup></script>
