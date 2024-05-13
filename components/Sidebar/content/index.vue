<template>
  <!-- <hr class="border-gray-500 mx-10" /> -->
  <!-- <div class="w-full flex justify-center"> -->
  <div class="flex flex-col gap-6 py-2 max-lg:h-0 max-lg:p-0 max-lg:overflow-hidden transition-all duration-700 ease-in-out">
    <SidebarContentCard v-for="content in contents" :key="content.name" :name="content.name" :title="content.title" :link="content.link">
      <template #icon>
        <Icon class="w-8 h-8" :name="content.icon" />
      </template>
    </SidebarContentCard>
  </div>
  <!-- </div> -->
  <!-- <hr class="border-gray-500 mx-10" /> -->
</template>

<script setup>
const contents = ref([
  { name: "Hapis Hanipudin", title: "Linkedin", link: "https://www.linkedin.com/in/hapishanipudin/", icon: "mdi:linkedin" },

  { name: "Hapis H.", title: "Upwork", link: "https://www.upwork.com/freelancers/~01b1c5b9c", icon: "bxl:upwork" },
  { name: "HapisHanipudin.", title: "Github", link: "https://github.com/hapishanipudin", icon: "mdi:github" },
  { name: "Depok, Indonesia.", title: "Location", link: "https://www.google.com/maps/place/Depok,+Indonesia", icon: "mdi:google-maps" },
]);
</script>
