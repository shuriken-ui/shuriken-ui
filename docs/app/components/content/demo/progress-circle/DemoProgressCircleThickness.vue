<template>
  <div class="max-w-sm p-4">
    <div class="max-w-xs space-y-4">
      <div class="flex items-end gap-2">
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="45"
          :thickness="2"
          :model-value="65"
          variant="primary"
        />
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="55"
          :thickness="2"
          :model-value="65"
          variant="primary"
        />
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="65"
          :thickness="2"
          :model-value="65"
          variant="primary"
        />
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="75"
          :thickness="2"
          :model-value="65"
          variant="primary"
        />
      </div>
    </div>
  </div>
</template>
