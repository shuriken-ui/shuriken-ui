<script setup lang="ts">
const suppliers = ref([
  {
    name: 'Agro Supply',
    email: 'contact@agrosupply.co',
    pending: 879.12,
    status: 'ontime',
  },
  {
    name: 'Farmers Market',
    email: 'clients@farmersmarket.com',
    pending: 1548.97,
    status: 'delayed',
  },
  {
    name: 'Green Fields',
    email: 'supply@greenfields.com',
    pending: 2546.21,
    status: 'ontime',
  },
  {
    name: 'Organic Food',
    email: 'contact@organicfood.com',
    pending: 753.46,
    status: 'delayed',
  },
  {
    name: 'Fresh Produce',
    email: 'buy@freshme.fd',
    pending: 1284.56,
    status: 'ontime',
  },
  {
    name: 'Healthy Harvest',
    email: 'contact@hh.co',
    pending: 692.79,
    status: 'canceled',
  },
])

const columns = ref([
  {
    key: 'email',
    label: 'Email',
    active: true,
  },
  {
    key: 'status',
    label: 'Status',
    active: true,
  },
  {
    key: 'pending',
    label: 'Pending',
    active: true,
  },
])

const activeColumns = ref(['name', 'email', 'pending'])
const filter = ref('')

// Filter by name and email
const filteredSuppliers = computed(() => {
  return suppliers.value.filter((supplier) => {
    return supplier.name.toLowerCase().includes(filter.value.toLowerCase())
      || supplier.email.toLowerCase().includes(filter.value.toLowerCase())
  })
})

// Pagination
const route = useRoute()
const router = useRouter()
const page = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})
</script>

