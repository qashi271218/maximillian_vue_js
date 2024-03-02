<template>
  <li>
    <!-- To change prop value inside child component -->
    <!-- <h2>{{ name }} {{ favorite ==1 ? '(Favorite)' :'' }}</h2> -->

    <h2>{{ name }} {{ isFavorite == 1 ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="$emit('delete-friend', id)">Delete</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

//Getting props without validation
//const props=defineProps(['id', 'phone', 'name', 'email', 'isFavorite']);

//Getting props with validation
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  name: String,
  email: String,
  isFavorite: {
    type: Boolean,
    required: false,
    default: true,
    //This logic will make sense when prop type is string type
    // validator: function (value) {
    //   if (value == '0' || value == '1') {
    //     return value;
    //   } else {
    //     return console.log('invalid is favorite value')
    //   }
    // }
  },
});
const detailsAreVisible = ref(false);
const toggleDetails = () => {
  detailsAreVisible.value = !detailsAreVisible.value;
};

//To change prop value only in child component not in parent component
// const favorite = ref(props.isFavorite);
// const toggleFavorite = () => {
//   favorite.value = !favorite.value;

//This logic will make sense when prop type is string type
// if (favorite.value == 1) {
//   favorite.value = 0;
// } else {
//   favorite.value = 1;
// }
//}

//To change prop value in parent component

//emit without validation
const emit = defineEmits(["toggle-favorite", "delete-friend"]);

//emit with validation
// const emit = defineEmits({
//   'toggle-favorite': function (id) {
//     if (id) {
//       return true;
//     } else {
//       console.warn('id is missing');
//       return false;
//     }
//   }
// });

const toggleFavorite = () => {
  emit("toggle-favorite", props.id);
};

// const deleteFriend = () => {
//   emit("delete-friend", props.id);
// };
</script>