<template>
  <div class="flex flex-wrap items-end gap-4 p-4">
    <BaseChip
      placement="top-end"
      :offset="0"
      color="custom"
      class="text-yellow-400"
    >
      <BaseAvatar
        src="/img/people/39.jpg"
        rounded="none"
        size="md"
        dot="yellow"
      />
    </BaseChip>
    <BaseChip
      placement="top-end"
      :offset="0"
      color="custom"
      class="text-green-500"
    >
      <BaseAvatar
        src="/img/people/46.jpg"
        rounded="sm"
        size="md"
        dot="success"
      />
    </BaseChip>
    <BaseChip
      placement="top-end"
    >
      <BaseAvatar
        src="/img/people/29.jpg"
        rounded="md"
        size="md"
        dot="info"
      />
    </BaseChip>
    <BaseChip
      placement="top-end"
      :offset="1"
      color="custom"
      class="text-pink-300"
    >
      <BaseAvatar
        src="/img/people/51.jpg"
        rounded="lg"
        size="md"
        dot="warning"
      />
    </BaseChip>
    <BaseChip
      placement="top-end"
      :offset="4"
      color="custom"
      class="text-sky-400"
    >
      <BaseAvatar
        src="/img/people/43.jpg"
        rounded="full"
        size="md"
        dot="pink"
      />
    </BaseChip>
  </div>
</template>
