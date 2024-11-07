<template>
  <section id="career" class="flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <h2 class="text-2xl font-semibold flex items-center gap-3"><Icon name="ic:round-work" /> My Career</h2>
      <span class="text-lg text-gray-300"> Here are some of my work experience</span>
    </div>
    <div class="flex gap-3">
      <CareerCard />
      <CareerCard title="Back-end Developer" />
    </div>
  </section>
</template>
<script setup></script>
