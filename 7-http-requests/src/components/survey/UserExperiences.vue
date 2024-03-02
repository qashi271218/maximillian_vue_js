<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getResults"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Please wait</p>
      <ul v-else-if="!isLoading && results">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else>No data</p>
    </base-card>
  </section>
</template>

<script setup>
import SurveyResult from './SurveyResult.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
//defineProps(['results']);
const results = ref([]);
const isLoading = ref(true);
const getResults = async () => {
  isLoading.value = true;
  await axios
    .get(
      'https://vue-http-requests-32fa6-default-rtdb.firebaseio.com/surveys.json'
    )
    .then((response) => {
      results.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      isLoading.value = false;
    });
};

onMounted(() => {
  getResults();
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>