# Casino Virtual - Arquitectura y Documentación

## 🏗️ Arquitectura del Proyecto

Este proyecto implementa un sitio de casino virtual con **Nuxt 3**, utilizando un enfoque híbrido de **SSR** (Server-Side Rendering) para la landing page y **SPA** (Single Page Application) para el resto de páginas.

### Stack Tecnológico

- **Framework**: Nuxt 3
- **UI Framework**: Vue 3 (Composition API)
- **State Management**: Pinia
- **Styling**: Tailwind CSS + SCSS
- **Utilities**: VueUse
- **Build Tool**: Vite

## 📁 Estructura del Proyecto

```
casino-virtual/
├── assets/
│   └── styles/
│       ├── main.scss          # Estilos globales
│       └── variables.scss     # Variables SCSS
├── components/
│   ├── atoms/                 # Componentes básicos reutilizables
│   │   ├── Button.vue
│   │   ├── Input.vue
│   │   ├── Icon.vue
│   │   ├── Card.vue
│   │   └── Badge.vue
│   ├── molecules/             # Combinación de átomos
│   │   ├── GameCard.vue
│   │   ├── Navbar.vue
│   │   └── Footer.vue
│   ├── organisms/             # Componentes complejos
│   │   ├── GameGrid.vue
│   │   ├── HeroSection.vue
│   │   └── JackpotDisplay.vue
│   └── templates/             # Plantillas de página
├── composables/               # Lógica reutilizable
│   ├── useAuth.js
│   ├── useGames.js
│   └── useToast.js
├── layouts/
│   └── default.vue            # Layout principal
├── pages/
│   ├── index.vue              # Landing (SSR)
│   ├── slots/
│   │   └── index.vue          # Slots (SPA)
│   ├── roulette.vue           # Ruleta (SPA)
│   ├── blackjack.vue          # Blackjack (SPA)
│   └── live-casino.vue        # Casino en vivo (SPA)
├── stores/
│   ├── auth.js                # Store de autenticación
│   ├── games.js               # Store de juegos
│   └── preferences.js         # Store de preferencias
├── nuxt.config.ts             # Configuración de Nuxt
├── tailwind.config.js         # Configuración de Tailwind
└── package.json
```

## 🎨 Atomic Design Pattern

El proyecto sigue el patrón de **Atomic Design** para organizar los componentes:

### Átomos (Atoms)

Componentes básicos e indivisibles:

- `Button`: Botones con múltiples variantes
- `Input`: Campos de entrada
- `Icon`: Sistema de iconos SVG
- `Card`: Contenedor básico
- `Badge`: Etiquetas informativas

### Moléculas (Molecules)

Combinaciones de átomos:

- `GameCard`: Tarjeta de juego
- `Navbar`: Barra de navegación
- `Footer`: Pie de página

### Organismos (Organisms)

Componentes complejos:

- `GameGrid`: Grilla de juegos con filtros y paginación
- `HeroSection`: Sección hero de la landing
- `JackpotDisplay`: Visualización de jackpots

## 🔄 Patrones de Diseño Implementados

### 1. **Repository Pattern**

Los composables actúan como repositorios que abstraen la lógica de acceso a datos:

```javascript
const { fetchGames, games } = useGames()
```

### 2. **State Management Pattern (Pinia)**

Gestión centralizada del estado con stores:

```javascript
const authStore = useAuthStore()
```

### 3. **Composition API Pattern**

Uso de Vue 3 Composition API para lógica reutilizable:

```javascript
const { isAuthenticated, login, logout } = useAuth()
```

### 4. **Factory Pattern**

Generación dinámica de entidades (juegos, usuarios):

```javascript
function generateMockGames(category) { ... }
```

### 5. **Observer Pattern**

Sistema de notificaciones reactivo:

```javascript
const toast = useToast()
toast.success('¡Operación exitosa!')
```

## ⚡ Optimización de Performance

### SSR para la Landing Page

- **Mejora del LCP** (Largest Contentful Paint)
- Pre-renderización del contenido crítico
- SEO optimizado

```typescript
// nuxt.config.ts
routeRules: {
  '/': { ssr: true, prerender: true }
}
```

### SPA para Páginas del Casino

- **Mejor interactividad**
- Transiciones fluidas
- Menor carga del servidor

```typescript
routeRules: {
  '/slots/**': { ssr: false },
  '/roulette': { ssr: false },
  // ...
}
```

### Optimizaciones Adicionales

- **Code Splitting**: División de chunks por ruta
- **Lazy Loading**: Carga diferida de componentes
- **Image Optimization**: Imágenes optimizadas
- **CSS Purging**: Tailwind elimina CSS no utilizado
- **Compresión**: Gzip/Brotli en producción

## 🚀 Instalación y Desarrollo

### Requisitos

- Node.js >= 20.19.0

### Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## 📊 Características Principales

### ✅ Funcionalidades Implementadas

- [x] Landing page con SSR optimizado
- [x] Sistema de componentes atómicos
- [x] Múltiples páginas de juegos (SPA)
- [x] Sistema de autenticación (mock)
- [x] Gestión de estado con Pinia
- [x] Sistema de notificaciones
- [x] Navegación responsive
- [x] Diseño dark mode
- [x] Animaciones y transiciones
- [x] SEO optimizado

### 🎯 Páginas Implementadas

1. **Landing (/)** - SSR
   - Hero section optimizado
   - Display de jackpots
   - Juegos populares
   - Juegos nuevos

2. **Slots (/slots)** - SPA
   - Grilla de juegos
   - Búsqueda y filtros
   - Paginación

3. **Ruleta (/roulette)** - SPA
   - Mesas disponibles
   - Reglas del juego
   - Diferentes límites

4. **Blackjack (/blackjack)** - SPA
   - Variantes del juego
   - Información estratégica

5. **Casino en Vivo (/live-casino)** - SPA
   - Juegos con dealers en vivo
   - Streaming HD

## 🎨 Sistema de Diseño

### Colores

```scss
$primary-color: #f97316; // Orange
$casino-green: #0f7b3e; // Green
$casino-red: #dc143c; // Red
$accent-gold: #ffd700; // Gold
```

### Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## 🔐 Seguridad

- Validación de formularios
- Protección de rutas
- Tokens JWT (preparado)
- CSP headers (configurar en producción)

## 📱 Responsive Design

Totalmente responsive con diseño mobile-first:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🧪 Testing (Próximos pasos)

Estructura preparada para:

- Unit tests (Vitest)
- Component tests (Vue Test Utils)
- E2E tests (Playwright)

## 📈 Métricas de Performance

Objetivos:

- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Lighthouse Score > 90

## 🤝 Contribución

Este proyecto sigue las mejores prácticas de:

- Clean Code
- SOLID Principles
- Atomic Design
- Vue.js Style Guide
