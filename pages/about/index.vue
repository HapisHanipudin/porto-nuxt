<template>
  <div class="flex w-full flex-col gap-6">
    <section id="about" class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <h2 class="text-3xl font-bold flex gap-1">About</h2>
        <span class="text-lg text-gray-300"> Here is some information about me</span>
      </div>
      <div class="flex w-full h-1 border-t border-gray-400 border-dashed mt-2"></div>
      <p>Hello, my name is <strong>Muhammad Hafizh Hanifuddin</strong>, You can call me Hapis, Hanip, or Udin. I am a student who is currently in high school. i was born in kuningan and currently i am living in depok.</p>
      <p>
        I've been interested in computers or IT since grade 2. I love coding and learning new things. I also like playing games, listening to music, and spending time with my friends. I also have an interest in video editing and graphic
        design.
      </p>
      <p>I am currently exploring the field of web application development. my goal is to become a full-stack developer. I have mastered several technology stacks and am exploring javascript.</p>
      <div class="flex flex-col gap-1 border-b border-dashed border-gray-300 pb-4">
        <h2 class="text-2xl font-bold flex gap-1"><Icon name="ic:round-school" /> Educations</h2>
        <career-card></career-card>
      </div>
    </section>
  </div>
</template>
<script setup>
const route = useRoute();
</script>
