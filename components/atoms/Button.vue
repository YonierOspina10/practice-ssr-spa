<template>
  <button :type="type" :disabled="disabled || loading" :class="buttonClasses" @click="handleClick">
    <span v-if="loading" class="inline-block animate-spin mr-2">⟳</span>
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'gold', 'danger', 'ghost'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: Boolean,
  loading: Boolean,
  fullWidth: Boolean,
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center'

  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl',
    gold: 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold shadow-xl hover:shadow-2xl',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl',
    ghost:
      'bg-transparent hover:bg-gray-800/50 text-white border border-gray-700 hover:border-gray-600',
  }

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
    xl: 'py-5 px-10 text-xl',
  }

  const widthClass = props.fullWidth ? 'w-full' : ''

  return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${widthClass}`
})

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
