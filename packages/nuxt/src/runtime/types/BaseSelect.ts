import type { 
  SelectRootProps,
  SelectRootEmits,
  SelectTriggerProps,
  SelectPortalProps,
  SelectContentProps,
  SelectViewportProps,
  AcceptableValue,
} from 'reka-ui'

export interface BaseSelectProps<T = AcceptableValue> extends SelectRootProps<T> {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The placeholder to display for the select input.
   */
  placeholder?: string

  /**
   * The variant of the select input.
   *
   * @default 'default'
   */
   variant?: 'default' | 'muted' 

  /**
   * The radius of the select input.
   *
   * @default 'md'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the select input.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Bindings presets
   *
   * @default 'aligned'
   */
  preset?: 'aligned' | 'popper'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: SelectTriggerProps
    portal?: SelectPortalProps
    content?: SelectContentProps
    viewport?: SelectViewportProps
  },

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    text?: string | string[]
    icon?: string | string[]
    content?: string | string[]
    buttonUp?: string | string[]
    buttonDown?: string | string[]
    viewport?: string | string[]
  },
}
export interface BaseSelectEmits<T = AcceptableValue> extends SelectRootEmits<T> {}
export type BaseSelectSlots<T = AcceptableValue> = {
  default(): any
  label(): any
  value(props: { selectedLabel: string[], modelValue: T | T[] }): any
}
export type BaseSelectConfig = {
  variant: NonNullable<BaseSelectProps['variant']>
  rounded: NonNullable<BaseSelectProps['rounded']>
  size: NonNullable<BaseSelectProps['size']>
  preset: NonNullable<BaseSelectProps['preset']>
}

export interface BaseSelectContext {
  variant: NonNullable<BaseSelectProps['variant']>
  rounded: NonNullable<BaseSelectProps['rounded']>
}
