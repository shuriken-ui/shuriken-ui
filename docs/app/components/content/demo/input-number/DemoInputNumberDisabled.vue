<script setup lang="ts">
const value = ref(0)
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex w-full items-center">
        <div class="flex w-full max-w-sm items-end gap-4">
          <BaseInputNumber
            v-model="value"
            variant="default"
            rounded="md"
            placeholder="Your rating"
            disabled
          />

          <BaseInputNumber
            v-model="value"
            variant="muted"
            rounded="md"
            placeholder="Priority"
            disabled
          />
        </div>
      </div>
    </div>
  </div>
</template>
