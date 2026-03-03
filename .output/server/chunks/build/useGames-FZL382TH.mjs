import { d as defineStore } from './server.mjs';
import { computed } from 'vue';

const useGamesStore = defineStore("games", {
  state: () => ({
    games: [],
    selectedGame: null,
    loading: false,
    cache: {
      slots: null,
      roulette: null,
      blackjack: null,
      poker: null,
      all: null
    },
    cacheTimestamp: {}
  }),
  getters: {
    gamesByCategory: (state) => (category) => {
      return state.games.filter((game) => game.category === category);
    },
    popularGames: (state) => {
      return state.games.filter((game) => game.players > 1e3).sort((a, b) => b.players - a.players).slice(0, 12);
    },
    newGames: (state) => {
      return state.games.filter((game) => game.isNew).slice(0, 12);
    },
    jackpotGames: (state) => {
      return state.games.filter((game) => game.jackpot).sort((a, b) => b.jackpot - a.jackpot);
    }
  },
  actions: {
    setGames(games) {
      this.games = games;
    },
    setSelectedGame(game) {
      this.selectedGame = game;
    },
    setLoading(loading) {
      this.loading = loading;
    },
    addGame(game) {
      const index = this.games.findIndex((g) => g.id === game.id);
      if (index === -1) {
        this.games.push(game);
      } else {
        this.games[index] = game;
      }
    },
    removeGame(gameId) {
      this.games = this.games.filter((g) => g.id !== gameId);
    },
    // Cache management
    setCacheForCategory(category, games) {
      this.cache[category] = games;
      this.cacheTimestamp[category] = Date.now();
    },
    getCacheForCategory(category, maxAge = 5 * 60 * 1e3) {
      const cache = this.cache[category];
      const timestamp = this.cacheTimestamp[category];
      if (cache && timestamp && Date.now() - timestamp < maxAge) {
        return cache;
      }
      return null;
    },
    clearCache() {
      this.cache = {
        slots: null,
        roulette: null,
        blackjack: null,
        poker: null,
        all: null
      };
      this.cacheTimestamp = {};
    }
  }
});
const useGames = () => {
  const gamesStore = useGamesStore();
  const games = computed(() => gamesStore.games);
  const loading = computed(() => gamesStore.loading);
  const selectedGame = computed(() => gamesStore.selectedGame);
  const fetchGames = async (category = "all") => {
    try {
      gamesStore.setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const mockGames = generateMockGames(category);
      gamesStore.setGames(mockGames);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      gamesStore.setLoading(false);
    }
  };
  const selectGame = (game) => {
    gamesStore.setSelectedGame(game);
  };
  const searchGames = (query) => {
    return games.value.filter(
      (game) => game.title.toLowerCase().includes(query.toLowerCase()) || game.provider.toLowerCase().includes(query.toLowerCase())
    );
  };
  const getPopularGames = () => {
    return games.value.filter((game) => game.players > 1e3).sort((a, b) => b.players - a.players).slice(0, 12);
  };
  const getNewGames = () => {
    return games.value.filter((game) => game.isNew).slice(0, 12);
  };
  return {
    games,
    loading,
    selectedGame,
    fetchGames,
    selectGame,
    searchGames,
    getPopularGames,
    getNewGames
  };
};
function generateMockGames(category) {
  const providers = ["NetEnt", "Microgaming", "Pragmatic Play", "Evolution", "Play'n GO"];
  const gameTypes = {
    slots: ["Book of Ra", "Starburst", "Gonzo's Quest", "Mega Moolah", "Dead or Alive"],
    roulette: ["European Roulette", "American Roulette", "French Roulette", "Lightning Roulette"],
    blackjack: ["Classic Blackjack", "Blackjack Pro", "Multi-hand Blackjack", "European Blackjack"],
    poker: ["Texas Hold'em", "Caribbean Stud", "Three Card Poker", "Casino Hold'em"]
  };
  const games = [];
  const gameList = category === "all" ? Object.values(gameTypes).flat() : gameTypes[category] || [];
  gameList.forEach((title, index) => {
    games.push({
      id: `game-${category}-${index}`,
      title,
      provider: providers[Math.floor(Math.random() * providers.length)],
      rating: (4 + Math.random()).toFixed(1),
      players: Math.floor(Math.random() * 1e4),
      image: null,
      icon: category === "slots" ? "slot" : category === "roulette" ? "roulette" : "cards",
      isNew: Math.random() > 0.7,
      isHot: Math.random() > 0.6,
      jackpot: Math.random() > 0.8 ? Math.floor(Math.random() * 1e6) + 1e5 : null,
      category
    });
  });
  return games;
}

export { useGames as u };
//# sourceMappingURL=useGames-FZL382TH.mjs.map
