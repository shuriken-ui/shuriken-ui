<script setup lang="ts">
import type { BaseDropdownRadioItemEmits, BaseDropdownRadioItemProps, BaseDropdownRadioItemSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'

import { useForwardPropsEmits } from 'reka-ui'
import { BaseDropdownItem as theme } from '../theme'

import { injectBaseDropdownContext } from './Dropdown.vue'

const props = withDefaults(defineProps<BaseDropdownRadioItemProps>(), {
  text: undefined,
  title: undefined,

  variant: undefined,
  rounded: undefined,

  disabled: undefined,
  textValue: undefined,
  value: undefined,

  bindings: () => ({}),
})
const emits = defineEmits<BaseDropdownRadioItemEmits>()
const slots = defineSlots<BaseDropdownRadioItemSlots>()

const context = injectBaseDropdownContext()

const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'variant', 'rounded', 'bindings']), emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forward"
    class="focus-visible:nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-100 group/menu-radio-item"
    :class="[
      theme.radiuses[props.rounded || context.rounded],
      theme.variants[props.variant || context.variant],
      props.disabled && 'opacity-50 pointer-events-none',
    ]"
  >
    <DropdownMenuItemIndicator v-bind="props.bindings?.indicator" class="relative me-2 translate-y-1/4">
      <BaseChip position="static" color="primary" size="sm" />
    </DropdownMenuItemIndicator>

    <div class="grow group-data-[state=unchecked]/menu-radio-item:ps-6!">
      <div class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
        <slot>
          {{ props.title }}
        </slot>
      </div>
      <div
        v-if="'text' in $slots || props.text"
        class="text-muted-400 font-sans text-xs"
      >
        <slot name="text">
          {{ props.text }}
        </slot>
      </div>
    </div>
    <slot name="end" />
  </DropdownMenuRadioItem>
</template>
