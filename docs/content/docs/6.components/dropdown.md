---
title: 'Dropdown'
description: 'An options or a contextual menu.'
layout: 'default'
---

# Dropdown

`<BaseDropdown />` · An options or a contextual menu.

::component-header{category="components/base" fileName="BaseDropdown.vue" }
::

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown variant="default" label="Default dropdown">
    <BaseDropdownItem>Leads</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Reports</BaseDropdownItem>
    <BaseDropdownItem>
      Settings
      <template #end>
        <BaseKbd size="sm">
          <span class="text-xs font-mono">⌘</span>
        </BaseKbd>
        <BaseKbd size="sm">
          <span class="text-xs font-mono px-0.5">P</span>
        </BaseKbd>
      </template>
    </BaseDropdownItem>
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-base
::

## Features

:checklist{:items='["Can be controlled or uncontrolled", "Supports submenus with configurable reading direction", "Supports items, labels, groups of items", "Supports checkable items", "Full keyboard navigation", "Handles accessibility"]'}

## Anatomy
This component has optional sub components that you can use to create your dropdown menu. You can customize the dropdown's visual style by using the available props.

::code-group

```vue [Comp.vue]
<template>
  <BaseDropdown>
    <BaseDropdownLabel>
      <!-- Label goes here -->
    </BaseDropdownLabel>
    <!-- Sub dropdown -->
    <BaseDropdownSub>
      <template #title>
        <!-- Sub dropdown title goes here -->
      </template>
      <BaseDropdownLabel>
        <!-- Sub dropdown label goes here -->
      </BaseDropdownLabel>
      <BaseDropdownItem>
        <!-- Sub dropdown item content goes here -->
      </BaseDropdownItem>
    </BaseDropdownSub>
    <!-- Separator item -->
    <BaseDropdownSeparator />
    <BaseDropdownItem>
      <!-- Item content goes here -->
    </BaseDropdownItem>
    <!-- Checkbox item -->
    <BaseDropdownCheckbox />
    <!-- Radio group -->
    <BaseDropdownRadioGroup>
      <!-- Radio item -->
      <BaseDropdownRadio />
    </BaseDropdownRadioGroup>
    <!-- Menu top arrow -->
    <BaseDropdownArrow />
  </BaseDropdown>
</template>
```

::

## API Reference

This component has props that you can use to modify its visual style.

### Dropdown

:component-meta{name="BaseDropdown"}

### Dropdown item

:component-meta{name="BaseDropdownItem"}

### Dropdown sub

:component-meta{name="BaseDropdownSub"}

### Checkbox item

:component-meta{name="BaseDropdownCheckbox"}

### Radio group

:component-meta{name="BaseDropdownRadioGroup"}

### Radio item

:component-meta{name="BaseDropdownRadioItem"}

### Dropdown separator

:component-meta{name="BaseDropdownSeparator"}

## Customization

Your can override the component default CSS variables in your `main.css` file.

::code-group

```css [main.css]
@theme {
  /* Default dropdown menu variables */
  --color-portal-default-bg: var(--color-white);
  --color-portal-default-border: var(--color-muted-300);
  --color-portal-default-item-bg-active: var(--color-muted-100);
  --color-portal-default-item-text: var(--color-input-default-text);
  --color-portal-default-item-text-active: var(--color-primary-base);

  /* Muted dropdown menu variables */
  --color-portal-muted-bg: var(--color-muted-50);
  --color-portal-muted-border: var(--color-muted-300);
  --color-portal-muted-item-bg-active: var(--color-muted-200);
  --color-portal-muted-item-text: var(--color-input-muted-text);
  --color-portal-muted-item-text-active: var(--color-primary-base);
}
```

::

## Examples

### Variants

Use the `variant` prop to control the colors of the dropdown menu.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown variant="primary" label="Primary dropdown">
    <BaseDropdownItem>Leads</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Reports</BaseDropdownItem>
    <BaseDropdownItem>
      Settings
      <template #end>
        <BaseKbd size="sm">
          <span class="text-xs font-mono">⌘</span>
        </BaseKbd>
        <BaseKbd size="sm">
          <span class="text-xs font-mono px-0.5">P</span>
        </BaseKbd>
      </template>
    </BaseDropdownItem>
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-variants
::

### Nested elements

You can nest other dropdowns inside a dropdown item, as well as checkboxes and radio buttons.

::code-group{expandable}

