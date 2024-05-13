<template>
  <div class="flex gap-2 bg-dark-400 p-4 rounded-2xl w-1/3 items-center">
    <div class="w-16 h-16 rounded-xl flex items-center justify-center bg-zinc-500">
      <slot>
        <Icon class="w-8 h-8" name="mdi:company" />
      </slot>
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
