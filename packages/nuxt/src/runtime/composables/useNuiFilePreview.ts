import type { MaybeRefOrGetter, Ref } from 'vue'
import { ref, toValue, watchEffect } from 'vue'

const previewMap = new WeakMap<File, Ref<string | undefined>>()

/**
 * @deprecated
 */
export function useNuiFilePreview(
  _file: MaybeRefOrGetter<File | null | undefined>,
): Ref<string | undefined> {
  const preview = ref<string>()

  watchEffect((onCleanup) => {
    const file = toValue(_file)
    if (!file) {
      preview.value = undefined
      return
    }

    if (previewMap.has(file)) {
      preview.value = previewMap.get(file)?.value
      return
    }

    const reader = new FileReader()

    function listener(): void {
      preview.value = reader.result?.toString() ?? ''
      reader.removeEventListener('load', listener)
    }
    reader.addEventListener('load', listener)
    reader.readAsDataURL(file)

    previewMap.set(file, preview)

    onCleanup(() => {
      reader.removeEventListener('load', listener)
    })
  })

  return preview
}
