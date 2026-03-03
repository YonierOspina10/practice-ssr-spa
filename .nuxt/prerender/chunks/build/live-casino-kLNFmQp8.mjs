import { _ as _sfc_main$1 } from './Icon-B4vqryPV.mjs';
import { u as useAuth, _ as _sfc_main$2 } from './useAuth-BpAQ_fa7.mjs';
import { _ as _sfc_main$3 } from './GameGrid-Dik9aLbG.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-CKnN_iHi.mjs';
import { u as useToast } from './useToast-Dg_pT9RU.mjs';
import { b as useRouter } from './server.mjs';
import './nuxt-link-CiiWlCDQ.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/ufo/dist/index.mjs';
import './Button-vVGWbpRw.mjs';
import './Card-Ust-d4vw.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/Yonier%20Ospina/first-project/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/devalue/index.js';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "live-casino",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Casino en Vivo - Casino Virtual",
      meta: [
        {
          name: "description",
          content: "Juega con dealers en vivo. Ruleta, blackjack, baccarat y m\xE1s en tiempo real."
        }
      ]
    });
    const { isAuthenticated } = useAuth();
    const toast = useToast();
    const router = useRouter();
    const loading = ref(false);
    const liveGames = ref([
      {
        id: "live-1",
        title: "Ruleta en Vivo",
        provider: "Evolution Gaming",
        rating: 5,
        players: 5200,
        category: "live",
        icon: "roulette",
        isHot: true
      },
      {
        id: "live-2",
        title: "Blackjack en Vivo",
        provider: "Pragmatic Play Live",
        rating: 4.9,
        players: 3800,
        category: "live",
        icon: "cards",
        isHot: true
      },
      {
        id: "live-3",
        title: "Baccarat en Vivo",
        provider: "Evolution Gaming",
        rating: 4.8,
        players: 2100,
        category: "live",
        icon: "cards"
      },
      {
        id: "live-4",
        title: "Craps en Vivo",
        provider: "Ezugi",
        rating: 4.7,
        players: 890,
        category: "live",
        icon: "dice",
        isNew: true
      }
    ]);
    const features = [
      {
        icon: "user",
        title: "Dealers Profesionales",
        description: "Crupieres experimentados y amables"
      },
      {
        icon: "lightning",
        title: "Streaming HD",
        description: "Video de alta calidad sin retrasos"
      },
      {
        icon: "cards",
        title: "Chat en Vivo",
        description: "Interact\xFAa con dealers y jugadores"
      },
      {
        icon: "trophy",
        title: "Torneos Diarios",
        description: "Compite por premios especiales"
      }
    ];
    const handlePlayGame = (game) => {
      if (!isAuthenticated.value) {
        toast.warning("Debes iniciar sesi\xF3n para jugar");
        router.push("/?login=true");
        return;
      }
      router.push(`/play/${game.id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomIcon = _sfc_main$1;
      const _component_AtomBadge = _sfc_main$2;
      const _component_OrganismGameGrid = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black py-8" }, _attrs))}><div class="container mx-auto px-4"><div class="mb-8 text-center"><h1 class="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "fire",
        size: "lg",
        class: "text-red-500"
      }, null, _parent));
      _push(` Casino en Vivo </h1><p class="text-gray-400 text-lg">Experimenta la emoci\xF3n del casino real desde casa</p></div><div class="flex justify-center mb-8">`);
      _push(ssrRenderComponent(_component_AtomBadge, {
        variant: "danger",
        size: "lg",
        pill: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="animate-pulse inline-block w-2 h-2 bg-red-500 rounded-full mr-2"${_scopeId}></span> En Vivo Ahora `);
          } else {
            return [
              createVNode("span", { class: "animate-pulse inline-block w-2 h-2 bg-red-500 rounded-full mr-2" }),
              createTextVNode(" En Vivo Ahora ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_OrganismGameGrid, {
        title: "Juegos en Vivo",
        games: unref(liveGames),
        loading: unref(loading),
        "show-filters": true,
        onPlay: handlePlayGame
      }, null, _parent));
      _push(`<div class="mt-16"><h2 class="text-3xl font-bold text-white text-center mb-8"> Caracter\xEDsticas del Casino en Vivo </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">`);
        _push(ssrRenderComponent(_component_AtomIcon, {
          name: feature.icon,
          size: "lg",
          class: "text-primary-500 mx-auto mb-4"
        }, null, _parent));
        _push(`<h3 class="text-lg font-bold text-white mb-2">${ssrInterpolate(feature.title)}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/live-casino.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=live-casino-kLNFmQp8.mjs.map