```vue [Comp.vue]
<script setup lang="ts">
const checkedOne = ref(false)
const checkedTwo = ref(false)
const selection = ref('first')
</script>

<template>
  <div class="flex w-full justify-start gap-8">
    <BaseDropdown label="Inner Submenus">
      <BaseDropdownLabel>Label</BaseDropdownLabel>
      <BaseDropdownSub>
        <template #title>
          Profile
        </template>
        <BaseDropdownLabel>Label</BaseDropdownLabel>
        <BaseDropdownItem>Profile</BaseDropdownItem>
        <BaseDropdownItem>General</BaseDropdownItem>
        <BaseDropdownItem>Billing</BaseDropdownItem>
        <BaseDropdownItem>Support</BaseDropdownItem>
      </BaseDropdownSub>
      <BaseDropdownItem>Projects</BaseDropdownItem>
      <BaseDropdownItem>Team</BaseDropdownItem>
      <BaseDropdownSub>
        <template #title>
          Settings
        </template>
        <BaseDropdownLabel>Label</BaseDropdownLabel>
        <BaseDropdownItem>General</BaseDropdownItem>
        <BaseDropdownItem>Users</BaseDropdownItem>
        <BaseDropdownItem>Permissions</BaseDropdownItem>
        <BaseDropdownItem>Security</BaseDropdownItem>
      </BaseDropdownSub>
    </BaseDropdown>

    <BaseDropdown label="Radio">
      <BaseDropdownRadioGroup v-model="selection">
        <BaseDropdownRadioItem value="first">
          First
          <template #end>
            <div class="flex gap-0.5">
              <BaseKbd variant="default" size="sm">
                alt
              </BaseKbd>
              <BaseKbd variant="default" size="sm">
                1
              </BaseKbd>
            </div>
          </template>
        </BaseDropdownRadioItem>
        <BaseDropdownRadioItem value="second">
          Second
          <template #end>
            <div class="flex gap-0.5">
              <BaseKbd variant="default" size="sm">
                alt
              </BaseKbd>
              <BaseKbd variant="default" size="sm">
                2
              </BaseKbd>
            </div>
          </template>
        </BaseDropdownRadioItem>
        <BaseDropdownRadioItem value="third">
          Third
          <template #end>
            <div class="flex gap-0.5">
              <BaseKbd variant="default" size="sm">
                alt
              </BaseKbd>
              <BaseKbd variant="default" size="sm">
                3
              </BaseKbd>
            </div>
          </template>
        </BaseDropdownRadioItem>
      </BaseDropdownRadioGroup>
    </BaseDropdown>

    <BaseDropdown label="Checkbox">
      <BaseDropdownCheckbox
        v-model="checkedOne"
        title="Profile"
      />
      <BaseDropdownCheckbox
        title="Projects"
        disabled
      />
      <BaseDropdownCheckbox
        v-model="checkedTwo"
        title="Team"
      />
    </BaseDropdown>
  </div>
</template>
```

#preview
:demo-dropdown-nested
::

### Spacing

Use the spacing and arrow options to control the dropdown's position.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown
    label="Default spacing"
  >
    <BaseDropdownItem>Profile</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Settings</BaseDropdownItem>
  </BaseDropdown>

  <BaseDropdown
    label="With top arrow"
    :bindings="{ content: { sideOffset: 0 } }"
  >
    <BaseDropdownItem>Profile</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Settings</BaseDropdownItem>
    <BaseDropdownArrow />
  </BaseDropdown>

  <BaseDropdown
    label="With more spacing"
    :bindings="{ content: { sideOffset: 10 } }"
  >
    <BaseDropdownItem>Profile</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Settings</BaseDropdownItem>
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-spacing
::

### Label and composition

Use the `DropdownLabel ` component to add a label to the dropdown menu. Mix and match with different options to create a unique dropdown.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown header-label="My Team" variant="button" label="Dropdown" orientation="start">
    <BaseDropdownItem to="#" title="Lana Jensen" text="Software Engineer" color="default" rounded="sm">
      <template #start>
        <BaseAvatar src="/img/avatars/4.svg" size="xs" />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem to="#" title="Shawn Miller" text="Product Manager" color="default" rounded="sm">
      <template #start>
        <BaseAvatar src="/img/avatars/3.svg" size="xs" />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem to="#" title="John Marynski" text="Sales Manager" color="default" rounded="sm">
      <template #start>
        <BaseAvatar src="/img/avatars/18.svg" size="xs" />
      </template>
    </BaseDropdownItem>
    <BaseDropdownSeparator />
    <BaseDropdownItem to="#" title="Garry Porter" text="CEO - Founder" color="default" rounded="sm">
      <template #start>
        <BaseAvatar src="/img/avatars/6.svg" size="xs" />
      </template>
    </BaseDropdownItem>
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-header
::

