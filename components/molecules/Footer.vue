<template>
  <footer class="bg-gray-950 border-t border-gray-800 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Acerca de -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <AtomIcon name="crown" size="md" class="text-yellow-500" />
            <h2 class="text-xl font-bold text-white">Casino Virtual</h2>
          </div>
          <p class="text-gray-400 text-sm mb-4">
            La mejor experiencia de casino online. Juega de forma segura y responsable.
          </p>
          <div class="flex gap-3">
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
            >
              <span class="text-white">f</span>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
            >
              <span class="text-white">𝕏</span>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
            >
              <span class="text-white">in</span>
            </a>
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Juegos</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/slots" class="text-gray-400 hover:text-primary-500 transition-colors"
                >Slots</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/roulette"
                class="text-gray-400 hover:text-primary-500 transition-colors"
                >Ruleta</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/blackjack"
                class="text-gray-400 hover:text-primary-500 transition-colors"
                >Black Jack</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/poker" class="text-gray-400 hover:text-primary-500 transition-colors"
                >Poker</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/live-casino"
                class="text-gray-400 hover:text-primary-500 transition-colors"
                >Casino en Vivo</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Soporte -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Soporte</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/help" class="text-gray-400 hover:text-primary-500 transition-colors"
                >Centro de Ayuda</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/terms" class="text-gray-400 hover:text-primary-500 transition-colors"
                >Términos y Condiciones</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/privacy" class="text-gray-400 hover:text-primary-500 transition-colors"
                >Política de Privacidad</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/responsible-gaming"
                class="text-gray-400 hover:text-primary-500 transition-colors"
                >Juego Responsable</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-400 hover:text-primary-500 transition-colors"
                >Contacto</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Información legal -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Legal</h3>
          <p class="text-gray-400 text-sm mb-4">Licencia: Nº 12345/2026</p>
          <p class="text-gray-400 text-sm mb-4">+18 Juega con responsabilidad</p>
          <div class="flex gap-2 flex-wrap">
            <AtomBadge variant="default" size="sm">SSL Seguro</AtomBadge>
            <AtomBadge variant="default" size="sm">Verificado</AtomBadge>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} Casino Virtual. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
