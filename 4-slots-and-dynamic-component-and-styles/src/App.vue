<template>
  <div>
    <the-header></the-header>

    <!-- dynamic component -->
    <button @click="setActiveComponent(ActiveGoals)">Active Goal</button>
    <button @click="setActiveComponent(ManageGoals)">Manage Goal</button>
    <keep-alive>
      <component :is="activeComponent" />
    </keep-alive>
    <!-- end of dynamic component -->

    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <slot-props>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
      <template #footer="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template>
    </slot-props>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import SlotProps from "./components/SlotProps.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
const activeUser = ref({
  name: "Maximilian Schwarzmüller",
  description: "Site owner and admin",
  role: "admin",
});

const activeComponent = ref(ActiveGoals);
const setActiveComponent = (param) => {
  activeComponent.value = param;
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>