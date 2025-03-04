---
title: 'Icon box'
description: 'A versatile icon container.'
layout: 'default'
---

# Icon box

`<BaseIconBox />` · A versatile icon container.

::component-header{category="components/base" fileName="BaseIconBox.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseIconBox>
    <Icon name="solar:home-smile-angle-linear" class="size-6" />
  </BaseIconBox>
</template>
```

#preview
:demo-icon-box-base
::

## Features

:checklist{:items='["Simple to use", "Fully customizable", "Masks and sizes support"]'}

## Anatomy
This component any content as a child, though it is preferable to use it as an icon container. You can customize the icon box's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseIconBox>
    <!-- Icon here -->
  </BaseIconBox>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseIconBox"}

## Examples

### Size

Use the `size` prop to control the size of the icon box.

::code-group

```vue [Comp.vue]
<template>
  <BaseIconBox
    size="md"
  >
    <Icon name="solar:home-smile-angle-linear" class="size-5" />
  </BaseIconBox>
</template>
```

#preview
:demo-icon-box-size
::

### Border radius

Use the `rounded` prop to control the border radius of the icon box.

::code-group

```vue [Comp.vue]
<template>
  <BaseIconBox
    rounded="md"
  >
    <Icon name="solar:home-smile-angle-linear" class="size-5" />
  </BaseIconBox>
</template>
```

#preview
:demo-icon-box-radius
::

### Variant

Use the `variant` prop to control the visual style of the icon box.

::code-group

```vue [Comp.vue]
<template>
  <BaseIconBox
    variant="default"
  >
    <Icon name="solar:home-smile-angle-linear" class="size-5" />
  </BaseIconBox>
</template>
```

#preview
:demo-icon-box-variant
::

### Solid color

Use the `none` variant to create your own set of solid color icon boxes.

::code-group

```vue [Comp.vue]
<template>
  <BaseIconBox
    variant="none"
    class="bg-green-500 text-white"
  >
    <Icon name="solar:home-smile-angle-linear" class="size-5" />
  </BaseIconBox>
</template>
```

#preview
:demo-icon-box-solid
::

### Pastel color

Use the `pastel` variant and the `color` prop to change the color of the icon box.

::code-group

```vue [Comp.vue]
<template>
  <BaseIconBox
    variant="pastel"
    color="primary"
  >
    <Icon name="ph:game-controller-duotone" class="size-5" />
  </BaseIconBox>
</template>
```

#preview
:demo-icon-box-pastel
::

### Outline color

Use the `outline` variant and the `color` prop to change the color of the icon box.

::code-group

```vue [Comp.vue]
<template>
  <BaseIconBox
    variant="outline"
    color="primary"
  >
    <Icon name="ph:game-controller-duotone" class="size-5" />
  </BaseIconBox>
</template>
```

#preview
:demo-icon-box-outline
::

### Mask

Use the `mask` prop combined to the `rounded` prop set to `none` to display an svg mask.

::code-group

```vue [Comp.vue]
<template>
  <BaseIconBox
    size="md"
    rounded="none"
    mask="blob"
    variant="pastel"
    color="success"
  >
    <Icon name="ph:leaf-duotone" class="size-5" />
  </BaseIconBox>
</template>
```

#preview
:demo-icon-box-mask
::
