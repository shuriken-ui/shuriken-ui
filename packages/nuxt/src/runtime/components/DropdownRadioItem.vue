<script lang="ts">
import type {
  DropdownMenuItemIndicatorProps,
  DropdownMenuRadioItemEmits,
  DropdownMenuRadioItemProps,
} from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  useForwardPropsEmits,
} from 'reka-ui'

import { injectBaseDropdownContext, radiuses, variants } from './Dropdown.vue'

export interface BaseDropdownRadioItemProps extends DropdownMenuRadioItemProps {
  /**
   * The title to display for the dropdown item.
   */
  title?: string

  /**
   * The text to display for the dropdown item.
   */
  text?: string

  /**
   * The hover color of the dropdown-item inner elements.
   */
  variant?: 'default' | 'muted' | 'primary' | 'none'

  /**
   * The radius of the dropdown-item.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    indicator?: DropdownMenuItemIndicatorProps
  }
}
export interface BaseDropdownRadioItemEmits extends DropdownMenuRadioItemEmits {}
export interface BaseDropdownRadioItemSlots {
  default: () => any
  text: () => any
  end: () => any
}
</script>

<script setup lang="ts">
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
      radiuses[props.rounded || context.rounded],
      variants[props.variant || context.variant],
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
