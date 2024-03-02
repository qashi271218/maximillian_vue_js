<template>
  <input
    type="{{ type }}"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['type', 'modelValue']);
defineEmits(['update:modelValue']);
</script>