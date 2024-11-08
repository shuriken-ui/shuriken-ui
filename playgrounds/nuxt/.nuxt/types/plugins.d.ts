// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+icon@1.7.0_magicast@0.3.5_rollup@4.24.4_vite@5.4.10_@types+node@22.9.0_lightningcss@1.2_n5ugtv7olaeh5wmas4qzc3yubu/node_modules/@nuxt/icon/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5_rollup@4.24.4/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5_rollup@4.24.4/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/app/plugins/dev-server-logs.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.14.159_@parcel+watcher@2.5.0_@types+node@22.9.0_ioredis@5.4.1_lightningcss@1.28.1_magi_rpjfbk7wfymmtnlfvsucqgib2q/node_modules/nuxt/dist/app/plugins/check-if-layout-used.js")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | '@nuxt/icon' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
