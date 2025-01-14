import type{
  SwitchRootProps,
  SwitchRootEmits,
} from 'reka-ui'

export interface BaseSwitchThinProps extends SwitchRootProps {
  /**
   * Accessible label of the switch.
   */
  label?: string

  /**
   * The sublabel of the switch.
   */
  sublabel?: string

  /**
   * Main color of the switch.
   */
  variant?: 'default' | 'primary' | 'dark' | 'none'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    thumb?: string | string[]
    track?: string | string[]
    label?: string | string[]
  }
}
export interface BaseSwitchThinEmits extends SwitchRootEmits {}
export type BaseSwitchThinSlots = {
  default(): any
  sublabel(): any
}
export type BaseSwitchThinConfig = {
  variant: NonNullable<BaseSwitchThinProps['variant']>
}
