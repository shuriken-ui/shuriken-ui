import type { BaseSelectContext } from '@shuriken-ui/nuxt'

export { radiuses } from './BaseSelect'
export const variants = {
  default: 'data-[highlighted]:bg-portal-default-item-bg-active text-portal-default-item-text data-[highlighted]:text-portal-default-item-text-active',
  muted: 'data-[highlighted]:bg-portal-muted-item-bg-active text-portal-muted-item-text data-[highlighted]:text-portal-muted-item-text-active',
} as const as Record<BaseSelectContext['variant'], string>

export const sizes = {
  sm: 'min-h-6',
  md: 'min-h-8',
  lg: 'min-h-10',
  xl: 'min-h-12',
} as const satisfies Record<NonNullable<BaseSelectContext['size']>, string>