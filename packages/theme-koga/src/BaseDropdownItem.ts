import type { BaseDropdownContext } from "@shuriken-ui/types"

export const variants = {
  'default': 'hover:bg-muted-100 dark:hover:bg-muted-700',
  'muted': 'hover:bg-muted-200 dark:hover:bg-muted-700',
  'primary': 'hover:bg-primary-500/10 dark:hover:bg-primary-500/20',
  'none': '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>
