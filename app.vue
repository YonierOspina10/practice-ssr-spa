<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
/**
 * App root component
 * Punto de entrada de la aplicación Nuxt
 */

// Hidratar stores en el cliente
const authStore = useAuthStore()

onMounted(() => {
  authStore.hydrate()
})
</script>
