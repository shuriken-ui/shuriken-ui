import { useEventListener } from '@vueuse/core'
import { ref, onMounted } from 'vue'

export function useNinjaWindowScroll() {
  const x = ref(0)
  const y = ref(0)

  if (import.meta.browser) {
    useEventListener(
      window,
      'scroll',
      () => {
        x.value = window.scrollX
        y.value = window.scrollY
      },
      {
        capture: false,
        passive: true,
      },
    )
    onMounted(() => {
      x.value = window.scrollX
      y.value = window.scrollY
    })
  }

  return { x, y }
}
