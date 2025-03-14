import type { SelectLabelProps } from 'reka-ui'

export interface BaseSelectLabelProps extends SelectLabelProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string
}
export interface BaseSelectLabelSlots {
  default: () => any
}
