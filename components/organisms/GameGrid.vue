<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-3xl font-bold text-white mb-2">{{ title }}</h2>
          <p v-if="subtitle" class="text-gray-400">{{ subtitle }}</p>
        </div>
        <NuxtLink
          v-if="viewAllLink"
          :to="viewAllLink"
          class="text-primary-500 hover:text-primary-400 font-semibold flex items-center gap-2 transition-colors"
        >
          Ver todos
          <span>→</span>
        </NuxtLink>
      </div>

      <!-- Filtros -->
      <div v-if="showFilters" class="flex gap-3 mb-6 overflow-x-auto pb-2">
        <AtomButton
          v-for="filter in filters"
          :key="filter.value"
          :variant="selectedFilter === filter.value ? 'primary' : 'ghost'"
          size="sm"
          @click="selectedFilter = filter.value"
        >
          {{ filter.label }}
        </AtomButton>
      </div>

      <!-- Loading -->
      <div
        v-if="loading"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div v-for="i in 8" :key="i" class="animate-pulse">
          <div class="bg-gray-800 rounded-xl h-64"></div>
        </div>
      </div>

      <!-- Games Grid -->
      <div
        v-else-if="filteredGames.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <MoleculeGameCard
          v-for="game in paginatedGames"
          :key="game.id"
          :game="game"
          @play="handlePlayGame"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <AtomIcon name="slot" size="xl" class="text-gray-700 mb-4 mx-auto" />
        <p class="text-gray-400 text-lg">No se encontraron juegos</p>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-8">
        <AtomButton variant="ghost" size="sm" :disabled="currentPage === 1" @click="currentPage--">
          Anterior
        </AtomButton>
        <span class="flex items-center px-4 text-gray-400">
          Página {{ currentPage }} de {{ totalPages }}
        </span>
        <AtomButton
          variant="ghost"
          size="sm"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          Siguiente
        </AtomButton>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  games: {
    type: Array,
    default: () => [],
  },
  viewAllLink: String,
  showFilters: {
    type: Boolean,
    default: false,
  },
  filters: {
    type: Array,
    default: () => [
      { label: 'Todos', value: 'all' },
      { label: 'Populares', value: 'popular' },
      { label: 'Nuevos', value: 'new' },
      { label: 'Jackpot', value: 'jackpot' },
    ],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  itemsPerPage: {
    type: Number,
    default: 12,
  },
})

const emit = defineEmits(['play', 'filter-change'])

const selectedFilter = ref('all')
const currentPage = ref(1)

const filteredGames = computed(() => {
  if (selectedFilter.value === 'all') return props.games

  return props.games.filter((game) => {
    switch (selectedFilter.value) {
      case 'popular':
        return game.players > 1000
      case 'new':
        return game.isNew
      case 'jackpot':
        return game.jackpot
      default:
        return true
    }
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredGames.value.length / props.itemsPerPage)
})

const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return filteredGames.value.slice(start, end)
})

const handlePlayGame = (game) => {
  emit('play', game)
}

watch(selectedFilter, (newValue) => {
  currentPage.value = 1
  emit('filter-change', newValue)
})
</script>
