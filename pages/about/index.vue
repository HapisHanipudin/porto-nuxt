<template>
  <div class="flex w-full flex-col gap-6">
    <section id="about" class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <h2 class="text-3xl font-bold flex gap-1">About</h2>
        <span class="text-lg text-gray-300"> Here is some information about me</span>
      </div>
      <p class="text-justify font-light">
        <strong class="font-bold">Muhammad Hafizh Hanifuddin</strong>, a.k.a. Hapis, Hanip, or Udin, is all about bringing energy, curiosity, and creativity to the digital world! Born in Kuningan and now enjoying life in Depok, Hapis is a
        high school student who started diving into computers way back in grade 2. Fast-forward a few years, and he’s now neck-deep in the world of coding, on a mission to master web development and become a full-stack pro.
      </p>
      <p class="text-justify font-light">
        With a tech toolkit that’s already impressive, Hapis is exploring the ins and outs of JavaScript and sharpening his skills across both front-end and back-end development. But that’s just part of the story! He’s got a serious passion
        for video editing and graphic design, finding ways to blend technical skills with creativity. Whether he’s crafting visuals, tweaking code, or tackling complex projects, Hapis always brings a unique spark to his work.
      </p>
      <p class="text-justify font-light">
        When he’s not coding or creating, you’ll probably find him leveling up in his favorite games, jamming out to music, or chilling with friends. Hapis’s journey is just getting started, and his drive to keep learning and exploring new
        tech makes it clear: he's not just aiming for a career—he’s on his way to making a big impact.
      </p>
    </section>
    <hr class="border-zinc-700" />

    <section id="education" class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-bold flex gap-3"><Icon name="ic:round-school" /> Educations</h2>
        <span class="text-lg text-gray-300"> Here is my educations history</span>
      </div>
      <career-card title="Ma'had Rahmaniyah Al-Islamy" date="2019 - 2022" location="Bogor, Indonesia" company="">
        <img class="w-16 h-16 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNmYVoT9uQSIP8M6criLmDoqrhgBEtbWlAD6P4qXDEw&s" alt="" />
      </career-card>
      <career-card title="Sekolah Impian Nurul Takwa" date="2022 - Present" location="Bogor, Indonesia" company="">
        <img class="w-12 h-12 rounded-xl" src="https://paybill.id/cfd/upload/logo/paybill-logo-iyugum-1707751399993.png" alt="" />
      </career-card>
    </section>
  </div>
</template>
<script setup>
const route = useRoute();
</script>
