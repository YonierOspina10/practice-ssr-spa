<template>
  <div class="min-h-screen bg-black">
    <!-- Hero Section - LCP optimizado -->
    <OrganismHeroSection @register="openRegisterModal" @explore="scrollToGames" />

    <!-- Jackpot Display -->
    <OrganismJackpotDisplay @play="handlePlayGame" />

    <!-- Popular Games -->
    <div id="games-section">
      <OrganismGameGrid
        title="Juegos Populares"
        subtitle="Los más jugados de la semana"
        :games="popularGames"
        :show-filters="true"
        :loading="loadingGames"
        view-all-link="/slots"
        @play="handlePlayGame"
      />
    </div>

    <!-- New Games -->
    <OrganismGameGrid
      title="Nuevos Lanzamientos"
      subtitle="Descubre las últimas incorporaciones"
      :games="newGames"
      :loading="loadingGames"
      view-all-link="/slots"
      @play="handlePlayGame"
    />

    <!-- Features Section -->
    <section class="py-20 bg-gradient-to-b from-black to-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">¿Por qué Casino Virtual?</h2>
          <p class="text-gray-400 text-lg">La mejor experiencia de juego online</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-primary-500/50 transition-all"
          >
            <div class="mb-4">
              <AtomIcon :name="feature.icon" size="xl" class="text-primary-500 mx-auto" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Providers Section -->
    <section class="py-20 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Proveedores de Confianza</h2>
          <p class="text-gray-400 text-lg">Trabajamos con los mejores del sector</p>
        </div>

        <div class="flex flex-wrap justify-center items-center gap-8">
          <div
            v-for="provider in providers"
            :key="provider"
            class="px-8 py-4 bg-gray-800 rounded-lg text-gray-400 font-semibold hover:bg-gray-700 hover:text-white transition-all"
          >
            {{ provider }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * Landing Page principal con SSR
 * Optimizado para LCP (Largest Contentful Paint)
 * Patrón: SSR + Hydration
 */

// Meta tags para SEO
useHead({
  title: 'Casino Virtual - El Mejor Casino Online | Slots, Ruleta y más',
  meta: [
    {
      name: 'description',
      content:
        'Juega en el mejor casino online. Más de 1,000 juegos de slots, ruleta, blackjack y casino en vivo. Bono de bienvenida hasta $5,000. ¡Regístrate ahora!',
    },
    {
      property: 'og:title',
      content: 'Casino Virtual - El Mejor Casino Online',
    },
    {
      property: 'og:description',
      content: 'Juega en el mejor casino online. Más de 1,000 juegos y bonos increíbles.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'keywords',
      content: 'casino online, slots, ruleta, blackjack, poker, casino en vivo, juegos de azar',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://casino-virtual.com',
    },
  ],
})

// Composables
const { fetchGames, games, loading: loadingGames } = useGames()
const { isAuthenticated, user } = useAuth()
const toast = useToast()
const router = useRouter()

// Data con SSR
const popularGames = ref([])
const newGames = ref([])

// Features
const features = [
  {
    icon: 'lightning',
    title: 'Retiros en 24h',
    description: 'Retira tus ganancias rápidamente y sin complicaciones',
  },
  {
    icon: 'gem',
    title: '+1,000 Juegos',
    description: 'La mayor selección de slots y juegos de mesa',
  },
  {
    icon: 'trophy',
    title: 'Jackpots Millonarios',
    description: 'Premios acumulados que cambian vidas',
  },
  {
    icon: 'user',
    title: 'Soporte 24/7',
    description: 'Atención al cliente siempre disponible',
  },
]

const providers = [
  'NetEnt',
  'Microgaming',
  'Pragmatic Play',
  'Evolution Gaming',
  "Play'n GO",
  'Yggdrasil',
  'Red Tiger',
  'Quickspin',
]

// Fetch data en el servidor (SSR)
// Esto mejora el LCP al tener contenido pre-renderizado
const { data: gamesData } = await useAsyncData('landing-games', async () => {
  await fetchGames('all')

  return {
    popular: games.value.filter((g) => g.players > 1000).slice(0, 12),
    new: games.value.filter((g) => g.isNew).slice(0, 12),
  }
})

// Asignar datos
if (gamesData.value) {
  popularGames.value = gamesData.value.popular
  newGames.value = gamesData.value.new
}

// Methods
const handlePlayGame = (game) => {
  if (!isAuthenticated.value) {
    toast.warning('Debes iniciar sesión para jugar')
    openRegisterModal()
    return
  }

  // Navegar a la página del juego (SPA)
  router.push(`/play/${game.id}`)
}

const openRegisterModal = () => {
  // Implementar modal de registro
  toast.info('Modal de registro (por implementar)')
}

const scrollToGames = () => {
  const element = document.getElementById('games-section')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
