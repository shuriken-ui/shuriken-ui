import type { ComputedRef } from 'vue'
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric, RouteLocationRaw } from 'vue-router'
import { defineNuxtLink } from '#imports'
import { computed } from 'vue'

export interface BaseButtonProperties {
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw
  href?: string
  disabled?: boolean
  rel?: string
  target?: string
}

const NuxtLink = defineNuxtLink({})

export function useNuiButton(properties: BaseButtonProperties, {
  externalDefaultRelationship = 'noopener noreferrer',
  externalDefaultTarget = '_blank',
} = {}): {
  attributes: ComputedRef<{
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined
    href?: string
    disabled?: boolean
    type?: string
    rel?: string
    target?: string
  }>
  is: ComputedRef<'a' | 'button'>
} {
  const is = computed(() =>
    properties.to ? NuxtLink : properties.href ? 'a' : 'button',
  )
  const type = computed(() => {
    if (is.value === 'button') {
      return properties.type || 'button'
    }
  })
  const external = computed(() => {
    if (typeof properties.to === 'string' && properties.to.startsWith('http')) {
      return true
    }
    else if (
      typeof properties.to === 'object'
      && 'path' in properties.to
      && properties.to.path?.startsWith('http')
    ) {
      return true
    }

    return false
  })
  const relationship = computed(() => {
    if (!external.value) {
      return properties.rel
    }

    return properties.rel ?? externalDefaultRelationship
  })
  const target = computed(() => {
    if (!external.value) {
      return properties.target
    }

    return properties.target ?? externalDefaultTarget
  })

  const attributes = computed(() => ({
    to: properties.disabled ? undefined : properties.to,
    href: properties.disabled ? undefined : properties.href,
    disabled: properties.disabled,
    type: type.value,
    rel: relationship.value,
    target: target.value,
  }))

  return {
    attributes,
    is,
  }
}
