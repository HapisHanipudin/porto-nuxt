<template>
  <div class="flex w-full flex-col gap-6">
    <section id="about" class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <h2 class="text-3xl font-bold flex gap-1">About</h2>
        <span class="text-lg text-gray-300"> Here is some information about me</span>
      </div>
      <div class="flex flex-col gap-4 text-justify font-light md:tracking-wider text-sm md:text-base">
        <p>
          <strong class="font-bold">Muhammad Hafizh Hanifuddin</strong>, yang biasa disapa Hapis, Hanip, atau Udin, adalah siswa SMA yang punya semangat juang tinggi di dunia teknologi dan kreativitas digital. Lahir di Kuningan dan kini
          menetap di Depok, ia sudah ‘nyemplung’ ke dunia IT sejak duduk di bangku kelas 2 SD! Sejak saat itu, Hapis benar-benar terhipnotis oleh dunia komputer, coding, dan segala hal baru yang bikin otaknya makin encer. Dia gak cuma jago
          ngoding, tapi juga selalu haus akan pengetahuan baru. Berbekal semangat ini, dia terus mengasah keterampilan di bidang pengembangan aplikasi web dengan tujuan akhir menjadi developer full-stack yang andal.
        </p>
        <p>
          Hapis ini serba bisa! Selain asyik dengan baris-baris kode, dia punya sisi kreatif yang gak kalah keren. Dia sering menghabiskan waktu dengan mengutak-atik video editing dan desain grafis. Alhasil, skill-nya bukan cuma teknis,
          tapi juga visual, bikin dia semakin ‘full-package’! Nah, kalau lagi gak pusingin proyek atau belajar bahasa pemrograman baru, Hapis suka melepas penat dengan main game, mendengarkan musik, atau seru-seruan bareng teman-temannya.
        </p>
        <p>
          Sekarang, Hapis sedang asyik-asyiknya menjelajahi berbagai framework dan library JavaScript buat ngembangin aplikasi web yang ciamik. Di masa depan, dia pengin banget bisa bikin aplikasi-aplikasi keren yang gak cuma keren
          tampilannya, tapi juga andal performanya. Siap-siap aja dunia IT, Hapis siap bikin gebrakan!
        </p>
      </div>
    </section>
    <hr class="border-zinc-700" />

    <section id="education" class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-semibold flex items-center gap-3"><Icon name="ic:round-school" /> Educations</h2>
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
