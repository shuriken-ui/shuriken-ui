---
title: 'Placeload'
description: 'A smart and versatile element for loading states.'
layout: 'default'
---

# Placeload

`<BasePlaceload />` · A smart and versatile element for loading states.

::component-header{category="components/base" fileName="BasePlaceload.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BasePlaceload class="h-4 w-full rounded" />
  <BasePlaceload class="h-4 w-3/4 rounded" />
</template>
```

#preview
:demo-placeload-base
::

## Features

:checklist{:items='["Supports animation", "Fully customizable", "Easy compositions"]'}

## Anatomy
This component is self closing and can be used to create a loading placeholder.

::code-group

```vue [Comp.vue]
<template>
  <BasePlaceload />
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BasePlaceload"}

## Examples

### Shapes

Use the placeload combined with utility classes to create different shapes.

::code-group

```vue [Comp.vue]
<template>
  <BasePlaceload class="h-10 w-10 rounded" />
  <BasePlaceload class="h-12 w-12 rounded-xl" />
  <BasePlaceload class="h-16 w-16 rounded-full" />
</template>
```

#preview
:demo-placeload-shape
::

### Composition

Use the placeload combined with other components to create original compositions.

::code-group

```vue [Comp.vue]
<template>
  <BaseCard rounded="md" class="p-4 md:p-6">
    <div class="flex items-center gap-3">
      <BasePlaceload class="h-10 w-10 rounded-full" />
      <div class="grow space-y-2">
        <BasePlaceload class="h-3 w-full rounded" />
        <BasePlaceload class="h-3 w-[85%] rounded" />
      </div>
    </div>
  </BaseCard>
</template>
```

#preview
:demo-placeload-composition
::
