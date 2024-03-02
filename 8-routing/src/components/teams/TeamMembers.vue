<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in membersList"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link :to="{ name: 'view-team', params: { teamId: 't2' } }"
      >Go to team2</router-link
    >
  </section>
</template>

<script setup>
import UserItem from '../users/UserItem.vue';
import { inject, ref, defineProps, onBeforeUpdate, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
const route = useRoute();
const teamName = ref('');
const membersList = ref([]);
const teams = inject('teams');
const users = inject('users');
const props = defineProps(['teamId']);
const teamId = ref(props.teamId);
const request = ref(route);

const loadTeamMembers = (newId) => {
  //const teamId = route.params.teamId;
  const selectedTeam = teams.value.find((team) => team.id == newId);
  const members = selectedTeam.members;
  const selectedMembers = [];
  for (const member of members) {
    const selectedUser = users.value.find((user) => user.id == member);
    selectedMembers.push(selectedUser);
  }
  membersList.value = selectedMembers;
  teamName.value = selectedTeam.name;
};

//onMounted(() => {
// loadTeamMembers(props.teamId);
// console.log(route.query);
//});

onBeforeUpdate(() => {
  loadTeamMembers(props.teamId);
});

watch(
  teamId,
  (newValue) => {
    loadTeamMembers(newValue);
  },
  {
    immediate: true,
  }
);

watch(
  request,
  () => {
    console.log(request.value.query);
  },
  {
    immediate: true,
  }
);

onBeforeRouteUpdate((to, from, next) => {
  // loadTeamMembers(to.params.teamId);
  console.log('on before route update');
  console.log(to, from);
  next();
});
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>