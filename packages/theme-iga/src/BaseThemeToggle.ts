import type { BaseThemeToggleConfig, BaseThemeToggleProps } from "@shuriken-ui/types"

export const variants = {
  'default': 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
} as const satisfies Record<NonNullable<BaseThemeToggleProps['variant']>, string>

export const defaults = {
  variant: 'default',
  disableTransitions: false
} as const satisfies BaseThemeToggleConfig
