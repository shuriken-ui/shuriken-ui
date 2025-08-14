<script lang="ts">
import type {
  TabsRootEmits,
  TabsRootProps,
} from 'reka-ui'
import type { BaseTabsTriggerProps } from './TabsTrigger.vue'
import { reactiveOmit } from '@vueuse/core'
import { createContext, TabsIndicator, TabsList, TabsRoot, useForwardPropsEmits } from 'reka-ui'

type StringOrNumber = string | number

export interface BaseTabsProps<T extends StringOrNumber = StringOrNumber> extends TabsRootProps<T> {
  /**
   * An array of tab objects that contain a label and value
   */
  tabs?: BaseTabsTriggerProps[]

  /**
   * Accessible label for the tabs
   */
  label?: string

  /**
   * Defines the color of the active tab
   */
  variant?: 'primary' | 'dark' | 'muted'

  /**
   * The horizontal alignment of the tabs.
   */
  justify?: 'start' | 'center' | 'end'

  /**
   * The radius of the boxed tab.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The type of tabs to display..
   */
  type?: 'tabs' | 'box'
}
export interface BaseTabsEmits<T extends StringOrNumber = StringOrNumber> extends TabsRootEmits<T> {
  'update:modelValue': [payload: T]
}
export interface BaseTabsSlots {
  default: () => any
  trigger: () => any
}
export interface BaseTabsContext {
  variant: NonNullable<BaseTabsProps['variant']>
  justify: NonNullable<BaseTabsProps['justify']>
  rounded: NonNullable<BaseTabsProps['rounded']>
  type: NonNullable<BaseTabsProps['type']>
}

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseTabsProps['rounded']>, string>

export const justifies = {
  start: '',
  center: 'justify-center',
  end: 'justify-end',
} as const satisfies Record<NonNullable<BaseTabsProps['justify']>, string>

export const types = {
  tabs: 'cursor-pointer px-4 py-3 text-sm transition-all duration-300',
  box: 'flex flex-col rounded-xl px-5 cursor-pointer text-center transition-all duration-300',
} as const satisfies Record<NonNullable<BaseTabsProps['type']>, string>

export const tabsIndicator = {
  primary: 'bg-primary-base',
  dark: 'bg-muted-900 dark:bg-muted-100',
  muted: 'bg-muted-400 dark:bg-muted-500',
} as const satisfies Record<NonNullable<BaseTabsProps['variant']>, string>

export const boxIndicator = {
  primary: 'bg-primary-500/10 dark:bg-primary-500/20',
  dark: 'bg-muted-900/10 dark:bg-white/10',
  muted: 'bg-muted-100 dark:bg-muted-900',
} as const satisfies Record<NonNullable<BaseTabsProps['variant']>, string>

export const [
  injectBaseTabsContext,
  provideBaseTabsContext,
] = createContext<BaseTabsContext>('BaseTabsContext')
</script>

<script setup lang="ts" generic="T extends StringOrNumber">
const props = withDefaults(defineProps<BaseTabsProps<T>>(), {
  type: 'tabs',
  justify: 'start',
  rounded: 'md',
  variant: 'primary',

  modelValue: undefined,
  orientation: undefined,
  defaultValue: undefined,
})
const emits = defineEmits<BaseTabsEmits<T>>()
const slots = defineSlots<BaseTabsSlots>()

provideBaseTabsContext({
  variant: props.variant,
  justify: props.justify,
  rounded: props.rounded,
  type: props.type,
})

const forward = useForwardPropsEmits(reactiveOmit(props, ['tabs', 'variant', 'justify', 'rounded', 'type']))
</script>

<template>
  <TabsRoot
    v-bind="forward"
    class="relative"
    :class="[
      props.orientation === 'vertical' ? 'flex flex-row' : '',
    ]"
  >
    <TabsList
      :aria-label="props.label"
      class="relative font-sans mb-6 flex"
      :class="[
        props.justify && justifies[props.justify],
        props.orientation === 'vertical' && 'flex flex-col items-start me-16 min-w-32',
        props.orientation !== 'vertical' && props.type === 'tabs' && 'border-b border-muted-200 dark:border-muted-800',
      ]"
    >
      <slot name="trigger">
        <BaseTabsTrigger
          v-for="(tab, key) in tabs"
          :key="key"
          v-bind="tab"
          :variant="props.variant"
          @click="emits('update:modelValue', tab.value as T)"
        />
      </slot>

      <TabsIndicator
        v-if="props.type === 'tabs'"
        class="absolute rounded-full duration-300"
        :class="[
          props.orientation === 'vertical' && 'h-[var(--reka-tabs-indicator-size)] translate-y-[var(--reka-tabs-indicator-position)] end-0 w-[2px] transition-[height,translate]',
          props.orientation !== 'vertical' && 'w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)] start-0 h-[2px] bottom-0 transition-[width,translate]',
        ]"
      >
        <div class="w-full h-full" :class="tabsIndicator[props.variant]" />
      </TabsIndicator>
      <TabsIndicator
        v-else
        class="absolute rounded-full duration-300 pointer-events-none"
        :class="[
          props.orientation === 'vertical' && 'w-full translate-y-[var(--reka-tabs-indicator-position)] h-[var(--reka-tabs-indicator-size)] top-0 start-0 transition-[height,translate]',
          props.orientation !== 'vertical' && 'h-full translate-x-[var(--reka-tabs-indicator-position)] w-[var(--reka-tabs-indicator-size)]  bottom-0 start-0 transition-[width,translate]',
        ]"
      >
        <div
          class="w-full h-full"
          :class="[
            props.rounded && radiuses[props.rounded],
            boxIndicator[props.variant],
          ]"
        />
      </TabsIndicator>
    </TabsList>

    <div class="relative block">
      <slot>
        <BaseTabsContent
          v-for="(tab, key) in tabs"
          :key="key"
          :value="tab.value"
        >
          {{ tab.value }}
        </BaseTabsContent>
      </slot>
    </div>
  </TabsRoot>
</template>
