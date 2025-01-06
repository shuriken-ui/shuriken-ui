import type { BaseThemeSystemConfig, BaseThemeSystemProps } from "@shuriken-ui/nuxt"

export const variants = {
  'default': 'bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700',
} as const satisfies Record<NonNullable<BaseThemeSystemProps['variant']>, string>

export const trackVariants = {
  'default': 'bg-muted-100 dark:bg-muted-700',
} as const satisfies Record<NonNullable<BaseThemeSystemProps['variant']>, string>

export const defaults = {
  variant: 'default',
  disableTransitions: false
} as const satisfies BaseThemeSystemConfig
