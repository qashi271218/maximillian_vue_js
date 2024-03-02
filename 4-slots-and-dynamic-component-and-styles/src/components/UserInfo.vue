<template>
  <base-card>
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template #default>
      <p>{{ infoText }}</p>
    </template>
  </base-card>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["fullName", "infoText", "role"]);
</script>