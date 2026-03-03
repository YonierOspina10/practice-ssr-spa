<template>
  <div class="min-h-screen bg-black py-8">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
          <AtomIcon name="cards" size="lg" class="text-primary-500" />
          Blackjack
        </h1>
        <p class="text-gray-400 text-lg">El juego de cartas más popular del casino</p>
      </div>

      <!-- Game Tables -->
      <OrganismGameGrid
        title="Mesas Disponibles"
        :games="blackjackGames"
        :loading="loading"
        @play="handlePlayGame"
      />

      <!-- Info Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <AtomCard variant="glass">
          <div class="p-6 text-center">
            <AtomIcon name="trophy" size="lg" class="text-yellow-500 mx-auto mb-3" />
            <h3 class="text-xl font-bold text-white mb-2">Objetivo</h3>
            <p class="text-gray-400 text-sm">
              Consigue 21 o acércate más que el dealer sin pasarte
            </p>
          </div>
        </AtomCard>

        <AtomCard variant="glass">
          <div class="p-6 text-center">
            <AtomIcon name="coins" size="lg" class="text-yellow-500 mx-auto mb-3" />
            <h3 class="text-xl font-bold text-white mb-2">Pagos</h3>
            <p class="text-gray-400 text-sm">Blackjack paga 3:2, victoria normal 1:1</p>
          </div>
        </AtomCard>

        <AtomCard variant="glass">
          <div class="p-6 text-center">
            <AtomIcon name="lightning" size="lg" class="text-yellow-500 mx-auto mb-3" />
            <h3 class="text-xl font-bold text-white mb-2">Estrategia</h3>
            <p class="text-gray-400 text-sm">
              Usa la estrategia básica para maximizar tus ganancias
            </p>
          </div>
        </AtomCard>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Blackjack - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: 'Juega al blackjack online. Mesas clásicas y variantes especiales.',
    },
  ],
})

const { isAuthenticated } = useAuth()
const toast = useToast()
const router = useRouter()

const loading = ref(false)

const blackjackGames = ref([
  {
    id: 'bj-1',
    title: 'Blackjack Clásico',
    provider: 'Evolution Gaming',
    rating: 4.9,
    players: 2500,
    category: 'blackjack',
    icon: 'cards',
    minBet: 5,
    maxBet: 1000,
  },
  {
    id: 'bj-2',
    title: 'Blackjack VIP',
    provider: 'NetEnt',
    rating: 4.8,
    players: 1200,
    category: 'blackjack',
    icon: 'cards',
    minBet: 100,
    maxBet: 10000,
    isHot: true,
  },
  {
    id: 'bj-3',
    title: 'Perfect Pairs Blackjack',
    provider: 'Pragmatic Play',
    rating: 4.7,
    players: 980,
    category: 'blackjack',
    icon: 'cards',
    minBet: 1,
    maxBet: 500,
    isNew: true,
  },
])

const handlePlayGame = (game) => {
  if (!isAuthenticated.value) {
    toast.warning('Debes iniciar sesión para jugar')
    router.push('/?login=true')
    return
  }

  router.push(`/play/${game.id}`)
}
</script>
