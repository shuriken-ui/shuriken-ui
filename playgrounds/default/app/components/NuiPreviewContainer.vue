<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="w-full bg-white dark:bg-muted-950 min-h-screen px-4">
    <div class="w-full max-w-7xl mx-auto py-12">
      <h2
        v-if="props.title"
        class="text-2xl font-medium mb-10 text-muted-800 dark:text-muted-100"
      >
        {{ props.title }}
      </h2>
      <div class="flex flex-col gap-y-12 w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
