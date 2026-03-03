<template>
  <div class="min-h-screen bg-black py-12">
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>

      <AtomCard variant="elevated">
        <div class="p-8 prose prose-invert max-w-none">
          <h2 class="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
          <p class="text-gray-400 mb-6">
            Recopilamos información personal como nombre, dirección de correo electrónico, fecha de
            nacimiento y datos de pago cuando crea una cuenta.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">2. Uso de la Información</h2>
          <p class="text-gray-400 mb-6">
            Utilizamos su información para procesar transacciones, verificar su identidad, prevenir
            fraudes y mejorar nuestros servicios.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">3. Compartir Información</h2>
          <p class="text-gray-400 mb-6">
            No vendemos ni compartimos su información personal con terceros, excepto cuando sea
            requerido por ley o para procesar pagos.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">4. Cookies</h2>
          <p class="text-gray-400 mb-6">
            Utilizamos cookies para mejorar su experiencia de usuario y analizar el tráfico del
            sitio. Puede desactivar las cookies en la configuración de su navegador.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">5. Seguridad de Datos</h2>
          <p class="text-gray-400 mb-6">
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información
            contra acceso no autorizado.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">6. Sus Derechos</h2>
          <p class="text-gray-400 mb-6">
            Tiene derecho a acceder, corregir o eliminar su información personal en cualquier
            momento contactándonos.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">7. Retención de Datos</h2>
          <p class="text-gray-400 mb-6">
            Conservamos su información durante el tiempo necesario para cumplir con obligaciones
            legales y resolver disputas.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">8. Menores de Edad</h2>
          <p class="text-gray-400 mb-6">
            No recopilamos intencionalmente información de menores de 18 años. Si descubrimos que un
            menor ha proporcionado información, la eliminaremos inmediatamente.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">9. Cambios en la Política</h2>
          <p class="text-gray-400 mb-6">
            Podemos actualizar esta política periódicamente. Notificaremos cambios significativos
            por correo electrónico.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4">10. Contacto</h2>
          <p class="text-gray-400">
            Para consultas sobre privacidad, escriba a privacidad@casino-virtual.com
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
  title: 'Política de Privacidad - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: 'Política de privacidad de Casino Virtual. Conoce cómo protegemos tus datos.',
    },
  ],
})
</script>
