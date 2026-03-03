<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header p-6 border-b border-gray-800">
      <slot name="header" />
    </div>
    <div class="card-body" :class="noPadding ? '' : 'p-6'">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer p-6 border-t border-gray-800">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'elevated', 'glass', 'bordered'].includes(value),
  },
  hoverable: {
    type: Boolean,
    default: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
})

const cardClasses = computed(() => {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300'

  const variantClasses = {
    default: 'bg-gray-900 border border-gray-800',
    elevated: 'bg-gray-900 shadow-2xl',
    glass: 'backdrop-blur-casino border border-gray-700/50',
    bordered: 'bg-gray-900 border-2 border-primary-500',
  }

  const hoverClasses = props.hoverable
    ? 'hover:shadow-primary-500/20 hover:border-primary-500/50 hover:transform hover:scale-[1.02] cursor-pointer'
    : ''

  return `${baseClasses} ${variantClasses[props.variant]} ${hoverClasses}`
})
</script>
