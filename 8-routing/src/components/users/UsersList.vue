<template>
  <div>
    <button @click="teampage">Go to teams page</button>
    <button @click="saveChanges">Save Changes</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import UserItem from './UserItem.vue';
const users = inject('users');
const router = useRouter();
const teampage = () => {
  //router.push({ name: 'teams' });
  router.back();
};

const data = ref(false);
const saveChanges = () => {
  data.value = true;
};
onBeforeRouteLeave((to, from, next) => {
  console.log('onBeforeRouteLeave');
  if (data.value) {
    next();
  } else {
    const result = confirm('Are you sure');
    next(result);
  }
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>