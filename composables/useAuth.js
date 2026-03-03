/**
 * Composable para manejo de autenticación
 * Patrón: Repository Pattern con estado reactivo
 */
export const useAuth = () => {
  const authStore = useAuthStore()
  const router = useRouter()

  const isAuthenticated = computed(() => authStore.isAuthenticated)
  const user = computed(() => authStore.user)
  const loading = computed(() => authStore.loading)

  const login = async (credentials) => {
    try {
      authStore.setLoading(true)
      // Simular llamada API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const userData = {
        id: '1',
        name: credentials.email.split('@')[0],
        email: credentials.email,
        balance: 1000,
        avatar: null,
      }

      authStore.setUser(userData)
      authStore.setToken('mock-jwt-token')

      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      authStore.setLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      authStore.setLoading(true)
      // Simular llamada API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        balance: 0,
        avatar: null,
      }

      authStore.setUser(newUser)
      authStore.setToken('mock-jwt-token')

      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      authStore.setLoading(false)
    }
  }

  const logout = async () => {
    authStore.clearAuth()
    await router.push('/')
  }

  return {
    isAuthenticated,
    user,
    loading,
    login,
    register,
    logout,
  }
}
