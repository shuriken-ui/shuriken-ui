<script setup lang="ts">
import type { BaseDropdownSubEmits, BaseDropdownSubProps, BaseDropdownSubSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import { useNuiConfig } from '../composables/useNuiConfig'
import { BaseDropdown as dropdownTheme, BaseDropdownItem as theme } from '../theme'

import { injectBaseDropdownContext } from './Dropdown.vue'

const props = defineProps<BaseDropdownSubProps>()
const emits = defineEmits<BaseDropdownSubEmits>()
const slots = defineSlots<BaseDropdownSubSlots>()

const context = injectBaseDropdownContext()

const iconChevronRight = useNuiConfig('icon', 'chevronRight')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'bindings']), emits)
</script>

<template>
  <DropdownMenuSub v-bind="forward">
    <DropdownMenuSubTrigger
      v-bind="props.bindings?.trigger"
      class="focus-visible:nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-100"
      :class="[
        theme.radiuses[context.rounded],
        theme.variants[context.variant],
      ]"
    >
      <div class="flex items-center justify-between w-full">
        <div class="grow">
          <div class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
            <slot name="title">
              {{ props.title }}
            </slot>
          </div>
          <div
            v-if="'text' in $slots || props.text"
            class="text-muted-400 font-sans text-xs"
          >
            <slot name="text">
              {{ props.text }}
            </slot>
          </div>
        </div>
        <Icon :name="iconChevronRight" class="shrink-0 rtl:scale-x-[-1]" />
      </div>
    </DropdownMenuSubTrigger>
    <DropdownMenuPortal v-bind="props.bindings?.portal">
      <DropdownMenuSubContent
        class="mt-2 min-w-52 focus:outline-none shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20"
        :class="[
          dropdownTheme.radiuses[props.rounded || context.rounded],
          dropdownTheme.variants[props.variant || context.variant],
        ]"
        v-bind="{
          sideOffset: 2,
          alignOffset: -5,
          ...(props.bindings?.content || {}),
        }"
      >
        <div class="p-2 space-y-1 max-h-[var(--reka-popper-available-height)] overflow-y-scroll nui-slimscroll">
          <slot />
        </div>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  </DropdownMenuSub>
</template>
