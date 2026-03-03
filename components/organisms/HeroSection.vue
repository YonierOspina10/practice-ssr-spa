<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <ClientOnly>
        <div class="absolute inset-0 opacity-30">
          <div
            v-for="i in 20"
            :key="i"
            class="absolute animate-pulse"
            :style="{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }"
          >
            <AtomIcon name="star" size="sm" class="text-primary-500" />
          </div>
        </div>
      </ClientOnly>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Badge -->
        <div class="flex justify-center mb-6">
          <AtomBadge variant="gold" size="lg" pill>
            <AtomIcon name="crown" size="sm" class="inline mr-2" />
            Bono de Bienvenida hasta $5,000
          </AtomBadge>
        </div>

        <!-- Título principal -->
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg">
          Bienvenido al
          <span class="text-gradient-gold block mt-2">Casino Virtual</span>
        </h1>

        <!-- Subtítulo -->
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          La mejor experiencia de casino online con más de 1,000 juegos, jackpots millonarios y
          retiros instantáneos
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <AtomButton variant="gold" size="xl" @click="emit('register')">
            <AtomIcon name="star" size="sm" class="mr-2" />
            Registrarse Ahora
          </AtomButton>
          <AtomButton variant="ghost" size="xl" @click="emit('explore')">
            Explorar Juegos
          </AtomButton>
        </div>

        <!-- Características -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary-500/50 transition-all"
          >
            <AtomIcon :name="feature.icon" size="lg" class="text-primary-500 mb-3 mx-auto" />
            <h3 class="text-white font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-400 text-sm">{{ feature.description }}</p>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-400 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['register', 'explore'])

const features = [
  {
    icon: 'lightning',
    title: 'Retiros Rápidos',
    description: 'Retira tus ganancias en menos de 24 horas',
  },
  {
    icon: 'gem',
    title: 'Juegos Premium',
    description: 'Más de 1,000 slots y juegos de mesa',
  },
  {
    icon: 'trophy',
    title: 'Jackpots',
    description: 'Millones en premios acumulados',
  },
]

const stats = [
  { value: '1,000+', label: 'Juegos' },
  { value: '$5M+', label: 'En Jackpots' },
  { value: '50K+', label: 'Jugadores' },
  { value: '24/7', label: 'Soporte' },
]
</script>
