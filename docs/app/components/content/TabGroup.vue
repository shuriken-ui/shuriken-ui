<script lang="ts">
import { TabGroupHeader } from '#components'

export default defineComponent({
  props: {
    labels: {
      type: Array,
      default: () => [],
    },
    expandable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const expanded = ref(false)
    const activeTabIndex = ref(0)
    provide('code-group-context', true)

    const isTag = (slot: any, tag: string) => {
      return slot.type && slot.type.tag && slot.type.tag === tag
    }

    return () => {
      const previewSlot = context.slots?.preview?.()
      const slots = context.slots?.default?.() || []
      const tabs = slots?.map?.((slot, index) => {
        return {
          filename: slot?.props?.filename || props.labels[index] || `${index}`,
          language: slot?.props?.language,
          code: slot?.props?.code,
          active: slot?.props?.active || false,
          component: slot,
        }
      })

      return h(
        'div',
        {
          class: 'py-6 relative z-0',
        },
        [
          h(
            'div',
            {
              class: 'relative group/code w-full overflow-hidden',
            },
            [
              h(
                'div',
                {
                  class: {
                    'flex flex-col': true,
                    'first-tab': activeTabIndex.value === 0,
                  },
                },
                [
                  previewSlot,
                  h(TabGroupHeader, {
                    'ref': 'tabs-header',
                    'activeTabIndex': activeTabIndex.value,
                    tabs,
                    'hasPreview': !!previewSlot,
                    'onUpdate:activeTabIndex': (value: number) => (activeTabIndex.value = value),
                  }),
                  h(
                    'div',
                    {
                      class: [
                        'relative flex gap-2 overflow-y-hidden',
                        !props.expandable ? 'overflow-x-auto' : '',
                        props.expandable && !expanded.value ? 'max-h-[220px] overflow-x-hidden' : '',
                        props.expandable && expanded.value ? 'max-h-full overflow-x-auto' : '',
                      ],
                      text: activeTabIndex.value,
                    },
                    [
                      h(
                        'div',
                        {
                          class: ['absolute -bottom-4 start-0 end-0 z-[2] w-full h-20 flex items-center justify-center ', props.expandable ? '' : 'hidden'],
                        },
                        [
                          h('div', {
                            class: ['relative z-[2] h-full w-full bg-muted-50 dark:bg-muted-950 blur-xl'],
                          }),
                          h(
                            'button',
                            {
                              type: 'button',
                              class: [
                                'absolute bottom-8 start-0 end-0 mx-auto w-32 z-[3] py-1 px-4 flex items-center justify-center text-sm text-muted-500 hover:text-muted-800 dark:text-muted-400 dark:hover:text-muted-100 rounded-full border border-muted-300 dark:border-muted-700 hover:border-muted-200 dark:hover:border-muted-600 bg-white dark:bg-muted-800 transition-colors duration-300',
                              ],
                              onClick: () => {
                                expanded.value = !expanded.value
                              },
                            },
                            [
                              h(
                                'span',
                                expanded.value ? 'Collapse code' : 'Expand code',
                              ),
                            ],
                          ),
                        ],
                      ),
                      h(
                        'div',
                        {
                          class: [
                            ' text-sm',
                            props.expandable ? 'pt-4 pb-16' : 'py-4',
                          ],
                        },
                        // Map slots to content children
                        slots.map((slot, index) =>
                          h(
                            'div',
                            {
                              // Current slot is displayed, others are hidden
                              style: {
                                display: index === activeTabIndex.value ? 'block' : 'none',
                              },
                            },
                            // Display direct children if not a ```code``` block
                            [
                              isTag(slot, 'div') || isTag(slot, 'div')
                                ? slot
                                : h(
                                    'div',
                                    {
                                      class: {
                                        'preview-canvas': true,
                                      },
                                    },
                                    [(slot?.children as any)?.default?.() || slot.children],
                                  ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ],
          ),
        ],
      )
    }
  },
})
</script>
