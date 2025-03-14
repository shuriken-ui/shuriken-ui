<script setup lang="ts">
import { joinURL } from 'ufo'

const { data: versions } = await useFetch('/api/versions')

const searchOpen = useState('search-open', () => false)

const { isMobileOpen } = useLayoutDefaultContext()
const { y } = useWindowScroll()
const appConfig = useAppConfig()
</script>

<template>
  <header
    class="sticky start-0 top-0 z-40 w-full border-b border-muted-200 dark:border-muted-800/80 px-4 transition-all duration-300 md:px-6"
    :class="[
      y > 60 ? 'bg-white/95 dark:bg-muted-950' : '',
      isMobileOpen ? 'bg-white/95! dark:bg-muted-950!' : '',
    ]"
  >
    <div class="mx-auto max-w-[1536px]">
      <div class="flex h-14 items-center gap-x-3">
        <!-- Menu -->
        <div class="lg:hidden">
          <BaseButton
            size="icon-sm"
            variant="ghost"
            rounded="md"
            @click="isMobileOpen = !isMobileOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="!size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </BaseButton>
        </div>
        <!-- Logo -->
        <div class="shrink-0 lg:me-12 flex items-center gap-x-2">
          <NuxtLink
            to="/"
            class="block"
          >
            <LogoText
              id="logo-text-navbar"
              class="h-7 w-auto hidden md:block transition-colors duration-300"
              :class="[
                y > 60 ? 'text-muted-950 dark:text-white' : 'text-muted-950/80 dark:text-muted-200',
                isMobileOpen ? 'text-muted-950! dark:text-white!' : '']"
            />
            <Logo
              id="logo-navbar"
              class="size-7 block md:hidden w-auto transition-colors duration-300"
              :class="[
                y > 60 ? 'text-muted-950 dark:text-white' : 'text-muted-950/80 dark:text-muted-200',
                isMobileOpen ? 'text-muted-950! dark:text-white!' : '']"
            />
          </NuxtLink>
          <BaseTag v-if="versions" class="text-muted-700! dark:text-muted-100!">
            v{{ versions[0]?.version }}
          </BaseTag>
        </div>
        <!-- Links -->
        <div class="hidden lg:flex items-center gap-x-8">
          <NuxtLink
            to="/docs"
            class="text-sm text-muted-900 dark:text-white"
          >
            Docs
          </NuxtLink>
          <NuxtLink
            to="/docs/components"
            class="text-sm text-muted-900 dark:text-white"
          >
            Components
          </NuxtLink>
          <NuxtLink
            to="/docs/utilities"
            class="text-sm text-muted-900 dark:text-white"
          >
            Utilities
          </NuxtLink>
          <NuxtLink
            to="/docs/snippets"
            class="text-sm text-muted-900 dark:text-white"
          >
            Snippets
          </NuxtLink>
        </div>
        <!-- Actions -->
        <div class="ms-auto flex items-center justify-end gap-x-3">
          <div
            role="button"
            class="cursor-pointer h-8 w-48 hidden md:flex items-center justify-between bg-muted-50 dark:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:ring-muted-300 dark:hover:ring-muted-700 gap-2 ps-3 pe-1 py-1 rounded-md ring-1 ring-muted-200 dark:ring-muted-800 transition-colors duration-300"
            @click="searchOpen = !searchOpen"
          >
            <div class="pointer-events-none">
              <span class="font-sans text-sm">
                Search docs...
              </span>
            </div>
            <div class="flex gap-1">
              <BaseKbd
                size="sm"
                variant="default"
                class="!font-semibold h-6!"
              >
                Ctrl
              </BaseKbd>
              <BaseKbd
                size="sm"
                variant="default"
                class="!px-2 !font-semibold h-6!"
              >
                K
              </BaseKbd>
            </div>
          </div>
          <BaseButton
            size="icon-sm"
            variant="ghost"
            rounded="md"
            class="md:hidden"
            @click="searchOpen = !searchOpen"
          >
            <Icon
              name="lucide:search"
              class="size-4 text-muted-700 dark:text-muted-300"
            />
          </BaseButton>
          <BaseButton
            size="icon-sm"
            variant="ghost"
            rounded="md"
            :to="joinURL('https://github.com', appConfig.github.org)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              name="fa6-brands:github"
              class="size-5 text-sm"
            />
          </BaseButton>
          <div class="scale-75 -ms-2">
            <BaseThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
