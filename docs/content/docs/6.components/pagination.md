---
title: 'Pagination'
description: 'A set of pagination options.'
layout: 'default'
---

# Pagination

`<BasePagination />` · A set of pagination options.

::component-header{category="components/base" fileName="BasePagination.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BasePagination
    v-model:page="pageQuery"
    :items-per-page="8"
    :total="512"
    :sibling-count="2"
  />
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const pageQuery = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})
</script>
```

#preview
:demo-pagination-base
::

## Features

:checklist{:items='["Enable quick access to first, or last page", "Enable to show edges constantly, or not"]'}

## Anatomy
You can use this component as a self closing one or with its slots to customize the pagination buttons layout.

::code-group

```vue [Comp.vue]
<template>
  <BasePagination>
    <div>
      <BasePaginationButtonFirst />
      <BasePaginationButtonPrev />
    </div>
    <BasePaginationItems />
    <div>
      <BasePaginationButtonNext />
      <BasePaginationButtonLast />
    </div>
  </BasePagination>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BasePagination"}

## Examples

### Variants

Use the `variant` prop to change the color of the pagination.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BasePagination
    v-model:page="pageQuery"
    :items-per-page="8"
    :total="512"
    :sibling-count="2"
    rounded="lg"
    color="dark"
  />
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const pageQuery = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})
</script>
```

#preview
:demo-pagination-color
::

### Radius

Use the `rounded` prop to change the border radius of the pagination.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BasePagination
    v-model:page="pageQuery"
    :items-per-page="8"
    :total="512"
    :sibling-count="2"
    rounded="full"
  />
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const pageQuery = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})
</script>
```

#preview
:demo-pagination-radius
::

### Size

Use the `size` prop to change the size of the pagination buttons.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BasePagination
    v-model:page="pageQuery"
    :items-per-page="8"
    :total="512"
    :sibling-count="2"
    size="sm"
  />
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const pageQuery = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})
</script>
```

#preview
:demo-pagination-size
::

### Composition

Use the slots to customize the pagination buttons layout. Use the `<PaginationItems />` slot to render the pagination items. Use the `<PaginationButtonFirst />`, `<PaginationButtonPrev />`, `<PaginationButtonNext />`, and `<PaginationButtonLast />` slots to render the first, previous, next, and last buttons.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BasePagination
    v-slot="{ items }"
    v-model:page="pageQuery"
    :items-per-page="8"
    :total="512"
    :sibling-count="2"
    size="sm"
    class="w-full justify-between"
  >
    <div class="flex gap-2">
      <BasePaginationButtonFirst />
      <BasePaginationButtonPrev />
    </div>
    <BasePaginationItems :items />
    <div class="flex gap-2">
      <BasePaginationButtonNext />
      <BasePaginationButtonLast />
    </div>
  </BasePagination>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const pageQuery = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})
</script>
```

#preview
:demo-pagination-composition
::

### Slots usage

Use the slots to customize the pagination buttons layout. Use the `<page />` slot to render the page number. Use the `<ellipsis />` slot to render the ellipsis.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BasePagination
    v-model:page="pageQuery"
    :items-per-page="8"
    :total="1_000_000"
    :sibling-count="1"
    rounded="full"
    variant="dark"
  >
    <template #page="{ page }">
      {{ formatter.format(page) }}
    </template>
    <template #ellipsis>
      &#8230;
    </template>
  </BasePagination>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const pageQuery = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})
const formatter = new Intl.NumberFormat('en-US', { style: 'decimal' })
</script>
```

#preview
:demo-pagination-slots
::
