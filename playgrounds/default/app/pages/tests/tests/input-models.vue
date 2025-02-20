<script setup lang="ts">
definePageMeta({
  title: 'Input v-model',
  icon: 'lucide:wrench',
  description: 'Check how v-model works with components',
  section: 'tests',
})

const autocomplete1 = ref<string>()
const autocomplete2 = ref<{ name: string }>()
const autocomplete3 = ref('value2')
const autocomplete4 = ref<string[]>()
const autocomplete5 = ref<any[]>()
const autocomplete6 = ref<string[]>()
const checkbox1 = ref<boolean>()
const checkbox2 = ref<boolean | 'indeterminate'>()
const checkbox3 = ref<string[]>([])
const radio1 = ref<string>()
const radio2 = ref<string>()
const radio3 = ref<string>()
const checkboxCustom1 = ref()
const radioCustom1 = ref<'yes' | 'no'>()
const animatedCheckbox1 = ref<boolean>()
const animatedCheckbox2 = ref<string[]>([])
const switchBall = ref()
const switchThin = ref()
const input1 = ref()
const input2 = ref()
const input3 = ref()
const input4 = ref()
const inputNumber1 = ref()
const inputNumber2 = ref()
const inputFile1 = ref<FileList | null>(null)
const inputFileCustom1 = ref<FileList | null>(null)
const listbox1 = ref<string>()
const listbox2 = ref<{ name: string }>()
const listbox3 = ref('bar')
const listbox4 = ref([])
const listbox5 = ref([])
const select1 = ref()
const select2 = ref()
const textarea1 = ref()
const textarea2 = ref<string | undefined>('lorem ipsum dolor sit amet\nconsectetur adipiscing elit ...')
const textarea3 = ref()
const slider1 = ref([12, 42])
</script>

