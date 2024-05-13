<template>
  <div class="flex group relative justify-center items-center w-12 h-12">
    <span class="group-hover:opacity-100 opacity-0 translate-y-10 group-hover:-translate-y-10 absolute top-0 left-1/2 transform -translate-x-1/2 p-2 bg-dark-400 rounded-lg transition-all duration-200 ease-in-out">
      {{ props.name }}
    </span>
    <Icon :name="props.icon" class="w-8 h-8" />
  </div>
</template>

<script setup>
const props = defineProps({
  icon: { type: String, default: "logos:javascript" },
  name: { type: String, default: "Javascript" },
});
</script>
