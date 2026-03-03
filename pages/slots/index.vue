<template>
  <div class="min-h-screen bg-black py-8">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-white mb-2 flex items-center gap-3">
          <AtomIcon name="slot" size="lg" class="text-primary-500" />
          Slots
        </h1>
        <p class="text-gray-400 text-lg">Descubre nuestra colección de slots premium</p>
      </div>

      <!-- Search and Filters -->
      <div class="mb-8 flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <AtomInput id="search" v-model="searchQuery" placeholder="Buscar juegos..." type="text" />
        </div>
        <div class="flex gap-2">
          <select
            v-model="selectedProvider"
            class="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
          >
            <option value="">Todos los proveedores</option>
            <option v-for="provider in providers" :key="provider" :value="provider">
              {{ provider }}
            </option>
          </select>
        </div>
      </div>

      <!-- Games Grid -->
      <OrganismGameGrid
        title=""
        :games="filteredGames"
        :show-filters="true"
        :loading="loading"
        :items-per-page="20"
        @play="handlePlayGame"
      />
    </div>
  </div>
</template>

<script setup>
/**
 * Página de Slots - SPA
 * Client-side rendering para mejor interactividad
 */

// Desactivar SSR para esta página (ya configurado en nuxt.config.ts)
definePageMeta({
  layout: 'default',
})

// Meta tags
useHead({
  title: 'Slots - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: 'Juega a las mejores slots online. Cientos de juegos de proveedores top.',
    },
  ],
})

const { fetchGames, games, loading } = useGames()
const { isAuthenticated } = useAuth()
const toast = useToast()
const router = useRouter()

const searchQuery = ref('')
const selectedProvider = ref('')

const providers = ['NetEnt', 'Microgaming', 'Pragmatic Play', 'Evolution Gaming', "Play'n GO"]

// Cargar juegos al montar (client-side)
onMounted(async () => {
  await fetchGames('slots')
})

// Filtrar juegos
const filteredGames = computed(() => {
  let filtered = games.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (game) =>
        game.title.toLowerCase().includes(query) || game.provider.toLowerCase().includes(query),
    )
  }

  if (selectedProvider.value) {
    filtered = filtered.filter((game) => game.provider === selectedProvider.value)
  }

  return filtered
})

const handlePlayGame = (game) => {
  if (!isAuthenticated.value) {
    toast.warning('Debes iniciar sesión para jugar')
    router.push('/?login=true')
    return
  }

  router.push(`/play/${game.id}`)
}
</script>
