<template>
  <div class="flex gap-8 w-full items-center px-4">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-dark-400">
      <slot name="icon"></slot>
    </div>
    <div class="flex flex-col justify-center">
      <span class="text-sm text-gray-300">{{ props.title }}</span>
      <a target="_blank" :href="props.link" class="text-lg font-medium">{{ props.name }}</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: "Hapis" },
  title: { type: String, default: "Front-end Developer" },
  link: { type: String, default: "https://hapishanipudin.com" },
});
</script>
