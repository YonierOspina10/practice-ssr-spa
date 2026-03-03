<template>
  <nav class="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <AtomIcon name="crown" size="lg" class="text-yellow-500 group-hover:animate-bounce" />
          <span class="text-2xl font-bold text-gradient-gold">Casino Virtual</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
          >
            {{ item.label }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
        </div>

        <!-- Actions -->
        <div class="hidden md:flex items-center gap-4">
          <div v-if="isAuthenticated" class="flex items-center gap-4">
            <div class="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg">
              <AtomIcon name="wallet" size="sm" class="text-yellow-500" />
              <span class="font-bold text-white">{{ formatBalance(balance) }}</span>
            </div>
            <NuxtLink
              to="/profile"
              class="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div
                class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center"
              >
                <AtomIcon name="user" size="sm" class="text-white" />
              </div>
            </NuxtLink>
          </div>
          <div v-else class="flex items-center gap-3">
            <AtomButton variant="ghost" size="sm" @click="emit('login')">
              Iniciar Sesión
            </AtomButton>
            <AtomButton variant="gold" size="sm" @click="emit('register')">
              Registrarse
            </AtomButton>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" @click="mobileMenuOpen = !mobileMenuOpen">
          <AtomIcon :name="mobileMenuOpen ? 'close' : 'menu'" size="md" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-800">
          <div class="flex flex-col gap-4">
            <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
            <div v-if="!isAuthenticated" class="flex flex-col gap-2 pt-4 border-t border-gray-800">
              <AtomButton variant="ghost" size="sm" full-width @click="emit('login')">
                Iniciar Sesión
              </AtomButton>
              <AtomButton variant="gold" size="sm" full-width @click="emit('register')">
                Registrarse
              </AtomButton>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  isAuthenticated: {
    type: Boolean,
    default: false,
  },
  balance: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['login', 'register'])

const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Slots', path: '/slots' },
  { label: 'Ruleta', path: '/roulette' },
  { label: 'Black Jack', path: '/blackjack' },
  { label: 'Casino en Vivo', path: '/live-casino' },
]

const formatBalance = (value) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value)
}
</script>
