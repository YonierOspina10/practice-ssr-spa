<template>
  <div class="min-h-screen bg-black py-8">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
          <AtomIcon name="cards" size="lg" class="text-primary-500" />
          Poker
        </h1>
        <p class="text-gray-400 text-lg">Demuestra tu habilidad en nuestras mesas de poker</p>
      </div>

      <!-- Coming Soon -->
      <div class="max-w-2xl mx-auto text-center py-20">
        <AtomIcon name="cards" size="xl" class="text-primary-500 mx-auto mb-6" />
        <h2 class="text-3xl font-bold text-white mb-4">Próximamente</h2>
        <p class="text-gray-400 text-lg mb-8">
          Estamos trabajando en traerte las mejores mesas de poker online. Regresa pronto para
          disfrutar de Texas Hold'em, Omaha y más.
        </p>
        <AtomButton variant="gold" @click="$router.push('/')"> Volver al Inicio </AtomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Poker - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: "Próximamente: Mesas de poker online con Texas Hold'em, Omaha y más.",
    },
  ],
})
</script>
