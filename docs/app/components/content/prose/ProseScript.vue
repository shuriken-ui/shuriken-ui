<script setup lang="ts">
import { computed } from 'vue'

defineProps({
  src: {
    type: String,
    default: '',
  },
})
const isDev = computed(() => import.meta.dev)
</script>

<template>
  <div v-if="isDev">
    Rendering the <code>script</code> element is dangerous and is disabled by default. Consider implementing your own <code>ProseScript</code> element to have control over script rendering.
  </div>
</template>
