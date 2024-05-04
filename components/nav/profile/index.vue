<template>
  <div class="flex gap-4">
    <img src="~/assets/img/squarelogo.png" class="rounded-2xl border-2 border-zinc-700 h-16 aspect-square" alt="" />
    <div class="flex flex-col gap-3">
      <div>
        <span>Hi! I'm</span>
        <h1 class="text-3xl font-bold">Hapis Hanipudin</h1>
        <span class="text-sm relative"
          >I'm a {{ text }}
          <div class="w-1 h-full absolute -right-1 blink top-0 bg-slate-300"></div
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const texts = ["Frontend Developer", "Fullstack Developer", "UI/UX Designer", "Freelancer"];

const text = ref("");
const isTyping = ref(true);
const errors = ref(0);
const currentTextIndex = ref(0);

const type = () => {
  const currentText = texts[currentTextIndex.value % texts.length];
  if (isTyping.value) {
    text.value = currentText.substring(0, text.value.length + 1);
  } else {
    text.value = currentText.substring(0, text.value.length - 1);
  }

  if (text.value.length === currentText.length) {
    setTimeout(() => {
      isTyping.value = false;
      setTimeout(() => {
        currentTextIndex.value++;
        isTyping.value = true;
      }, 2000);
    }, 2000);
  } else if (text.value.length === 0) {
    errors.value++;
    if (errors.value > 3) {
      text.value = "Error: Too many tries.";
    }
  }
};

const loop = () => {
  if (text.value !== "Error: Too many tries.") {
    type();
    setTimeout(loop, isTyping.value ? 100 : 50);
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