### Button slot

Use the `#button` slot to customize the dropdown button.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown
    :bindings="{
      content: {
        sideOffset: 0,
      },
    }"
  >
    <template #button>
      <BaseButton
        variant="primary"
        size="icon-sm"
        rounded="full"
        class="group"
      >
        <Icon name="ph:plus" class="block text-base transition-transform group-data-[state=open]:rotate-45" />
      </BaseButton>
    </template>

    <BaseDropdownItem>Profile</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Settings</BaseDropdownItem>

    <BaseDropdownArrow :width="16" :height="8" />
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-button-slot
::

### Content: align

Use the `:bindings` prop to control the dropdown's content alignment.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown
    label="End align" :bindings="{
      content: {
        align: 'end',
        sideOffset: 5,
      },
    }"
  >
    <BaseDropdownItem>Profile</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Settings</BaseDropdownItem>
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-align
::

### Content: side

Use the `:bindings` prop to control the popping `side` of the dropdown menu.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown
    label="End align" :bindings="{
      content: {
        align: 'end',
        sideOffset: 5,
      },
    }"
  >
    <BaseDropdownItem>Profile</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Settings</BaseDropdownItem>
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-side
::

### Icon

Use the `#start` slot to insert an icon inside a dropdown item.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown label="Dropdown" rounded="md">
    <BaseDropdownItem
      title="Profile"
      text="View your profile"
      class="w-72"
    >
      <template #start>
        <Icon name="solar:user-rounded-linear" class="me-2 block text-[1.15rem]" />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      title="Projects"
      text="View your projects"
    >
      <template #start>
        <Icon name="solar:case-linear" class="me-2 block text-[1.15rem]" />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      title="Team"
      text="Manage your team"
    >
      <template #start>
        <Icon name="solar:widget-3-linear" class="me-2 block text-[1.15rem]" />
      </template>
    </BaseDropdownItem>
    <BaseDropdownSeparator />
    <BaseDropdownItem
      title="Settings"
      text="Set your preferences"
    >
      <template #start>
        <Icon name="solar:settings-linear" class="me-2 block text-[1.15rem]" />
      </template>
    </BaseDropdownItem>
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-icon
::

### Avatar

Use the `#start` slot to insert an avatar inside a dropdown item.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown label="Dropdown" rounded="md">
    <BaseDropdownItem
      title="Lana Jensen"
      text="Software Engineer"
      class="w-80"
    >
      <template #start>
        <BaseAvatar
          src="/img/people/36.jpg"
          size="xs"
        />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      title="Shawn Miller"
      text="Product Manager"
    >
      <template #start>
        <BaseAvatar
          src="/img/people/18.jpg"
          size="xs"
        />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      title="John Marynski"
      text="Sales Manager"
    >
      <template #start>
        <BaseAvatar
          src="/img/people/16.jpg"
          size="xs"
        />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      title="Garry Porter"
      text="CEO - Founder"
    >
      <template #start>
        <BaseAvatar
          src="/img/people/6.jpg"
          size="xs"
        />
      </template>
    </BaseDropdownItem>
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-avatar
::

### Portal mode disabled

By disabling the `portal` mode, the dropdown will be rendered inside the component.

::code-group{expandable}

```vue [Comp.vue]
<template>
  <BaseDropdown
    label="Fixed position" :bindings="{
      portal: {
        disabled: true,
      },
      content: {
        positionStrategy: 'fixed',
      },
    }"
  >
    <BaseDropdownItem>Profile</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Settings</BaseDropdownItem>
  </BaseDropdown>
  <BaseDropdown
    label="Absolute position" :bindings="{
      portal: {
        disabled: true,
      },
      content: {
        positionStrategy: 'absolute',
      },
    }"
  >
    <BaseDropdownItem>Profile</BaseDropdownItem>
    <BaseDropdownItem>Projects</BaseDropdownItem>
    <BaseDropdownItem>Team</BaseDropdownItem>
    <BaseDropdownItem>Settings</BaseDropdownItem>
  </BaseDropdown>
</template>
```

#preview
:demo-dropdown-portal-disabled
::
