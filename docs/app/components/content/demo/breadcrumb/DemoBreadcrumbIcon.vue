<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '#',
  },
]
</script>

<template>
  <div class="flex items-center px-4 pt-4">
    <BaseBreadcrumb
      :items="breadcrumb"
      separator="dot"
    />
  </div>
</template>
