<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="..."></slot>
    </li>
    <hr />
    <li v-for="name in names" :key="name">
      <slot name="footer" :item="name"></slot>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const goals = ref(["learn vue", "finsih the course"]);

const names = ref(["Ujair", "Sahil"]);
</script>