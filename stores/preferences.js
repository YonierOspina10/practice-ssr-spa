import { defineStore } from 'pinia'

/**
 * Store de Preferencias de Usuario
 * Manejo de configuración y UI
 */
export const usePreferencesStore = defineStore('preferences', {
  state: () => ({
    theme: 'dark',
    language: 'es',
    soundEnabled: true,
    musicEnabled: true,
    notificationsEnabled: true,
    animationsEnabled: true,
  }),

  getters: {
    isDarkTheme: (state) => state.theme === 'dark',
    currentLanguage: (state) => state.language,
  },

  actions: {
    setTheme(theme) {
      this.theme = theme
    },

    setLanguage(language) {
      this.language = language
    },

    toggleSound() {
      this.soundEnabled = !this.soundEnabled
    },

    toggleMusic() {
      this.musicEnabled = !this.musicEnabled
    },

    toggleNotifications() {
      this.notificationsEnabled = !this.notificationsEnabled
    },

    toggleAnimations() {
      this.animationsEnabled = !this.animationsEnabled
    },
  },

  persist: {
    storage: process.client ? localStorage : null,
  },
})
