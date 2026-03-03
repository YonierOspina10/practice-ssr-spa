import { _ as _sfc_main$1 } from './Icon-B4vqryPV.mjs';
import { _ as _sfc_main$2 } from './GameGrid-Dik9aLbG.mjs';
import { _ as _sfc_main$3 } from './Card-Ust-d4vw.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-CKnN_iHi.mjs';
import { u as useAuth } from './useAuth-BpAQ_fa7.mjs';
import { u as useToast } from './useToast-Dg_pT9RU.mjs';
import { b as useRouter } from './server.mjs';
import './nuxt-link-CiiWlCDQ.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/ufo/dist/index.mjs';
import './Button-vVGWbpRw.mjs';
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
  __name: "blackjack",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Blackjack - Casino Virtual",
      meta: [
        {
          name: "description",
          content: "Juega al blackjack online. Mesas cl\xE1sicas y variantes especiales."
        }
      ]
    });
    const { isAuthenticated } = useAuth();
    const toast = useToast();
    const router = useRouter();
    const loading = ref(false);
    const blackjackGames = ref([
      {
        id: "bj-1",
        title: "Blackjack Cl\xE1sico",
        provider: "Evolution Gaming",
        rating: 4.9,
        players: 2500,
        category: "blackjack",
        icon: "cards",
        minBet: 5,
        maxBet: 1e3
      },
      {
        id: "bj-2",
        title: "Blackjack VIP",
        provider: "NetEnt",
        rating: 4.8,
        players: 1200,
        category: "blackjack",
        icon: "cards",
        minBet: 100,
        maxBet: 1e4,
        isHot: true
      },
      {
        id: "bj-3",
        title: "Perfect Pairs Blackjack",
        provider: "Pragmatic Play",
        rating: 4.7,
        players: 980,
        category: "blackjack",
        icon: "cards",
        minBet: 1,
        maxBet: 500,
        isNew: true
      }
    ]);
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
      const _component_OrganismGameGrid = _sfc_main$2;
      const _component_AtomCard = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black py-8" }, _attrs))}><div class="container mx-auto px-4"><div class="mb-8 text-center"><h1 class="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "cards",
        size: "lg",
        class: "text-primary-500"
      }, null, _parent));
      _push(` Blackjack </h1><p class="text-gray-400 text-lg">El juego de cartas m\xE1s popular del casino</p></div>`);
      _push(ssrRenderComponent(_component_OrganismGameGrid, {
        title: "Mesas Disponibles",
        games: unref(blackjackGames),
        loading: unref(loading),
        onPlay: handlePlayGame
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">`);
      _push(ssrRenderComponent(_component_AtomCard, { variant: "glass" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "trophy",
              size: "lg",
              class: "text-yellow-500 mx-auto mb-3"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-xl font-bold text-white mb-2"${_scopeId}>Objetivo</h3><p class="text-gray-400 text-sm"${_scopeId}> Consigue 21 o ac\xE9rcate m\xE1s que el dealer sin pasarte </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 text-center" }, [
                createVNode(_component_AtomIcon, {
                  name: "trophy",
                  size: "lg",
                  class: "text-yellow-500 mx-auto mb-3"
                }),
                createVNode("h3", { class: "text-xl font-bold text-white mb-2" }, "Objetivo"),
                createVNode("p", { class: "text-gray-400 text-sm" }, " Consigue 21 o ac\xE9rcate m\xE1s que el dealer sin pasarte ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomCard, { variant: "glass" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "coins",
              size: "lg",
              class: "text-yellow-500 mx-auto mb-3"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-xl font-bold text-white mb-2"${_scopeId}>Pagos</h3><p class="text-gray-400 text-sm"${_scopeId}>Blackjack paga 3:2, victoria normal 1:1</p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 text-center" }, [
                createVNode(_component_AtomIcon, {
                  name: "coins",
                  size: "lg",
                  class: "text-yellow-500 mx-auto mb-3"
                }),
                createVNode("h3", { class: "text-xl font-bold text-white mb-2" }, "Pagos"),
                createVNode("p", { class: "text-gray-400 text-sm" }, "Blackjack paga 3:2, victoria normal 1:1")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomCard, { variant: "glass" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "lightning",
              size: "lg",
              class: "text-yellow-500 mx-auto mb-3"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-xl font-bold text-white mb-2"${_scopeId}>Estrategia</h3><p class="text-gray-400 text-sm"${_scopeId}> Usa la estrategia b\xE1sica para maximizar tus ganancias </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 text-center" }, [
                createVNode(_component_AtomIcon, {
                  name: "lightning",
                  size: "lg",
                  class: "text-yellow-500 mx-auto mb-3"
                }),
                createVNode("h3", { class: "text-xl font-bold text-white mb-2" }, "Estrategia"),
                createVNode("p", { class: "text-gray-400 text-sm" }, " Usa la estrategia b\xE1sica para maximizar tus ganancias ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blackjack.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blackjack-DePZGO2_.mjs.map
