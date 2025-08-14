<script lang="ts">
import type { ToastProviderProps } from 'reka-ui'
import { useState } from '#imports'
import { reactiveOmit } from '@vueuse/core'
import { ToastProvider, ToastViewport, useForwardProps } from 'reka-ui'
import { computed, watchEffect } from 'vue'
import { useNuiToasts } from '../composables/useNuiToasts'

export interface BaseToastProviderProps extends Omit<ToastProviderProps, 'swipeDirection'> {
  max?: number
  position?: 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseToastProviderProps>(), {
  max: 3,
  position: 'bottom-end',
  swipeDirection: undefined,
})

const max = useState('nui-toasts-max', () => 3)
watchEffect(() => max.value = props.max)

const { toasts, remove } = useNuiToasts()

const positions = {
  'top-start': 'top-0 start-0 flex-col-reverse',
  'top-center': 'top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex-col-reverse items-center',
  'top-end': 'top-0 end-0 flex-col-reverse items-end',
  'bottom-start': 'bottom-0 start-0 flex-col',
  'bottom-center': 'bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex-col items-center',
  'bottom-end': 'bottom-0 end-0 flex-col items-end',
} as const

const swipeDirection = computed(() => {
  switch (props.position) {
    case 'top-center':
      return 'up'
    case 'bottom-center':
      return 'down'
    case 'top-start':
    case 'bottom-start':
      return 'left'
    case 'top-end':
    case 'bottom-end':
    default:
      return 'right'
  }
})

const forward = useForwardProps(reactiveOmit(props, ['position']))
</script>

<template>
  <ToastProvider
    v-bind="{
      swipeDirection,
      ...forward,
    }"
  >
    <slot />

    <BaseToast
      v-for="toast in toasts"
      :key="toast.id"
      v-bind="{
        ...toast,
        id: undefined,
      }"
      force-mount
      class="data-[swipe=move]:duration-0 duration-200 data-[state=closed]:duration-100 data-[swipe=cancel]:ease-out data-[state=closed]:ease-out starting:ease-in starting:opacity-0 transition-discrete" :class="[
        props.position.startsWith('top') && 'starting:-translate-y-full',
        props.position.startsWith('bottom') && 'starting:translate-y-full',

        // swipeDirection === 'right' && 'starting:translate-x-full data-[state=closed]:translate-x-full translate-x-0',
        // swipeDirection === 'left' && 'starting:-translate-x-full data-[state=closed]:-translate-x-full translate-x-0',
        // swipeDirection === 'up' && 'starting:-translate-y-full data-[state=closed]:-translate-y-full translate-y-0',
        // swipeDirection === 'down' && 'starting:translate-y-full data-[state=closed]:translate-y-full translate-y-0',

        swipeDirection === 'right' && 'data-[state=closed]:translate-x-full translate-x-0',
        swipeDirection === 'left' && 'data-[state=closed]:-translate-x-full translate-x-0',
        swipeDirection === 'up' && 'data-[state=closed]:-translate-y-full translate-y-0',
        swipeDirection === 'down' && 'data-[state=closed]:translate-y-full translate-y-0',

        ['right', 'left'].includes(swipeDirection) && 'data-[swipe=move]:translate-x-[var(--reka-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0',
        ['up', 'down'].includes(swipeDirection) && 'data-[swipe=move]:translate-y-[var(--reka-toast-swipe-move-y)] data-[swipe=cancel]:translate-y-0',
      ]"
      @update:open="(value: boolean) => { if (!value) remove(toast.id) }"
    />

    <ToastViewport
      class="fixed flex gap-2 max-w-[100vw] w-full md:w-auto z-[2147483647] outline-none p-4"
      :class="[
        positions[position],
      ]"
    />
  </ToastProvider>
</template>
