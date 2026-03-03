<template>
  <div class="min-h-screen bg-black py-12">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">Contáctanos</h1>
        <p class="text-gray-400 text-lg">Estamos aquí para ayudarte. Envíanos tu consulta.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Formulario -->
        <AtomCard variant="elevated">
          <div class="p-8">
            <h2 class="text-2xl font-bold text-white mb-6">Enviar Mensaje</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <AtomInput
                id="name"
                v-model="form.name"
                label="Nombre"
                placeholder="Tu nombre completo"
                required
              />

              <AtomInput
                id="email"
                v-model="form.email"
                type="email"
                label="Email"
                placeholder="tu@email.com"
                required
              />

              <AtomInput
                id="subject"
                v-model="form.subject"
                label="Asunto"
                placeholder="¿En qué podemos ayudarte?"
                required
              />

              <div class="relative">
                <label
                  for="message"
                  class="absolute -top-2.5 left-3 bg-gray-900 px-2 text-sm font-medium text-gray-300"
                >
                  Mensaje
                  <span class="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:border-primary-500 focus:ring-primary-500/50"
                  placeholder="Describe tu consulta..."
                  required
                ></textarea>
              </div>

              <AtomButton type="submit" variant="primary" full-width :loading="loading">
                Enviar Mensaje
              </AtomButton>
            </form>
          </div>
        </AtomCard>

        <!-- Información de Contacto -->
        <div class="space-y-6">
          <AtomCard variant="elevated">
            <div class="p-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <AtomIcon name="user" size="md" class="text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">Soporte 24/7</h3>
                  <p class="text-gray-400">
                    Nuestro equipo está disponible todos los días del año para ayudarte con
                    cualquier consulta.
                  </p>
                </div>
              </div>
            </div>
          </AtomCard>

          <AtomCard variant="elevated">
            <div class="p-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-white text-xl">✉</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">Email</h3>
                  <p class="text-gray-400">soporte@casino-virtual.com</p>
                  <p class="text-gray-500 text-sm mt-1">Respuesta en menos de 24 horas</p>
                </div>
              </div>
            </div>
          </AtomCard>

          <AtomCard variant="elevated">
            <div class="p-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-white text-xl">💬</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">Chat en Vivo</h3>
                  <p class="text-gray-400 mb-3">Habla directamente con un agente</p>
                  <AtomButton variant="primary" size="sm"> Iniciar Chat </AtomButton>
                </div>
              </div>
            </div>
          </AtomCard>

          <AtomCard variant="glass">
            <div class="p-6">
              <h3 class="text-lg font-bold text-white mb-4">Horario de Atención</h3>
              <div class="space-y-2 text-gray-400">
                <div class="flex justify-between">
                  <span>Lunes - Domingo:</span>
                  <span class="text-white font-semibold">24 horas</span>
                </div>
                <div class="flex justify-between">
                  <span>Chat en vivo:</span>
                  <span class="text-green-500 font-semibold">● Online</span>
                </div>
              </div>
            </div>
          </AtomCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Contacto - Casino Virtual',
  meta: [
    {
      name: 'description',
      content: 'Contacta con Casino Virtual. Soporte 24/7 disponible para ayudarte.',
    },
  ],
})

const toast = useToast()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true

  // Simular envío
  await new Promise((resolve) => setTimeout(resolve, 1500))

  toast.success('Mensaje enviado correctamente. Te responderemos pronto.')

  // Limpiar formulario
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  loading.value = false
}
</script>
