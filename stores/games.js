import { defineStore } from 'pinia'

/**
 * Store de Juegos
 * Patrón: State Management con cache
 */
export const useGamesStore = defineStore('games', {
  state: () => ({
    games: [],
    selectedGame: null,
    loading: false,
    cache: {
      slots: null,
      roulette: null,
      blackjack: null,
      poker: null,
      all: null,
    },
    cacheTimestamp: {},
  }),

  getters: {
    gamesByCategory: (state) => (category) => {
      return state.games.filter((game) => game.category === category)
    },

    popularGames: (state) => {
      return state.games
        .filter((game) => game.players > 1000)
        .sort((a, b) => b.players - a.players)
        .slice(0, 12)
    },

    newGames: (state) => {
      return state.games.filter((game) => game.isNew).slice(0, 12)
    },

    jackpotGames: (state) => {
      return state.games.filter((game) => game.jackpot).sort((a, b) => b.jackpot - a.jackpot)
    },
  },

  actions: {
    setGames(games) {
      this.games = games
    },

    setSelectedGame(game) {
      this.selectedGame = game
    },

    setLoading(loading) {
      this.loading = loading
    },

    addGame(game) {
      const index = this.games.findIndex((g) => g.id === game.id)
      if (index === -1) {
        this.games.push(game)
      } else {
        this.games[index] = game
      }
    },

    removeGame(gameId) {
      this.games = this.games.filter((g) => g.id !== gameId)
    },

    // Cache management
    setCacheForCategory(category, games) {
      this.cache[category] = games
      this.cacheTimestamp[category] = Date.now()
    },

    getCacheForCategory(category, maxAge = 5 * 60 * 1000) {
      const cache = this.cache[category]
      const timestamp = this.cacheTimestamp[category]

      if (cache && timestamp && Date.now() - timestamp < maxAge) {
        return cache
      }
      return null
    },

    clearCache() {
      this.cache = {
        slots: null,
        roulette: null,
        blackjack: null,
        poker: null,
        all: null,
      }
      this.cacheTimestamp = {}
    },
  },
})
