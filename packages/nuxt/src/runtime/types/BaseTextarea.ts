export interface BaseTextareaProps {
  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The placeholder text for the textarea.
   */
  placeholder?: string

  /**
   * The number of rows to display in the textarea.
   */
  rows?: number | string

  /**
   * Whether to allow the user to resize the textarea.
   */
  resize?: boolean

  /**
   * Whether to automatically grow the textarea as text is entered.
   */
  autogrow?: boolean

  /**
   * The maximum height of the textarea when autogrow is enabled.
   */
  maxHeight?: number

  /**
   * The variant of the textarea.
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the textarea.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}
export interface BaseTextareaConfig {
  variant: NonNullable<BaseTextareaProps['variant']>
  rounded: NonNullable<BaseTextareaProps['rounded']>
  size: NonNullable<BaseTextareaProps['size']>
}
