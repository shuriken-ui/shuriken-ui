<script setup lang="ts">
import type { BaseButtonProps, BaseButtonSlots } from '../types'
import { useNuiButton } from '../composables/useNuiButton'
import { useNuiConfig } from '../composables/useNuiConfig'
import { BaseButton as theme } from '../theme'

const props = withDefaults(defineProps<BaseButtonProps>(), {
  to: undefined,
  href: undefined,
  rel: '',
  target: '',
  type: undefined,

  variant: theme.defaults.variant,
  size: theme.defaults.size,
  rounded: theme.defaults.rounded,
})
const slots = defineSlots<BaseButtonSlots>()

const iconSpiner = useNuiConfig('icon', 'spiner')

const { attributes, is } = useNuiButton(props)
</script>

<template>
  <component
    :is
    v-bind="attributes"
    class="focus-visible:nui-focus enabled:cursor-pointer relative inline-flex justify-center items-center space-x-1 font-sans font-normal leading-5 no-underline transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none"
    :class="[
      variant && theme.variants[variant],
      size && theme.sizes[size],
      rounded && theme.radiuses[rounded],
    ]"
  >
    <span v-if="loading" class="me-2 flex justify-center items-center size-4 shrink-0">
      <Icon :name="iconSpiner" class="text-base text-current" />
    </span>
    <slot />
  </component>
</template>
