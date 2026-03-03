import { defineStore } from 'pinia'

/**
 * Store de Autenticación
 * Patrón: State Management con Pinia
 */
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    loading: false,
    isAuthenticated: false,
  }),

  getters: {
    userName: (state) => state.user?.name || 'Invitado',
    userBalance: (state) => state.user?.balance || 0,
    userEmail: (state) => state.user?.email || '',
  },

  actions: {
    setUser(user) {
      this.user = user
      this.isAuthenticated = true
    },

    setToken(token) {
      this.token = token
      // En producción, guardar en localStorage o cookie
      if (process.client) {
        localStorage.setItem('auth_token', token)
      }
    },

    setLoading(loading) {
      this.loading = loading
    },

    updateBalance(amount) {
      if (this.user) {
        this.user.balance += amount
      }
    },

    clearAuth() {
      this.user = null
      this.token = null
      this.isAuthenticated = false

      if (process.client) {
        localStorage.removeItem('auth_token')
      }
    },

    // Hidratar el estado desde localStorage
    async hydrate() {
      if (process.client) {
        const token = localStorage.getItem('auth_token')
        if (token) {
          this.token = token
          // Aquí se haría una llamada para validar el token y obtener el usuario
          // Por ahora, simulamos
          this.user = {
            id: '1',
            name: 'Usuario Demo',
            email: 'demo@casino.com',
            balance: 1000,
          }
          this.isAuthenticated = true
        }
      }
    },
  },

  // Persistir en localStorage
  persist: {
    storage: process.client ? localStorage : null,
  },
})
