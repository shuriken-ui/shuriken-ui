import type { 
  DropdownMenuSubProps,
  DropdownMenuSubEmits,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps,
  DropdownMenuPortalProps,
} from 'reka-ui'

export interface BaseDropdownSubProps extends DropdownMenuSubProps {
  /**
   * The title to display for the dropdown item.
   */
  title?: string

  /**
   * The text to display for the dropdown item.
   */
  text?: string

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: DropdownMenuSubTriggerProps
    content?: DropdownMenuSubContentProps
    portal?: DropdownMenuPortalProps
  }
}
export interface BaseDropdownSubEmits extends DropdownMenuSubEmits {}
export type BaseDropdownSubSlots = {
  default(): any
  title(): any
  text(): any
}
