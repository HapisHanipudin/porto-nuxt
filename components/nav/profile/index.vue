<template>
  <div class="flex gap-4">
    <img src="~/assets/img/squarelogo.png" class="rounded-2xl border-2 border-zinc-700 h-16 aspect-square" alt="" />
    <div class="flex flex-col gap-3">
      <div>
        <span>Hi! I'm</span>
        <h1 class="text-3xl font-bold">Hapis Hanipudin</h1>
        <span class="text-sm relative" :class="{ typing: isTyping }">
          I'm a {{ text }}
          <div class="w-1 h-full absolute -right-1 blink top-0 bg-slate-300"></div>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const texts = ["Frontend Developer", "Fullstack Developer", "UI/UX Designer", "Freelancer"];
const text = ref("");
const isTyping = ref(true);
const index = ref(0);
const errors = ref(0);

const loop = async () => {
  while (true) {
    if (isTyping.value) {
      const txt = texts[index.value % texts.length];
      text.value = text.value + txt[text.value.length];
      await new Promise((resolve) => setTimeout(resolve, 125));
      if (text.value.length === txt.length) {
        isTyping.value = false;
        await new Promise((resolve) => setTimeout(resolve, 500));
        for (let i = text.value.length - 1; i >= 0; i--) {
          text.value = text.value.slice(0, i);
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        index.value++;
        isTyping.value = true;
      }
    } else {
      text.value = text.value.slice(0, -1);
      if (text.value.length === 0) {
        index.value++;
        isTyping.value = true;
      }
    }
  }
};
onMounted(loop);
</script>
<style scoped lang="css">
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.blink {
  animation: blink 1s step-end infinite;
}
</style>
