<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- <button @click="$emit('select-topic', id)">Learn More</button> -->
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script setup>
import { defineProps, inject } from 'vue';
const selectTopic = inject('selectTopic');
defineProps(['id', 'topicName', 'description']);
//emits: ['select-topic'],
</script>