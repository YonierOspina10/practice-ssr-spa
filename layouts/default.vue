<template>
  <div>
    <MoleculeNavbar
      :is-authenticated="isAuthenticated"
      :balance="userBalance"
      @login="handleLogin"
      @register="handleRegister"
    />

    <main>
      <slot />
    </main>

    <MoleculeFooter />
  </div>
</template>

<script setup>
/**
 * Layout principal del sitio
 * Contiene navbar y footer
 */

const { isAuthenticated, user } = useAuth()

const userBalance = computed(() => user.value?.balance || 0)

const handleLogin = () => {
  // Implementar modal o redirección
  console.log('Login modal')
}

const handleRegister = () => {
  // Implementar modal o redirección
  console.log('Register modal')
}
</script>
