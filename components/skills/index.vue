<template>
  <section id="skills" class="flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <h2 class="text-2xl font-semibold"><Icon name="ic:round-code" /> My Skills</h2>
      <span class="text-lg text-gray-300"> Here are some of my skills</span>
    </div>
    <div class="flex gap-3">
      <SkillsIcon v-for="skill in skills" :key="skill.name" :name="skill.name" :icon="skill.icon" />
    </div>
  </section>
</template>
<script setup>
const skills = ref([
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon" },
  { name: "Javascript", icon: "logos:javascript" },
  { name: "Firebase", icon: "logos:firebase" },
  { name: "Vue", icon: "logos:vue" },
  { name: "Nuxt", icon: "logos:nuxt-icon" },
  { name: "Prisma", icon: "vscode-icons:file-type-prisma" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "GitHub", icon: "mdi:github" },
  { name: "Git", icon: "logos:git-icon" },
]);
</script>
