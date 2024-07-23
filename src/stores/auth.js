import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false
  }),
  actions: {
    login() {
      this.isAuthenticated = true
    },
    logout() {
      this.isAuthenticated = false
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        name: 'local',
        paths: ['isAuthenticated']
      }
    ]
  }
})
