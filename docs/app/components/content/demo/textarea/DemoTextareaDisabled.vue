<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-center">
          <BaseTextarea
            v-model="value"
            rounded="md"
            placeholder="Write a message..."
            disabled
          />
        </div>
      </div>
    </div>
  </div>
</template>
