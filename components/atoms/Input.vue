<template>
  <div class="relative">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="inputClasses"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <label
      v-if="label"
      :for="id"
      class="absolute -top-2.5 left-3 bg-gray-900 px-2 text-sm font-medium text-gray-300"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>
    <p v-if="error" class="mt-2 text-sm text-red-500">{{ error }}</p>
    <p v-else-if="hint" class="mt-2 text-sm text-gray-500">{{ hint }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  label: String,
  placeholder: String,
  disabled: Boolean,
  required: Boolean,
  error: String,
  hint: String,
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const isFocused = ref(false)

const inputClasses = computed(() => {
  const baseClasses =
    'w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2'
  const errorClasses = props.error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
    : 'border-gray-700 focus:border-primary-500 focus:ring-primary-500/50'
  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return `${baseClasses} ${errorClasses} ${disabledClasses}`
})

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const handleBlur = (event) => {
  isFocused.value = false
  emit('blur', event)
}

const handleFocus = (event) => {
  isFocused.value = true
  emit('focus', event)
}
</script>
