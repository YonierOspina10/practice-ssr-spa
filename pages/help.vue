<template>
  <div class="min-h-screen bg-black py-12">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">Centro de Ayuda</h1>
        <p class="text-gray-400 text-lg">Encuentra respuestas a tus preguntas frecuentes</p>
      </div>

      <!-- FAQ -->
      <div class="space-y-6">
        <AtomCard variant="elevated">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-2">¿Cómo registro una cuenta?</h2>
            <p class="text-gray-400">
              Haz clic en el botón "Registrarse" en la parte superior derecha, completa el
              formulario con tus datos y verifica tu correo electrónico.
            </p>
          </div>
        </AtomCard>

        <AtomCard variant="elevated">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-2">¿Cómo puedo depositar dinero?</h2>
            <p class="text-gray-400">
              Ve a tu wallet, selecciona "Depositar" y elige entre nuestros métodos de pago:
              tarjetas de crédito, transferencia bancaria o criptomonedas.
            </p>
          </div>
        </AtomCard>

        <AtomCard variant="elevated">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-2">¿Cuánto tiempo tardan los retiros?</h2>
            <p class="text-gray-400">
              Los retiros se procesan en menos de 24 horas. El tiempo de llegada depende del método
              seleccionado.
            </p>
          </div>
        </AtomCard>

        <AtomCard variant="elevated">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-2">¿Los juegos son justos?</h2>
            <p class="text-gray-400">
              Sí, todos nuestros juegos utilizan generadores de números aleatorios (RNG)
              certificados y son auditados regularmente por entidades independientes.
            </p>
          </div>
        </AtomCard>

        <AtomCard variant="elevated">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-2">¿Puedo jugar desde mi móvil?</h2>
            <p class="text-gray-400">
              ¡Por supuesto! Nuestra plataforma está completamente optimizada para dispositivos
              móviles. Juega desde cualquier lugar.
            </p>
          </div>
        </AtomCard>
      </div>

      <!-- Contact Support -->
      <div class="mt-12 text-center">
        <AtomCard variant="glass">
          <div class="p-8">
            <h2 class="text-2xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
            <p class="text-gray-400 mb-6">
              Nuestro equipo de soporte está disponible 24/7 para ayudarte
            </p>
            <AtomButton variant="primary" @click="$router.push('/contact')">
              Contactar Soporte
            </AtomButton>
          </div>
        </AtomCard>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Centro de Ayuda - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: 'Encuentra respuestas a tus preguntas sobre Casino Virtual. Soporte 24/7.',
    },
  ],
})
</script>
