<script setup lang="ts">
definePageMeta({
  title: 'BaseThemeToggle',
  icon: 'system-uicons:toggles',
  description: 'Theme toggle component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseThemeToggle">
      <NuiPreview
        title="Toggle"
        description="Theme toggle component variants"
      >
        <div class="flex items-center gap-10">
          <BaseThemeToggle variant="default" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Switch"
        description="Theme switch component variants"
      >
        <div class="flex items-center gap-10">
          <BaseThemeSwitch variant="default" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="System"
        description="Theme system component variants"
      >
        <div class="flex items-center gap-10">
          <BaseThemeSystem variant="default" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Disable transitions"
        description="Disable transition when toggling between light and dark mode"
      >
        <div class="flex items-center gap-10">
          <BaseThemeToggle disable-transitions />
          <BaseThemeSwitch disable-transitions />
          <BaseThemeSystem disable-transitions />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
