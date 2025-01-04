import type { PrimitiveProps } from 'reka-ui';

export interface BaseIconBoxProps extends PrimitiveProps {
  /**
   * The variant of the box.
   *
   * @default 'default-low'
   */
  variant?: 'default' | 'muted' | 'primary' | 'dark' | 'none'

  /**
   * The size of the icon.
   *
   * @default 'xs'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    /**
   * The radius of the icon.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'
}
export type BaseIconBoxSlots = {
  default(): any
}
export type BaseIconBoxConfig = {
  variant: NonNullable<BaseIconBoxProps['variant']>
  size: NonNullable<BaseIconBoxProps['size']>
  rounded: NonNullable<BaseIconBoxProps['rounded']>
}
