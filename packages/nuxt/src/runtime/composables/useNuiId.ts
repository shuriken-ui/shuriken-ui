import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { computed, toValue, useId } from 'vue'

export function useNuiId(id?: MaybeRefOrGetter<string | undefined>): ComputedRef<string> {
  const uid = useId()
  return computed(() => toValue(id) || uid)
}
