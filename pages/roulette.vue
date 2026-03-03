<template>
  <div class="min-h-screen bg-black py-8">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
          <AtomIcon name="roulette" size="lg" class="text-red-500 animate-spin-slow" />
          Ruleta
        </h1>
        <p class="text-gray-400 text-lg">Haz tu apuesta y prueba tu suerte</p>
      </div>

      <!-- Game Tables -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div v-for="table in tables" :key="table.id" class="relative">
          <AtomCard variant="elevated" hoverable>
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-white">{{ table.name }}</h3>
                <AtomBadge :variant="table.status === 'open' ? 'success' : 'danger'">
                  {{ table.status === 'open' ? 'Abierta' : 'Completa' }}
                </AtomBadge>
              </div>

              <div class="space-y-3 mb-4">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-400">Apuesta mínima:</span>
                  <span class="text-white font-semibold">{{ formatCurrency(table.minBet) }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-400">Apuesta máxima:</span>
                  <span class="text-white font-semibold">{{ formatCurrency(table.maxBet) }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-400">Jugadores:</span>
                  <span class="text-white font-semibold"
                    >{{ table.players }}/{{ table.maxPlayers }}</span
                  >
                </div>
              </div>

              <AtomButton
                :variant="table.status === 'open' ? 'gold' : 'secondary'"
                size="md"
                full-width
                :disabled="table.status !== 'open'"
                @click="joinTable(table)"
              >
                {{ table.status === 'open' ? 'Unirse a la mesa' : 'Mesa completa' }}
              </AtomButton>
            </div>
          </AtomCard>
        </div>
      </div>

      <!-- Rules Section -->
      <AtomCard variant="glass">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <AtomIcon name="cards" size="md" class="text-primary-500" />
            Reglas de la Ruleta
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 class="font-semibold text-white mb-3">Tipos de apuestas</h3>
              <ul class="space-y-2 text-sm">
                <li>• Rojo/Negro: Paga 1:1</li>
                <li>• Par/Impar: Paga 1:1</li>
                <li>• Alto/Bajo: Paga 1:1</li>
                <li>• Docenas: Paga 2:1</li>
                <li>• Columnas: Paga 2:1</li>
                <li>• Número único: Paga 35:1</li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold text-white mb-3">Cómo jugar</h3>
              <ul class="space-y-2 text-sm">
                <li>1. Selecciona tu apuesta y cantidad</li>
                <li>2. Coloca tus fichas en el tapete</li>
                <li>3. Espera a que gire la ruleta</li>
                <li>4. Cobra tus ganancias si aciertas</li>
              </ul>
            </div>
          </div>
        </div>
      </AtomCard>
    </div>
  </div>
</template>

<script setup>
/**
 * Página de Ruleta - SPA
 */

definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Ruleta - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: 'Juega a la ruleta online. Mesas con diferentes límites de apuesta.',
    },
  ],
})

const { isAuthenticated } = useAuth()
const toast = useToast()
const router = useRouter()

const tables = ref([
  {
    id: 1,
    name: 'Ruleta Europea',
    minBet: 1,
    maxBet: 1000,
    players: 5,
    maxPlayers: 7,
    status: 'open',
  },
  {
    id: 2,
    name: 'Ruleta Americana',
    minBet: 5,
    maxBet: 5000,
    players: 6,
    maxPlayers: 7,
    status: 'open',
  },
  {
    id: 3,
    name: 'Ruleta VIP',
    minBet: 100,
    maxBet: 50000,
    players: 7,
    maxPlayers: 7,
    status: 'full',
  },
])

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)
}

const joinTable = (table) => {
  if (!isAuthenticated.value) {
    toast.warning('Debes iniciar sesión para jugar')
    router.push('/?login=true')
    return
  }

  toast.success(`Uniéndote a ${table.name}...`)
  router.push(`/play/roulette/${table.id}`)
}
</script>
