<script setup lang="ts">
import type { BaseTabsContentProps, BaseTabsContentSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<BaseTabsContentProps>(), {
  value: undefined,
})
const slots = defineSlots<BaseTabsContentSlots>()
const forward = useForwardProps(reactiveOmit(props, []))
</script>

<template>
  <TabsContent v-bind="forward" class="font-sans focus-visible:nui-focus text-sm text-muted-500 dark:text-muted-400">
    <slot />
  </TabsContent>
</template>
