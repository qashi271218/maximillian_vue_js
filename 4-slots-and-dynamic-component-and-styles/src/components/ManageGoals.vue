<template>
  <div>
    <h1>Manage Goals</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" />
      <button>Submit</button>
    </form>

    <!-- teleport -->
    <teleport to="body">
      <error-alert v-if="error">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ErrorAlert from "./ErrorAlert.vue";

const name = ref("");
const error = ref(false);
const submitForm = () => {
  if (name.value == "") {
    error.value = true;
  }
};
</script>