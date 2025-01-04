import type { BaseAutocompleteContext } from "@shuriken-ui/types";

export { radiuses } from './BaseAutocomplete'
export const variants = {
  default: 'data-[highlighted]:bg-muted-100 dark:data-[highlighted]:bg-muted-800 text-muted-700 data-[highlighted]:text-primary-base dark:text-muted-300 dark:data-[highlighted]:text-primary-light',
  muted: 'data-[highlighted]:bg-muted-200 dark:data-[highlighted]:bg-muted-800 text-muted-800 data-[highlighted]:text-primary-base dark:text-muted-400 dark:data-[highlighted]:text-primary-light',
  none: '',
} as const satisfies Record<BaseAutocompleteContext['variant'], string>
