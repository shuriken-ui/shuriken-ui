<script lang="ts">
import type { DropdownMenuLabelProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { DropdownMenuLabel, useForwardProps } from 'reka-ui'

export interface BaseDropdownLabelProps extends DropdownMenuLabelProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string
}
export interface BaseDropdownLabelSlots {
  default: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseDropdownLabelProps>(), {
  label: '',
})
const slots = defineSlots<BaseDropdownLabelSlots>()

const forward = useForwardProps(reactiveOmit(props, ['label']))
</script>

<template>
  <DropdownMenuLabel
    v-bind="forward"
    class="px-2 pt-1 relative flex items-center justify-between mb-3 font-sans font-medium tracking-wider text-[0.65rem] uppercase text-muted-500 dark:text-muted-200"
  >
    <slot>
      {{ props.label }}
    </slot>
  </DropdownMenuLabel>
</template>
