<template>
  <div class="min-h-screen bg-black py-8">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
          <AtomIcon name="fire" size="lg" class="text-red-500" />
          Casino en Vivo
        </h1>
        <p class="text-gray-400 text-lg">Experimenta la emoción del casino real desde casa</p>
      </div>

      <!-- Live Badge -->
      <div class="flex justify-center mb-8">
        <AtomBadge variant="danger" size="lg" pill>
          <span class="animate-pulse inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          En Vivo Ahora
        </AtomBadge>
      </div>

      <!-- Live Games -->
      <OrganismGameGrid
        title="Juegos en Vivo"
        :games="liveGames"
        :loading="loading"
        :show-filters="true"
        @play="handlePlayGame"
      />

      <!-- Features -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-white text-center mb-8">
          Características del Casino en Vivo
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="text-center p-6 bg-gray-900 rounded-xl border border-gray-800"
          >
            <AtomIcon :name="feature.icon" size="lg" class="text-primary-500 mx-auto mb-4" />
            <h3 class="text-lg font-bold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-gray-400 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Casino en Vivo - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: 'Juega con dealers en vivo. Ruleta, blackjack, baccarat y más en tiempo real.',
    },
  ],
})

const { isAuthenticated } = useAuth()
const toast = useToast()
const router = useRouter()

const loading = ref(false)

const liveGames = ref([
  {
    id: 'live-1',
    title: 'Ruleta en Vivo',
    provider: 'Evolution Gaming',
    rating: 5.0,
    players: 5200,
    category: 'live',
    icon: 'roulette',
    isHot: true,
  },
  {
    id: 'live-2',
    title: 'Blackjack en Vivo',
    provider: 'Pragmatic Play Live',
    rating: 4.9,
    players: 3800,
    category: 'live',
    icon: 'cards',
    isHot: true,
  },
  {
    id: 'live-3',
    title: 'Baccarat en Vivo',
    provider: 'Evolution Gaming',
    rating: 4.8,
    players: 2100,
    category: 'live',
    icon: 'cards',
  },
  {
    id: 'live-4',
    title: 'Craps en Vivo',
    provider: 'Ezugi',
    rating: 4.7,
    players: 890,
    category: 'live',
    icon: 'dice',
    isNew: true,
  },
])

const features = [
  {
    icon: 'user',
    title: 'Dealers Profesionales',
    description: 'Crupieres experimentados y amables',
  },
  {
    icon: 'lightning',
    title: 'Streaming HD',
    description: 'Video de alta calidad sin retrasos',
  },
  {
    icon: 'cards',
    title: 'Chat en Vivo',
    description: 'Interactúa con dealers y jugadores',
  },
  {
    icon: 'trophy',
    title: 'Torneos Diarios',
    description: 'Compite por premios especiales',
  },
]

const handlePlayGame = (game) => {
  if (!isAuthenticated.value) {
    toast.warning('Debes iniciar sesión para jugar')
    router.push('/?login=true')
    return
  }

  router.push(`/play/${game.id}`)
}
</script>