<template>
  <BaseCard
    rounded="lg"
    class="p-6 shadow-sm shadow-muted-200 dark:shadow-muted-800"
  >
    <div class="mb-6 flex items-center">
      <div class="space-y-1">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Suppliers</span>
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-600 dark:text-muted-400"
        >
          <span>Manage your suppliers and orders</span>
        </BaseParagraph>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <!-- Filter -->
        <div class="w-full max-w-xs">
          <BasePrimitiveField class="w-full">
            <div class="relative">
              <div class="flex w-full">
                <BaseIconBox
                  variant="default"
                  size="xs"
                  class="rounded-e-none border-e-0!"
                >
                  <Icon
                    name="lucide:search"
                    class="size-4 text-muted-500"
                  />
                </BaseIconBox>
                <div class="grow relative">
                  <BasePrimitiveFieldController>
                    <BaseInput
                      v-model="filter"
                      size="sm"
                      class="border-s-none rounded-s-none"
                      placeholder="Filter suppliers..."
                    />
                  </BasePrimitiveFieldController>
                </div>
              </div>
              <div class="absolute z-0 end-4 top-3 pointer-events-none">
                <BasePrimitiveFieldLoadingIndicator />
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>
          </BasePrimitiveField>
        </div>
        <!-- Columns -->
        <div>
          <BasePrimitiveField>
            <div class="relative">
              <BasePrimitiveFieldController>
                <BaseSelect
                  v-model="activeColumns"
                  multiple
                  size="sm"
                  placeholder="Columns"
                >
                  <BaseSelectItem
                    v-for="column in columns"
                    :key="column.key"
                    :value="column.key"
                  >
                    {{ column.label }}
                  </BaseSelectItem>
                </BaseSelect>
              </BasePrimitiveFieldController>
              <div class="absolute z-0 end-10 top-3 pointer-events-none">
                <BasePrimitiveFieldLoadingIndicator />
                <BasePrimitiveFieldSuccessIndicator />
                <BasePrimitiveFieldErrorIndicator />
              </div>
            </div>
          </BasePrimitiveField>
        </div>
      </div>
      <!-- Table -->
      <div class="rounded-md border border-muted-300 dark:border-muted-800">
        <div class="relative w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <thead>
              <tr class="border-b border-muted-300 dark:border-muted-800">
                <th class="font-sans font-medium text-start text-muted-500 dark:text-muted-400 h-10 px-4 align-middle">
                  Name
                </th>
                <th
                  v-if="activeColumns.includes('email')"
                  class="font-sans font-medium text-start text-muted-500 dark:text-muted-400 h-10 px-4 align-middle"
                >
                  Email
                </th>
                <th
                  v-if="activeColumns.includes('status')"
                  class="font-sans font-medium text-start text-muted-500 dark:text-muted-400 h-10 px-4 align-middle"
                >
                  Status
                </th>
                <th
                  v-if="activeColumns.includes('pending')"
                  class="font-sans font-medium text-start text-muted-500 dark:text-muted-400 h-10 px-4 align-middle"
                >
                  Pending
                </th>
                <th class="font-sans font-medium text-start text-muted-500 dark:text-muted-400 h-10 px-4 align-middle" />
              </tr>
            </thead>
            <tbody v-if="filteredSuppliers.length === 0">
              <tr>
                <td
                  class="text-center px-4 align-middle"
                  colspan="100%"
                >
                  <div class="flex flex-col gap-3 py-20">
                    <div class="text-center">
                      <Icon
                        name="arcticons:anycubic"
                        class="size-10 mx-auto mb-4 text-muted-500"
                        aria-hidden="true"
                      />
                      <BaseHeading
                        as="h3"
                        size="md"
                        class="font-semibold text-muted-900 dark:text-white"
                      >
                        No results found
                      </BaseHeading>
                      <BaseParagraph
                        size="sm"
                        class="text-muted-600 dark:text-muted-400 max-w-xs mx-auto"
                      >
                        Try adjusting your search or filter to find what you're looking for.
                      </BaseParagraph>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr
                v-for="supplier in filteredSuppliers"
                :key="supplier.name"
                class="border-t first:border-t-none border-muted-300 dark:border-muted-800"
              >
                <td class="text-start h-11 px-4 align-middle">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-900 dark:text-muted-100 font-medium"
                  >
                    {{ supplier.name }}
                  </BaseParagraph>
                </td>
                <td
                  v-if="activeColumns.includes('email')"
                  class="text-start h-11 px-4 align-middle"
                >
                  <BaseParagraph
                    size="xs"
                    class="text-muted-700 dark:text-muted-400 font-medium"
                  >
                    <a
                      :href="`mailto:${supplier.email}`"
                      class="hover:text-muted-900 hover:underline underline-offset-4"
                    >{{ supplier.email }}</a>
                  </BaseParagraph>
                </td>
                <td
                  v-if="activeColumns.includes('status')"
                  class="text-start h-11 px-4 align-middle"
                >
                  <div class="inline-block relative">
                    <BaseChip
                      size="xs"
                      color="custom"
                      :class="[
                        supplier.status === 'ontime' ? 'text-muted-900 dark:text-white' : 'text-transparent',
                      ]"
                      :pulse="supplier.status === 'ontime'"
                      :offset="2"
                    >
                      <BaseTag rounded="full">
                        {{ supplier.status }}
                      </BaseTag>
                    </BaseChip>
                  </div>
                </td>
                <td
                  v-if="activeColumns.includes('pending')"
                  class="text-start h-11 px-4 align-middle"
                >
                  <BaseParagraph
                    size="sm"
                    class="text-muted-900 font-medium dark:text-muted-100"
                  >
                    ${{ supplier.pending.toFixed(2) }}
                  </BaseParagraph>
                </td>
                <td class="text-start h-11 px-4 align-middle">
                  <BaseDropdown
                    :bindings="{
                      content: {
                        sideOffset: 10,
                        align: 'end',
                      },
                    }"
                  >
                    <template #button>
                      <BaseButton
                        variant="ghost"
                        size="icon-sm"
                        rounded="md"
                      >
                        <Icon
                          name="lucide:more-horizontal"
                          class="size-4"
                        />
                      </BaseButton>
                    </template>

                    <BaseDropdownItem>Copy email</BaseDropdownItem>
                    <BaseDropdownItem>View details</BaseDropdownItem>
                    <BaseDropdownSeparator />
                    <BaseDropdownItem>Cancel order</BaseDropdownItem>
                  </BaseDropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Pagination -->
      <div class="relative">
        <BasePagination
          v-model:page="page"
          :items-per-page="8"
          :total="512"
          :sibling-count="1"
          rounded="md"
          size="sm"
          variant="dark"
          :wrapped="false"
        />
      </div>
    </div>
  </BaseCard>
</template>
