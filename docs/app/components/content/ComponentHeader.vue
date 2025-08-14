<script setup lang="ts">
import { joinURL } from 'ufo'

const props = withDefaults(defineProps<{
  fileName: string
  category?: string
  framework?: 'nuxt' | 'react' | 'tailwind'
  storybook?: string
}>(), {
  category: 'base',
  framework: 'nuxt',
  storybook: undefined,
})

const appConfig = useAppConfig()
const githubUrl = computed(() => {
  return joinURL('https://github.com', appConfig.github.org, props.framework)
})

const issueUrl = computed(() => {
  return joinURL(githubUrl.value, 'issues')
})
const sourceUrl = computed(() => {
  return joinURL(githubUrl.value, 'tree', appConfig.github.branch, props.category, props.fileName)
})
</script>

<template>
  <div class="pb-6">
    <div class="flex flex-wrap gap-4 md:flex-nowrap md:items-center">
      <NuxtLink
        :to="sourceUrl"
        target="_blank"
        rel="noopener"
        class="group/link"
      >
        <BaseTag
          rounded="full"
          class="inline-flex w-full items-center gap-1 group-hover/link:text-muted-900 dark:group-hover/link:text-white"
        >
          <Icon
            name="fa6-brands:github"
            class="h-3 w-3"
          />
          <span>View Source</span>
          <Icon
            name="lucide:external-link"
            class="h-3 w-3"
          />
        </BaseTag>
      </NuxtLink>
      <NuxtLink
        :to="issueUrl"
        target="_blank"
        rel="noopener"
        class="group/link"
      >
        <BaseTag
          rounded="full"
          class="inline-flex w-full items-center gap-1 group-hover/link:text-muted-900 dark:group-hover/link:text-white"
        >
          <Icon
            name="fa6-brands:github"
            class="h-3 w-3"
          />
          <span>Open Issue</span>
          <Icon
            name="lucide:external-link"
            class="h-3 w-3"
          />
        </BaseTag>
      </NuxtLink>
    </div>
  </div>
</template>
