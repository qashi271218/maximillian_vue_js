<template>
  <div>
    <form @submit.prevent="submitData">
      <label>Name</label><br />
      <input type="text" v-model="formData.name" /><br />
      <label>Email</label><br />
      <input type="email" v-model="formData.email" /><br />
      <label>Phone</label><br />
      <input type="text" v-model="formData.phone" /><br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script setup>
import { reactive, defineEmits } from "vue";
const emit = defineEmits(["submit-data"]);
const formData = reactive({
  name: "",
  email: "",
  phone: "",
});

const submitData = () => {
  emit("submit-data", formData);
  formData.name = "";
  formData.email = "";
  formData.phone = "";
};
</script>

<style scoped>
form {
  text-align: center;
}
</style>