<template>
  <NuiPreviewContainer title="Input models">
    <NuiPreview
      title="BaseAutocomplete (string)"
      description="Autocomplete with string"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete1"
            ref="autocomplete1Ref"
            :items="['tete', 'hello', 'test', 'tast', 'tutu', 'holla']"
          >
            <!-- <template #item="{ item }">
              <span>{{ item }}</span>
            </template> -->
          </BaseAutocomplete>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete1: {{ autocomplete1 }}({{ typeof autocomplete1 }})</pre>
          <BaseButton @click="autocomplete1 = undefined">
            reset
          </BaseButton>
          <BaseButton @click="autocomplete1 = 'hello'">
            set
          </BaseButton>

          <BaseButton @click="$refs?.autocomplete1Ref?.$el?.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (object)"
      description="Autocomplete with object"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete2"
            clearable
            :items="[
              {
                name: 'Item 1',
              },
              {
                name: 'Item 2',
              },
              {
                name: 'Item 3',
              },
              {
                name: 'Item 4',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete2: {{ autocomplete2 }}({{ typeof autocomplete2 }})</pre>
          <BaseButton @click="autocomplete2 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (prop modifier)"
      description="Autocomplete with prop modifier"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete3"
            :properties="{
              value: 'value',
              label: 'name',
            }"
            :items="[
              {
                name: 'Item 1',
                value: 'value1',
              },
              {
                name: 'Item 2',
                value: 'value2',
              },
              {
                name: 'Item 3',
                value: 'value3',
              },
              {
                name: 'Item 4',
                value: 'value4',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete3: {{ autocomplete3 }}({{ typeof autocomplete3 }})</pre>
          <BaseButton @click="autocomplete3 = ''">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (multiple)"
      description="Autocomplete multiple"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete4"
            multiple
            :items="['tete', 'hello', 'test', 'tast', 'tutu', 'holla']"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete4: {{ autocomplete4 }}({{ typeof autocomplete4 }})</pre>
          <BaseButton @click="autocomplete4 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (multiple & object)"
      description="Autocomplete multiple with object"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete5"
            multiple
            :properties="{
              value: 'value',
              label: 'name',
            }"
            :items="[
              {
                name: 'Item 1',
                value: 'value1',
              },
              {
                name: 'Item 2',
                value: 'value2',
              },
              {
                name: 'Item 3',
                value: 'value3',
              },
              {
                name: 'Item 4',
                value: 'value4',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete5: {{ autocomplete5 }}({{ typeof autocomplete5 }})</pre>
          <BaseButton @click="autocomplete5 = []">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (multiple & prop modifier)"
      description="Autocomplete multiple with prop modifier"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete6"
            multiple
            :properties="{
              value: 'value',
              label: 'name',
            }"
            :items="[
              {
                name: 'Item 1',
                value: 'value1',
              },
              {
                name: 'Item 2',
                value: 'value2',
              },
              {
                name: 'Item 3',
                value: 'value3',
              },
              {
                name: 'Item 4',
                value: 'value4',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete6: {{ autocomplete6 }}({{ typeof autocomplete6 }})</pre>
          <BaseButton @click="autocomplete6 = []">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseRadio (boolean)"
      description="BaseRadio with boolean"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseRadioGroup ref="radio1Ref" v-model="radio1">
            <BaseRadio value="yes" />
            <BaseRadio value="no" />
          </BaseRadioGroup>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>radio1: {{ radio1 }}({{ typeof radio1 }})</pre>
          <BaseButton @click="radio1 = undefined">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.radio1Ref?.$el?.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseRadio (string)" description="BaseRadio with string">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseRadioGroup v-model="radio2">
            <BaseRadio value="yes" />
            <BaseRadio value="no" />
            <BaseRadio value="maybe" />
          </BaseRadioGroup>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>radio2: {{ radio2 }}({{ typeof radio2 }})</pre>
          <BaseButton @click="radio2 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseRadio (object)" description="BaseRadio with object">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseRadioGroup v-model="radio3">
            <BaseRadio value="foo" />
            <BaseRadio value="bar" />
            <BaseRadio value="baz" />
          </BaseRadioGroup> 
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>radio3: {{ radio3 }}({{ typeof radio3 }})</pre>
          <BaseButton @click="radio3 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseCheckbox (boolean)"
      description="BaseCheckbox with boolean"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseCheckbox ref="checkbox1Ref" v-model="checkbox1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>checkbox1: {{ checkbox1 }}({{ typeof checkbox1 }})</pre>
          <BaseButton @click="checkbox1 = undefined">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.checkbox1Ref?.$el?.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseCheckbox (object)"
      description="BaseCheckbox with boolean"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseCheckbox v-model="checkbox2" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>checkbox2: {{ checkbox2 }}({{ typeof checkbox2 }})</pre>
          <BaseButton @click="checkbox2 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseCheckbox (array)"
      description="BaseCheckbox with boolean"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseCheckboxGroup v-model="checkbox3">
            <BaseCheckbox value="foo" />
            <BaseCheckbox value="bar" />
            <BaseCheckbox value="baz" />
          </BaseCheckboxGroup>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>checkbox3: {{ checkbox3 }}({{ typeof checkbox3 }})</pre>
          <BaseButton @click="checkbox3 = []">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseSwitchBall" description="BaseSwitchBall test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseSwitchBall ref="switchBall1Ref" v-model="switchBall" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>switchBall: {{ switchBall }}({{ typeof switchBall }})</pre>
          <BaseButton @click="switchBall = undefined">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.switchBall1Ref?.$el?.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseSwitchThin" description="BaseSwitchThin test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseSwitchThin ref="switchThin1Ref" v-model="switchThin" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>switchThin: {{ switchThin }}({{ typeof switchThin }})</pre>
          <BaseButton @click="switchThin = undefined">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.switchThin1Ref?.$el?.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInput" description="BaseInput test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInput ref="input1Ref" v-model="input1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>input1: {{ input1 }}({{ typeof input1 }})</pre>
          <BaseButton @click="input1 = undefined">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.input1Ref?.$el?.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInput (v-model.number)" description="BaseInput test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInput v-model.number="input2" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>input2: {{ input2 }}({{ typeof input2 }})</pre>
          <BaseButton @click="input2 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInput (v-model.trim)" description="BaseInput test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInput v-model.trim="input3" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>input3: {{ input3 }}({{ typeof input3 }})</pre>
          <BaseButton @click="input3 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInput (v-model.lazy)" description="BaseInput test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInput v-model.lazy="input4" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>input4: {{ input4 }}({{ typeof input4 }})</pre>
          <BaseButton @click="input4 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInputNumber" description="BaseInputNumber test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInputNumber
            v-model="inputNumber1"
            ref="inputNumber1Ref"
            :min="-2"
            :max="5"
            color-focus
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>inputNumber1: {{ inputNumber1 }}({{ typeof inputNumber1 }})</pre>
          <BaseButton @click="inputNumber1 = undefined">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.inputNumber1Ref?.$el?.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseInputNumber (v-model.lazy)"
      description="BaseInputNumber test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInputNumber v-model.lazy="inputNumber2" :step="0.00001" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>inputNumber2: {{ inputNumber2 }}({{ typeof inputNumber2 }})</pre>
          <BaseButton @click="inputNumber2 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInputFile" description="BaseInputFile test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInputFile ref="inputFile1Ref" v-model="inputFile1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
inputFile1: {{ inputFile1?.item?.(0)?.name }}({{ typeof inputFile1 }})</pre>
          <BaseButton @click="inputFile1 = null">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.inputFile1Ref?.$el.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseSelect" description="BaseSelect test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseSelect ref="select1Ref" v-model="select1">
            
            <BaseSelectItem value="foo">
              foo
            </BaseSelectItem>
            <BaseSelectItem value="bar">
              bar
            </BaseSelectItem>
            <BaseSelectItem value="baz">
              baz
            </BaseSelectItem>
          </BaseSelect>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>select1: {{ select1 }}({{ typeof select1 }})</pre>
          <BaseButton @click="select1 = undefined">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.select1Ref?.$el.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseSelect" description="BaseSelect test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseSelect v-model="select2">
            
            <BaseSelectItem :value="{ foo: 42 }">
              foo
            </BaseSelectItem>
            <BaseSelectItem :value="{ bar: 42 }">
              bar
            </BaseSelectItem>
            <BaseSelectItem :value="{ baz: 42 }">
              baz
            </BaseSelectItem>
          </BaseSelect>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>select2: {{ select2 }}({{ typeof select2 }})</pre>
          <BaseButton @click="select2 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseTextarea" description="BaseTextarea test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseTextarea ref="textarea1Ref" v-model="textarea1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>textarea1: {{ textarea1 }}({{ typeof textarea1 }})</pre>
          <BaseButton @click="textarea1 = undefined">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.textarea1Ref?.$el.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseTextarea (v-model.trim)"
      description="BaseTextarea test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseTextarea v-model.trim="textarea2" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>textarea2: {{ textarea2 }}({{ typeof textarea2 }})</pre>
          <BaseButton @click="textarea2 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseTextarea (v-model.lazy)"
      description="BaseTextarea test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseTextarea v-model.lazy="textarea3" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>textarea3: {{ textarea3 }}({{ typeof textarea3 }})</pre>
          <BaseButton @click="textarea3 = undefined">
            reset
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseSlider" description="BaseSlider test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseSlider ref="slider1Ref" v-model="slider1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>slider1: {{ slider1 }}({{ typeof slider1 }})</pre>
          <BaseButton @click="slider1 = undefined">
            reset
          </BaseButton>
          <BaseButton @click="$refs?.slider1Ref?.$el.focus()">
            focus
          </BaseButton>
        </BaseCard>
      </div>
    </NuiPreview>
  </NuiPreviewContainer>
</template>
