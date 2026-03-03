<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) =>
      ['default', 'primary', 'success', 'warning', 'danger', 'gold'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  pill: {
    type: Boolean,
    default: false,
  },
})

const badgeClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold'

  const variantClasses = {
    default: 'bg-gray-700 text-gray-200',
    primary: 'bg-primary-600 text-white',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-gray-900',
    danger: 'bg-red-600 text-white',
    gold: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900',
  }

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  }

  const shapeClasses = props.pill ? 'rounded-full' : 'rounded'

  return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${shapeClasses}`
})
</script>
