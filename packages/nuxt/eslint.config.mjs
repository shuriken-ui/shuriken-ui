import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  stylistic: true,
  rules: {
    'unused-imports/no-unused-vars': ['error', {
      varsIgnorePattern: 'slots|emits',
    }],
  },
})
