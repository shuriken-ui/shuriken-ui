<script lang="ts">
import type {
  AcceptableValue,
  ComboboxItemEmits,
  ComboboxItemProps,
} from 'reka-ui'
import type { BaseAutocompleteContext } from './Autocomplete.vue'
import { reactiveOmit } from '@vueuse/core'
import {
  ComboboxItem,
  ComboboxItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'
import { useNuiConfig } from '../composables/useNuiConfig'
import { injectBaseAutocompleteContext, radiuses } from './Autocomplete.vue'

export interface BaseAutocompleteItemProps<T = AcceptableValue> extends ComboboxItemProps<T> {}
export interface BaseAutocompleteItemEmits<T = AcceptableValue> extends ComboboxItemEmits<T> {}
export interface BaseAutocompleteItemSlots {
  default: () => any
}

export const variants = {
  default: 'data-[highlighted]:bg-portal-default-item-bg-active text-portal-default-item-text data-[highlighted]:text-portal-default-item-text-active',
  muted: 'data-[highlighted]:bg-portal-muted-item-bg-active text-portal-muted-item-text data-[highlighted]:text-portal-muted-item-text-active',
  none: '',
} as const satisfies Record<BaseAutocompleteContext['variant'], string>
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
const props = withDefaults(defineProps<BaseAutocompleteItemProps<T>>(), {
  value: undefined,
  textValue: undefined,
})
const emits = defineEmits<BaseAutocompleteItemEmits<T>>()
const slots = defineSlots<BaseAutocompleteItemSlots>()

const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardPropsEmits(reactiveOmit(props, []), emits) as BaseAutocompleteItemProps<T>

const context = injectBaseAutocompleteContext()
</script>

<template>
  <ComboboxItem
    v-bind="forward"
    class="font-sans text-sm leading-none flex items-center min-h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
    :class="[
      context.rounded && radiuses[context.rounded],
      context.variant && variants[context.variant],
    ]"
  >
    <ComboboxItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
      <Icon :name="iconCheck" />
    </ComboboxItemIndicator>

    <span>
      <slot />
    </span>
  </ComboboxItem>
</template>
