<script setup lang="ts">
import type { BaseProgressEmits, BaseProgressProps, BaseProgressSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import { BaseProgress as theme } from '../theme'

const props = withDefaults(defineProps<BaseProgressProps>(), {
  size: theme.defaults.size,
  variant: theme.defaults.variant,
  rounded: theme.defaults.rounded,

  max: undefined,
  modelValue: undefined,
  getValueLabel: undefined,
})
const emits = defineEmits<BaseProgressEmits>()
const slots = defineSlots<BaseProgressSlots>()

const forward = useForwardPropsEmits(reactiveOmit(props, ['variant', 'rounded', 'size']), emits)
</script>

<template>
  <ProgressRoot
    v-slot="{ modelValue }"
    v-bind="forward"
    class="relative w-full overflow-hidden"
    :class="[
      props.size && theme.sizes[props.size],
      props.variant && theme.trackVariants[props.variant],
      props.rounded && theme.radiuses[props.rounded],
    ]"
  >
    <ProgressIndicator
      class="absolute start-0 top-0 h-full w-full transition-all duration-300"
      :class="[
        typeof modelValue !== 'number' && 'nui-progress-indeterminate animate-nui-progress-indeterminate',
        props.variant && theme.variants[props.variant],
        props.rounded && theme.radiuses[props.rounded],
      ]"
      :style="typeof modelValue === 'number' && `transform: translateX(-${(
        100 - (modelValue / (props.max || 100) * 100)
      )}%)`"
    />
  </ProgressRoot>
</template>
