<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <div class="flex items-center p-4">
    <BaseSwitchBall
      v-model="value"
      label="Label"
      variant="dark"
    />
  </div>
</template>
