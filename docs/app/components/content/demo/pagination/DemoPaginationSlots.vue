<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const pageQuery = computed({
  get() {
    return Number(route.query.page) || 1
  },
  set(value: number) {
    router.replace({ query: { ...route.query, page: value } })
  },
})

const formatter = new Intl.NumberFormat('en-US', { style: 'decimal' })
</script>

<template>
  <div class="p-4">
    <BasePagination
      v-model:page="pageQuery"
      :items-per-page="8"
      :total="1_000_000"
      :sibling-count="1"
      rounded="full"
      variant="dark"
    >
      <template #page="{ page }">
        {{ formatter.format(page) }}
      </template>
      <template #ellipsis>
        &#8230;
      </template>
    </BasePagination>
  </div>
</template>
