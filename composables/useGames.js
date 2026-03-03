/**
 * Composable para manejo de juegos
 * Patrón: Factory Pattern para generación de juegos
 */
export const useGames = () => {
  const gamesStore = useGamesStore()

  const games = computed(() => gamesStore.games)
  const loading = computed(() => gamesStore.loading)
  const selectedGame = computed(() => gamesStore.selectedGame)

  /**
   * Obtener juegos por categoría
   */
  const fetchGames = async (category = 'all') => {
    try {
      gamesStore.setLoading(true)

      // Simular llamada API
      await new Promise((resolve) => setTimeout(resolve, 500))

      const mockGames = generateMockGames(category)
      gamesStore.setGames(mockGames)

      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      gamesStore.setLoading(false)
    }
  }

  /**
   * Seleccionar un juego
   */
  const selectGame = (game) => {
    gamesStore.setSelectedGame(game)
  }

  /**
   * Buscar juegos
   */
  const searchGames = (query) => {
    return games.value.filter(
      (game) =>
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.provider.toLowerCase().includes(query.toLowerCase()),
    )
  }

  /**
   * Obtener juegos populares
   */
  const getPopularGames = () => {
    return games.value
      .filter((game) => game.players > 1000)
      .sort((a, b) => b.players - a.players)
      .slice(0, 12)
  }

  /**
   * Obtener juegos nuevos
   */
  const getNewGames = () => {
    return games.value.filter((game) => game.isNew).slice(0, 12)
  }

  return {
    games,
    loading,
    selectedGame,
    fetchGames,
    selectGame,
    searchGames,
    getPopularGames,
    getNewGames,
  }
}

/**
 * Factory para generar juegos mock
 */
function generateMockGames(category) {
  const providers = ['NetEnt', 'Microgaming', 'Pragmatic Play', 'Evolution', "Play'n GO"]
  const gameTypes = {
    slots: ['Book of Ra', 'Starburst', "Gonzo's Quest", 'Mega Moolah', 'Dead or Alive'],
    roulette: ['European Roulette', 'American Roulette', 'French Roulette', 'Lightning Roulette'],
    blackjack: ['Classic Blackjack', 'Blackjack Pro', 'Multi-hand Blackjack', 'European Blackjack'],
    poker: ["Texas Hold'em", 'Caribbean Stud', 'Three Card Poker', "Casino Hold'em"],
  }

  const games = []
  const gameList = category === 'all' ? Object.values(gameTypes).flat() : gameTypes[category] || []

  gameList.forEach((title, index) => {
    games.push({
      id: `game-${category}-${index}`,
      title,
      provider: providers[Math.floor(Math.random() * providers.length)],
      rating: (4 + Math.random()).toFixed(1),
      players: Math.floor(Math.random() * 10000),
      image: null,
      icon: category === 'slots' ? 'slot' : category === 'roulette' ? 'roulette' : 'cards',
      isNew: Math.random() > 0.7,
      isHot: Math.random() > 0.6,
      jackpot: Math.random() > 0.8 ? Math.floor(Math.random() * 1000000) + 100000 : null,
      category,
    })
  })

  return games
}
