<template>
  <section class="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <AtomIcon name="trophy" size="lg" class="text-yellow-400" />
            Jackpots Activos
            <AtomIcon name="trophy" size="lg" class="text-yellow-400" />
          </h2>
          <p class="text-primary-100 text-lg">Premios acumulados - ¡Gana millones ahora!</p>
        </div>

        <!-- Jackpots Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="jackpot in jackpots"
            :key="jackpot.id"
            class="relative overflow-hidden rounded-2xl"
          >
            <AtomCard
              variant="elevated"
              class="relative overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all"
            >
              <!-- Animated Background -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 animate-pulse"
              ></div>

              <div class="relative p-6 text-center">
                <!-- Icon -->
                <div class="mb-4">
                  <AtomIcon :name="jackpot.icon" size="xl" :class="jackpot.color" />
                </div>

                <!-- Title -->
                <h3 class="text-xl font-bold text-white mb-2">
                  {{ jackpot.title }}
                </h3>

                <!-- Amount -->
                <div class="text-4xl font-bold mb-4 animate-glow" :class="jackpot.amountColor">
                  {{ formatCurrency(animatedAmounts[jackpot.id] || jackpot.amount) }}
                </div>

                <!-- Last Winner -->
                <div v-if="jackpot.lastWinner" class="text-sm text-gray-400 mb-4">
                  Último ganador: {{ jackpot.lastWinner.name }}<br />
                  {{ formatCurrency(jackpot.lastWinner.amount) }}
                </div>

                <!-- Play Button -->
                <AtomButton
                  :variant="jackpot.buttonVariant"
                  size="md"
                  full-width
                  @click="playJackpot(jackpot)"
                >
                  <AtomIcon name="lightning" size="sm" class="mr-2" />
                  Jugar Ahora
                </AtomButton>

                <!-- Badge -->
                <div class="absolute top-4 right-4">
                  <AtomBadge variant="danger" pill class="animate-pulse"> 🔥 HOT </AtomBadge>
                </div>
              </div>
            </AtomCard>
          </div>
        </div>

        <!-- Info Footer -->
        <div class="mt-12 text-center">
          <p class="text-primary-100 text-sm">
            Los jackpots se actualizan en tiempo real. Probabilidades de ganar varían según el
            juego.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  jackpots: {
    type: Array,
    default: () => [
      {
        id: 'mega',
        title: 'Mega Jackpot',
        amount: 5250000,
        icon: 'crown',
        color: 'text-yellow-400',
        amountColor: 'text-yellow-400',
        buttonVariant: 'gold',
        lastWinner: { name: 'Juan P.', amount: 2500000 },
      },
      {
        id: 'major',
        title: 'Major Jackpot',
        amount: 850000,
        icon: 'gem',
        color: 'text-blue-400',
        amountColor: 'text-blue-400',
        buttonVariant: 'primary',
        lastWinner: { name: 'María G.', amount: 450000 },
      },
      {
        id: 'mini',
        title: 'Mini Jackpot',
        amount: 125000,
        icon: 'star',
        color: 'text-green-400',
        amountColor: 'text-green-400',
        buttonVariant: 'secondary',
        lastWinner: { name: 'Carlos R.', amount: 85000 },
      },
    ],
  },
})

const emit = defineEmits(['play'])

const animatedAmounts = ref({})

// Animar el incremento de los jackpots
onMounted(() => {
  props.jackpots.forEach((jackpot) => {
    animatedAmounts.value[jackpot.id] = jackpot.amount
  })

  // Incrementar cada segundo para simular tiempo real
  setInterval(() => {
    props.jackpots.forEach((jackpot) => {
      const increment = Math.random() * 100 + 10
      animatedAmounts.value[jackpot.id] += increment
    })
  }, 2000)
})

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)
}

const playJackpot = (jackpot) => {
  emit('play', jackpot)
}
</script>
