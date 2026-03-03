<template>
  <AtomCard :hoverable="true" variant="elevated" class="game-card">
    <div class="relative">
      <div
        class="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden group"
      >
        <img
          v-if="game.image"
          :src="game.image"
          :alt="game.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div v-else class="w-full h-full flex items-center justify-center">
          <AtomIcon :name="game.icon || 'slot'" size="xl" class="text-primary-500 opacity-50" />
        </div>

        <!-- Overlay con información -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
        >
          <AtomButton variant="gold" size="sm" class="w-full" @click="playGame">
            Jugar Ahora
          </AtomButton>
        </div>

        <!-- Badge de estado -->
        <div class="absolute top-3 right-3">
          <AtomBadge v-if="game.isNew" variant="gold" pill>Nuevo</AtomBadge>
          <AtomBadge v-else-if="game.isHot" variant="danger" pill>🔥 Hot</AtomBadge>
        </div>

        <!-- Badge de jackpot -->
        <div v-if="game.jackpot" class="absolute top-3 left-3">
          <AtomBadge variant="primary" pill>💰 {{ formatCurrency(game.jackpot) }}</AtomBadge>
        </div>
      </div>

      <div class="p-4">
        <h3 class="text-lg font-bold text-white mb-2 truncate">{{ game.title }}</h3>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <AtomIcon name="star" size="sm" class="text-yellow-500" />
            <span class="text-sm text-gray-400">{{ game.rating || '4.5' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <AtomIcon name="user" size="sm" class="text-gray-400" />
            <span class="text-sm text-gray-300">{{ formatPlayers(game.players) }}</span>
          </div>
        </div>
        <p v-if="game.provider" class="text-sm text-gray-400 mt-2">{{ game.provider }}</p>
      </div>
    </div>
  </AtomCard>
</template>

<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['play'])

const playGame = () => {
  emit('play', props.game)
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)
}

const formatPlayers = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count || '0'
}
</script>

<style scoped>
.game-card:hover {
  transform: translateY(-4px);
}
</style>
