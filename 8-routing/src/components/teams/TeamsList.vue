<template>
  <div>
    <router-view></router-view>
    <ul>
      <teams-item
        v-for="team in teams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        :member-count="team.members.length"
      ></teams-item>
    </ul>
  </div>
</template>

<script setup>
import TeamsItem from './TeamsItem.vue';
import { inject, onMounted } from 'vue';
const teams = inject('teams');
import { useRoute } from 'vue-router';
const route = useRoute();
onMounted(() => {
  console.log(route.meta.needsAuth);
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>