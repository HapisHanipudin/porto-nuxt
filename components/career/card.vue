<template>
  <div class="flex w-full gap-3 bg-dark-500 p-4 rounded-2xl items-center border border-zinc-700">
    <div class="min-w-16 min-h-16 rounded-xl flex items-center justify-center bg-zinc-700">
      <slot>
        <Icon class="w-8 h-8" name="mdi:company" />
      </slot>
    </div>
    <div class="flex flex-col gap-1">
      <h3 class="text-lg font-medium text-wrap">{{ props.title }}</h3>
      <div class="flex text-sm gap-1">
        <a class="hover:underline" :href="props.companyLink">{{ props.company }}</a> <span>•</span>
        <span>{{ props.location }}</span>
      </div>
      <span class="text-sm text-gray-300">{{ props.date }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "Front-end Developer" },
  date: { type: String, default: "2022 - Present" },
  company: { type: String, default: "Dummy" },
  location: { type: String, default: "Depok, Indonesia" },
  companyLink: { type: String, default: "https://hapishanipudin.com" },
});
</script>
