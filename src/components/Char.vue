<script setup lang="ts">
  import pinyin from "pinyin";
  import { defineProps } from "vue";
  const props = defineProps<{ char: string; correct: boolean }>();
</script>

<template>
  <div inline-flex flex-col items-center my-1>
    <div text-2xl :class="correct ? 'text-green' : ''">
      {{ pinyin(props.char)[0][0] }}
    </div>
    <div
      flex
      items-center
      justify-center
      border-2
      b-solid
      b-amber
      text-2xl
      text-black
      w-15
      h-15
      :class="correct ? 'bg-green-300' : ''"
    >
      {{ props.char }}
    </div>
  </div>
</template>

<style scoped></style>
