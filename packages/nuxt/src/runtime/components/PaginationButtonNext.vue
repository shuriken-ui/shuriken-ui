<script setup lang="ts">
import { useNuiConfig } from '../composables/useNuiConfig'
import { BasePagination as theme } from '../theme'
import { injectBasePaginationContext } from './Pagination.vue'

const context = injectBasePaginationContext()

const iconNext = useNuiConfig('icon', 'chevronRight')
</script>

<template>
  <PaginationNext
    class="focus-visible:nui-focus flex items-center justify-center font-sans text-sm enabled:cursor-pointer transition-all duration-300 disabled:opacity-50"
    :class="[
      context.variant && theme.buttonVariants[context.variant],
      context.rounded && theme.radiuses[context.rounded],
      context.size && theme.heights[context.size],
    ]"
  >
    <slot>
      <Icon :name="iconNext" class="text-base rtl:scale-x-[-1]" />
    </slot>
  </PaginationNext>
</template>
