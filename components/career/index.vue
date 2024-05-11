<template>
  <div class="flex gap-2 bg-dark-500 p-4 rounded-xl">
    <div class="w-2 h-2 rounded-full bg-zinc-500">
      <slot> <Icon class="iconify" data-icon="mdi:building" /> </slot>
    </div>
    <div class="flex flex-col gap-1">
      <h3 class="text-lg font-medium">{{ props.title }}</h3>
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
