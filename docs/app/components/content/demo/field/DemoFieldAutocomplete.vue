<script setup lang="ts">
const states = ['idle', 'loading', 'success', 'error'] as const
</script>

<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900/40">
      <div class="flex w-full items-center">
        <div class="w-full grid grid-cols-2 gap-4">
          <BasePrimitiveField v-for="state in states" :key="state" :state="state">
            <div class="w-full inline-flex">
              <BasePrimitiveFieldLabel class="flex items-center justify-between w-full">
                <div>
                  <span>Choose an option</span>
                  <BasePrimitiveFieldRequiredIndicator />
                </div>
              </BasePrimitiveFieldLabel>
            </div>
            <div class="relative">
              <BasePrimitiveFieldController>
                <BaseAutocomplete
                  placeholder="autocomplete placeholder"
                  clearable
                >
                  <BaseAutocompleteItem value="1">
                    Option 1
                  </BaseAutocompleteItem>
                  <BaseAutocompleteItem value="2">
                    Option 2
                  </BaseAutocompleteItem>
                  <BaseAutocompleteItem value="3">
                    Option 3
                  </BaseAutocompleteItem>
                  <BaseAutocompleteItem value="4">
                    Option 4
                  </BaseAutocompleteItem>
                  <BaseAutocompleteItem value="5">
                    Option 5
                  </BaseAutocompleteItem>
                  <BaseAutocompleteItem value="6">
                    Option 6
                  </BaseAutocompleteItem>
                </BaseAutocomplete>
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
    </div>
  </div>
</template>
