<template>
  <div class="min-h-screen bg-black py-12">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-12">
        <AtomIcon name="trophy" size="xl" class="text-primary-500 mx-auto mb-4" />
        <h1 class="text-4xl font-bold text-white mb-4">Juego Responsable</h1>
        <p class="text-gray-400 text-lg">El juego debe ser divertido. Juega con responsabilidad.</p>
      </div>

      <!-- Warning Banner -->
      <AtomCard variant="elevated" class="mb-8">
        <div class="p-6 bg-yellow-600/10 border-l-4 border-yellow-600">
          <h2 class="text-xl font-bold text-yellow-500 mb-2">+18 Solo para Adultos</h2>
          <p class="text-gray-300">
            El juego está diseñado como entretenimiento para adultos mayores de 18 años. Nunca
            juegues con dinero que no puedas permitirte perder.
          </p>
        </div>
      </AtomCard>

      <!-- Content -->
      <div class="space-y-8">
        <AtomCard variant="elevated">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Señales de Alerta</h2>
            <p class="text-gray-400 mb-4">Detente si identificas alguna de estas señales:</p>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-red-500">•</span>
                Gastas más dinero del que planeabas
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">•</span>
                Juegas para recuperar pérdidas
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">•</span>
                Descuidas trabajo, familia o relaciones
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">•</span>
                Pides dinero prestado para jugar
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">•</span>
                Sientes ansiedad o culpa relacionada con el juego
              </li>
            </ul>
          </div>
        </AtomCard>

        <AtomCard variant="elevated">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Herramientas de Autocontrol</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">Límites de Depósito</h3>
                <p class="text-gray-400">
                  Establece límites diarios, semanales o mensuales en tus depósitos.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">Límites de Tiempo</h3>
                <p class="text-gray-400">
                  Configura recordatorios para controlar el tiempo que pasas jugando.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">Autoexclusión</h3>
                <p class="text-gray-400">
                  Excluye tu cuenta temporalmente o permanentemente si lo necesitas.
                </p>
              </div>
            </div>
          </div>
        </AtomCard>

        <AtomCard variant="elevated">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Recursos de Ayuda</h2>
            <p class="text-gray-400 mb-4">
              Si crees que tienes un problema con el juego, hay ayuda disponible:
            </p>
            <div class="space-y-3">
              <div class="p-4 bg-gray-800 rounded-lg">
                <h3 class="font-semibold text-white mb-1">Jugadores Anónimos</h3>
                <p class="text-gray-400 text-sm">Tel: 1-800-XXX-XXXX</p>
                <p class="text-gray-400 text-sm">www.jugadoresanonimos.org</p>
              </div>
              <div class="p-4 bg-gray-800 rounded-lg">
                <h3 class="font-semibold text-white mb-1">Línea de Ayuda Nacional</h3>
                <p class="text-gray-400 text-sm">Tel: 1-800-XXX-XXXX</p>
                <p class="text-gray-400 text-sm">Disponible 24/7</p>
              </div>
            </div>
          </div>
        </AtomCard>

        <AtomCard variant="glass">
          <div class="p-8 text-center">
            <h2 class="text-2xl font-bold text-white mb-4">¿Necesitas Ayuda?</h2>
            <p class="text-gray-400 mb-6">
              Nuestro equipo está aquí para ayudarte. Contacta con nosotros de forma confidencial.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <AtomButton variant="primary" @click="$router.push('/contact')">
                Contactar Soporte
              </AtomButton>
              <AtomButton variant="danger"> Autoexcluirse </AtomButton>
            </div>
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
  title: 'Juego Responsable - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: 'Juega con responsabilidad. Herramientas y recursos para mantener el control.',
    },
  ],
})
</script>
