<template>
  <div class="min-h-screen bg-black py-12">
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-4xl font-bold text-white mb-8">Términos y Condiciones</h1>

      <AtomCard variant="elevated">
        <div class="p-8 prose prose-invert max-w-none">
          <h2 class="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
          <p class="text-gray-400 mb-6">
            Al acceder y utilizar Casino Virtual, usted acepta estar sujeto a estos términos y
            condiciones de uso.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">2. Elegibilidad</h2>
          <p class="text-gray-400 mb-6">
            Debe tener al menos 18 años de edad para crear una cuenta y jugar en Casino Virtual. Nos
            reservamos el derecho de solicitar prueba de edad en cualquier momento.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">3. Cuenta de Usuario</h2>
          <p class="text-gray-400 mb-6">
            Es responsable de mantener la confidencialidad de su cuenta y contraseña. No debe
            compartir sus credenciales con terceros.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">4. Juego Responsable</h2>
          <p class="text-gray-400 mb-6">
            Promovemos el juego responsable. Si cree que tiene un problema con el juego, contáctenos
            inmediatamente para establecer límites o autoexcluirse.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">5. Depósitos y Retiros</h2>
          <p class="text-gray-400 mb-6">
            Todos los depósitos y retiros están sujetos a verificación de identidad. Los retiros se
            procesan dentro de 24-48 horas.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">6. Bonos y Promociones</h2>
          <p class="text-gray-400 mb-6">
            Los bonos están sujetos a términos específicos. Consulte cada promoción para conocer los
            requisitos de apuesta.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">7. Prohibiciones</h2>
          <p class="text-gray-400 mb-6">
            Está prohibido el uso de software de terceros, bots o cualquier método tramposo. Las
            violaciones resultarán en la suspensión de la cuenta.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">8. Modificaciones</h2>
          <p class="text-gray-400 mb-6">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios
            serán notificados con anticipación.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">9. Contacto</h2>
          <p class="text-gray-400">
            Para cualquier pregunta sobre estos términos, contáctenos en soporte@casino-virtual.com
          </p>
        </div>
      </AtomCard>

      <div class="mt-8 text-center">
        <p class="text-gray-500 text-sm">Última actualización: Marzo 2026</p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Términos y Condiciones - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: 'Términos y condiciones de uso de Casino Virtual. Lee nuestras políticas.',
    },
  ],
})
</script>
