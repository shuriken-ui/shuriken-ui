<script setup lang="ts">
import { joinURL } from 'ufo'

const route = useRoute()

const { data: page } = await useAsyncData('surround', () => {
  return queryCollectionItemSurroundings('content', route.path)
}, {
  watch: [() => route.path],
})

const appConfig = useAppConfig()
const editUrl = computed(() => joinURL('https://github.com', appConfig.github.org, appConfig.github.repo, 'edit', appConfig.github.branch, page.value?._source, page.value?._file))
</script>

<template>
  <div class="w-full max-w-3xl mx-auto xl:px-6">
    <div class="flex flex-col md:flex-row justify-between gap-y-6 gap-x-6">
      <NuxtLink
        v-if="page?.[0]"
        :to="page[0].path"
        class="group/link inline-flex items-center gap-2 hover:bg-muted-100 dark:hover:bg-muted-800 px-3 py-2 rounded-xl text-start transition-colors duration-300"
      >
        <Icon
          name="lucide:chevron-left"
          class="block size-4 group-hover/link:-translate-x-1 transition-transform duration-300"
        />
        <p class="font-sans text-sm font-medium text-muted-900 dark:text-white group-hover/link:text-muted-900 dark:group-hover/link:text-muted-100 transition-colors duration-300 line-clamp-2">
          {{ page[0].title }}
        </p>
      </NuxtLink>
      <span v-else />

      <NuxtLink
        v-if="page?.[1]"
        :to="page[1].path"
        class="group/link inline-flex items-center justify-end gap-2 hover:bg-muted-100 dark:hover:bg-muted-800 px-3 py-2 rounded-xl text-end transition-colors duration-300"
      >
        <p class="font-sans text-sm font-medium text-muted-900 dark:text-white group-hover/link:text-muted-900 dark:group-hover/link:text-muted-100 transition-colors duration-300 line-clamp-2">
          {{ page[1].title }}
        </p>
        <Icon
          name="lucide:chevron-right"
          class="block size-4 group-hover/link:translate-x-1 transition-transform duration-300"
        />
      </NuxtLink>
      <span v-else />
    </div>
    <hr class="my-8 border-t border-muted-200 dark:border-muted-800">
    <div>
      <NuxtLink
        :to="editUrl"
        target="_blank"
        rel="noopener"
        class="text-sm tracking-wide text-muted-400 underline-offset-4 hover:text-muted-900 hover:underline dark:hover:text-muted-100"
      >
        Edit this page on Github
      </NuxtLink>
    </div>
  </div>
</template>
