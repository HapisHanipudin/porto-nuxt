<template>
  <div class="min-h-screen flex justify-center font-sans w-full text-white bg-dark-800">
    <div class="container m-10 flex gap-4">
      <div class="lg:w-1/4 max-lg:hidden">
        <Sidebar />
      </div>
      <div class="flex h-min overflow-hidden flex-col flex-grow bg-zinc-900 rounded-3xl">
        <Nav />
        <main class="flex w-full justify-center items-center p-8">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>
<script setup></script>
