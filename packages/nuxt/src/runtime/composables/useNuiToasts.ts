import type { Ref } from 'vue'
import type { BaseToastEmits, BaseToastProps } from '../components/Toast.vue'

import { useState } from '#imports'

type EmitsToProps<T> = {
  [K in keyof T as `on${Capitalize<string & K>}`]?: T[K] extends any[] ? (...args: T[K]) => void : never;
}

interface Toast extends Omit<BaseToastProps, 'as' | 'asChild'>, EmitsToProps<BaseToastEmits> {
  id: string
}

export function useNuiToasts(): {
  toasts: Ref<Toast[]>
  add: (options: Partial<Toast>) => Toast
  remove: (id: string) => void
  clear: () => void
} {
  const toasts = useState<Toast[]>('nui-toasts', () => [])
  const max = useState('nui-toasts-max', () => 3)

  function add(options: Partial<Toast>): Toast {
    const id = Math.random().toString(36).substring(2, 9)
    const toast = {
      id,
      open: true,
      ...options,
    }

    toasts.value.push(toast)

    const open = toasts.value.filter((t: Toast) => t.open).length
    if (open > max.value) {
      toasts.value.shift()
    }

    return toast
  }
  function remove(id: string): void {
    const index = toasts.value.findIndex((t: Toast) => t.id === id)
    if (index === -1)
      return

    // delay removal to allow for animations
    toasts.value[index].open = false

    setTimeout(() => {
      toasts.value = toasts.value.filter((t: Toast) => t.id !== id)
    }, 200)
  }
  function clear(): void {
    toasts.value = []
  }

  return {
    toasts,
    add,
    remove,
    clear,
  }
}
