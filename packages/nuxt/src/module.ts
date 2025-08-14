import { addComponentsDir, addImportsDir, addVitePlugin, createResolver, defineNuxtModule, hasNuxtModule, installModule } from '@nuxt/kit'
import tailwindcss from '@tailwindcss/vite'
import defu from 'defu'

export type * from './runtime/types'

export interface ModuleOptions {
  /**
   * Prefix for components
   * @default `Base`
   */
  prefix?: string
}

const defaultAppConfig = {
  icon: {
    sun: 'nui-icon:sun',
    moon: 'nui-icon:moon',
    screen: 'nui-icon:screen-duotone',
    spiner: 'nui-icon:spiner',
    required: 'lucide:asterisk',
    ellipsis: 'lucide:ellipsis',
    alert: 'lucide:alert-octagon',
    close: 'lucide:x',
    check: 'lucide:check',
    plus: 'lucide:plus',
    minus: 'lucide:minus',
    chevronUp: 'lucide:chevron-up',
    chevronDown: 'lucide:chevron-down',
    chevronLeft: 'lucide:chevron-left',
    chevronFirst: 'lucide:chevron-first',
    chevronRight: 'lucide:chevron-right',
    chevronLast: 'lucide:chevron-last',
  },
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'shuriken-ui',
    configKey: 'nui',
    compatibility: {
      nuxt: '>=3.14.0',
    },
  },
  defaults: {
    prefix: 'Base',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.appConfig.nui = defu(nuxt.options.appConfig.nui || {}, defaultAppConfig)

    addVitePlugin(tailwindcss())

    async function registerModule(name: string, options: Record<string, any>): Promise<void> {
      if (!hasNuxtModule(name)) {
        await installModule(name, options)
      }
      else {
        (nuxt.options as any)[name] = defu((nuxt.options as any)[name], options)
      }
    }

    await registerModule('@nuxtjs/color-mode', {
      classSuffix: '',
    })
    await registerModule('@nuxt/icon', {
      cssLayer: 'components',
      customCollections: [
        {
          prefix: 'nui-icon',
          dir: resolve('./runtime/icons'),
        },
      ],
    })

    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false,
    })

    addImportsDir(resolve('./runtime/composables'))

    // Exclude packages that are available in ESM format
    nuxt.options.vite.optimizeDeps ||= {}
    nuxt.options.vite.optimizeDeps.exclude ||= []
    nuxt.options.vite.optimizeDeps.exclude.push(
      'reka-ui',
      'tailwind-merge',
    )
  },
})
