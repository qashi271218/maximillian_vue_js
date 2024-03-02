<template>
  <section>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- It Will show when header not provided
        <template v-slot:header>
      <h2>Available Badges</h2>
    </template> -->
        <h2>The Default</h2>
      </slot>
    </header>
    <slot> </slot>
  </section>
</template>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>