---
title: 'Button'
description: 'A classic and versatile interaction.'
layout: 'default'
---

# Button

`<BaseButton />` · A classic and versatile interaction.

::component-header{category="components/base" fileName="BaseButton.vue" }
::

::code-group

```vue [Comp.vue]
<template>
  <BaseButton size="md">
    Button
  </BaseButton>
</template>
```

#preview
:demo-button-base
::

## Features

:checklist{:items='["Fully accessible", "Can become a link", "Supports disabled and loading states"]'}

## Anatomy
This component accepts any content as a child. You can customize the button's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseButton>
    <!-- Content goes here -->
  </BaseButton>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

:component-meta{name="BaseButton"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Primary button variables */
  --color-primary-invert: var(--color-white);
  --color-primary-base: var(--color-primary-500);
  --color-primary-heavy: var(--color-primary-600);
  --color-primary-light: var(--color-primary-400);

  /* Destructive button variables */
  --color-destrutive-invert: var(--color-white);
  --color-destrutive-base: var(--color-destrutive-500);
  --color-destrutive-heavy: var(--color-destrutive-600);
  --color-destrutive-light: var(--color-destrutive-400);
}
```

::

## Examples

### Link

Use the `to` prop to assign an url an turn the button to a link.

::code-group

```vue [Comp.vue]
<template>
  <BaseButton to="https://google.com" size="md">
    Google.com
  </BaseButton>
</template>
```

#preview
:demo-button-link
::

### Size

Use the `size` prop to change the size of the button.

::code-group

```vue [Comp.vue]
<template>
  <BaseButton size="sm" rounded="md">
    Button
  </BaseButton>
  <BaseButton size="md" rounded="md">
    Button
  </BaseButton>
  <BaseButton size="lg" rounded="md">
    Button
  </BaseButton>
  <BaseButton size="xl" rounded="md">
    Button
  </BaseButton>
</template>
```

#preview
:demo-button-size
::

### Badge

Use the `Chip` component to add a badge to the button. You can also use the `pulse` prop to make the badge pulse.

::code-group

```vue [Comp.vue]
<template>
  <BaseChip :offset="1" pulse>
    <BaseButton
      size="md"
      rounded="md"
      badge
      badge-pulse
    >
      Button
    </BaseButton>
  </BaseChip>
</template>
```

#preview
:demo-button-badge
::

### Variant

Use the `variant` prop to change the color and / or aspect of the button.

::code-group

```vue [Comp.vue]
<template>
  <BaseButton variant="default">
    Button
  </BaseButton>
  <BaseButton variant="muted">
    Button
  </BaseButton>
  <BaseButton variant="ghost">
    Button
  </BaseButton>
  <BaseButton variant="link">
    Button
  </BaseButton>
  <BaseButton variant="primary">
    Button
  </BaseButton>
  <BaseButton variant="dark">
    Button
  </BaseButton>
  <BaseButton variant="destructive">
    Button
  </BaseButton>
</template>
```

#preview
:demo-button-variant
::

### Icon

Insert an icon inside a button to enhace your interface.

::code-group

```vue [Comp.vue]
<template>
  <BaseButton variant="outline" color="success">
    <Icon name="cib:circleci" class="-ms-1 h-4 w-4" />
    <span>Button</span>
  </BaseButton>
</template>
```

#preview
:demo-button-icon
::

### Icon buttons

Write the button size as `icon-{size}` to make it an icon button.

::code-group

```vue [Comp.vue]
<template>
  <BaseButton size="icon-sm" rounded="md">
    <Icon name="solar:add-folder-linear" class="size-4" />
  </BaseButton>
  <BaseButton size="icon-md" rounded="md">
    <Icon name="solar:add-folder-linear" class="size-5" />
  </BaseButton>
  <BaseButton size="icon-lg" rounded="md">
    <Icon name="solar:add-folder-linear" class="size-6" />
  </BaseButton>
  <BaseButton size="icon-xl" rounded="md">
    <Icon name="solar:add-folder-linear" class="size-7" />
  </BaseButton>
</template>
```

#preview
:demo-button-icons
::

### Loading

Use the `loading` prop to set the button in loading state.

::code-group

```vue [Comp.vue]
<template>
  <BaseButton size="sm" rounded="md" loading>
    Button
  </BaseButton>
  <BaseButton size="md" rounded="md" loading>
    Button
  </BaseButton>
  <BaseButton size="lg" rounded="md" loading>
    Button
  </BaseButton>
  <BaseButton size="xl" rounded="md" loading>
    Button
  </BaseButton>
</template>
```

#preview
:demo-button-loading
::

### Disabled

Use the `disabled` prop to set the button in disabled state.

::code-group

```vue [Comp.vue]
<template>
  <BaseButton size="sm" rounded="md" disabled>
    Button
  </BaseButton>
  <BaseButton size="md" rounded="md" disabled>
    Button
  </BaseButton>
  <BaseButton size="lg" rounded="md" disabled>
    Button
  </BaseButton>
  <BaseButton size="xl" rounded="md" disabled>
    Button
  </BaseButton>
</template>
```

#preview
:demo-button-disabled
::
