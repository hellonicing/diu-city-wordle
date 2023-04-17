<script setup lang="ts">
  import confetti from "canvas-confetti";
  import { ref } from "vue";
  import Char from "./components/Char.vue";

  let text = ref("");
  const history = ref<any>([]);

  const handleClick = () => {
    history.value.push(text.value);
    if (checkWord(text.value)) {
      console.log("correct!");
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }
    text.value = "";
  };

  const answer = "武汉";
  const checkWord = (word: string) => {
    console.log(word);

    return word === answer;
  };
</script>

<template>
  <h1 text-yellow-600 text-center>citidle</h1>
  <main bg-gray-900>
    <div
      border-1
      b-solid
      b-red-400
      text-white
      text-center
      m="x-4 y-6"
      w-120
      h-60
    >
      Map
    </div>
  </main>
  <input m-2 type="text" v-model="text" @keyup.enter="handleClick" />
  <button @click="handleClick">Click</button>
  <div m-4>
    <div v-for="prompt in history">
      <Char
        m-2
        v-for="char in prompt"
        :key="char"
        :char="char"
        :correct="char === '汉' || char === '武'"
      />
    </div>
  </div>
</template>

<style scoped></style>
