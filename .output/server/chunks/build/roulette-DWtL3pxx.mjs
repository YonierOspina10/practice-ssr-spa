import { _ as _sfc_main$1 } from './Icon-B4vqryPV.mjs';
import { _ as _sfc_main$2 } from './Card-Ust-d4vw.mjs';
import { u as useAuth, _ as _sfc_main$3 } from './useAuth-BpAQ_fa7.mjs';
import { _ as _sfc_main$4 } from './Button-vVGWbpRw.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3-CKnN_iHi.mjs';
import { u as useToast } from './useToast-Dg_pT9RU.mjs';
import { b as useRouter } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "roulette",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Ruleta - Casino Virtual",
      meta: [
        {
          name: "description",
          content: "Juega a la ruleta online. Mesas con diferentes l\xEDmites de apuesta."
        }
      ]
    });
    const { isAuthenticated } = useAuth();
    const toast = useToast();
    const router = useRouter();
    const tables = ref([
      {
        id: 1,
        name: "Ruleta Europea",
        minBet: 1,
        maxBet: 1e3,
        players: 5,
        maxPlayers: 7,
        status: "open"
      },
      {
        id: 2,
        name: "Ruleta Americana",
        minBet: 5,
        maxBet: 5e3,
        players: 6,
        maxPlayers: 7,
        status: "open"
      },
      {
        id: 3,
        name: "Ruleta VIP",
        minBet: 100,
        maxBet: 5e4,
        players: 7,
        maxPlayers: 7,
        status: "full"
      }
    ]);
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      }).format(value);
    };
    const joinTable = (table) => {
      if (!isAuthenticated.value) {
        toast.warning("Debes iniciar sesi\xF3n para jugar");
        router.push("/?login=true");
        return;
      }
      toast.success(`Uni\xE9ndote a ${table.name}...`);
      router.push(`/play/roulette/${table.id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomIcon = _sfc_main$1;
      const _component_AtomCard = _sfc_main$2;
      const _component_AtomBadge = _sfc_main$3;
      const _component_AtomButton = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black py-8" }, _attrs))}><div class="container mx-auto px-4"><div class="mb-8 text-center"><h1 class="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "roulette",
        size: "lg",
        class: "text-red-500 animate-spin-slow"
      }, null, _parent));
      _push(` Ruleta </h1><p class="text-gray-400 text-lg">Haz tu apuesta y prueba tu suerte</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"><!--[-->`);
      ssrRenderList(unref(tables), (table) => {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(_component_AtomCard, {
          variant: "elevated",
          hoverable: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-6"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><h3 class="text-xl font-bold text-white"${_scopeId}>${ssrInterpolate(table.name)}</h3>`);
              _push2(ssrRenderComponent(_component_AtomBadge, {
                variant: table.status === "open" ? "success" : "danger"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(table.status === "open" ? "Abierta" : "Completa")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(table.status === "open" ? "Abierta" : "Completa"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="space-y-3 mb-4"${_scopeId}><div class="flex justify-between text-sm"${_scopeId}><span class="text-gray-400"${_scopeId}>Apuesta m\xEDnima:</span><span class="text-white font-semibold"${_scopeId}>${ssrInterpolate(formatCurrency(table.minBet))}</span></div><div class="flex justify-between text-sm"${_scopeId}><span class="text-gray-400"${_scopeId}>Apuesta m\xE1xima:</span><span class="text-white font-semibold"${_scopeId}>${ssrInterpolate(formatCurrency(table.maxBet))}</span></div><div class="flex justify-between text-sm"${_scopeId}><span class="text-gray-400"${_scopeId}>Jugadores:</span><span class="text-white font-semibold"${_scopeId}>${ssrInterpolate(table.players)}/${ssrInterpolate(table.maxPlayers)}</span></div></div>`);
              _push2(ssrRenderComponent(_component_AtomButton, {
                variant: table.status === "open" ? "gold" : "secondary",
                size: "md",
                "full-width": "",
                disabled: table.status !== "open",
                onClick: ($event) => joinTable(table)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(table.status === "open" ? "Unirse a la mesa" : "Mesa completa")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(table.status === "open" ? "Unirse a la mesa" : "Mesa completa"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "p-6" }, [
                  createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                    createVNode("h3", { class: "text-xl font-bold text-white" }, toDisplayString(table.name), 1),
                    createVNode(_component_AtomBadge, {
                      variant: table.status === "open" ? "success" : "danger"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(table.status === "open" ? "Abierta" : "Completa"), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant"])
                  ]),
                  createVNode("div", { class: "space-y-3 mb-4" }, [
                    createVNode("div", { class: "flex justify-between text-sm" }, [
                      createVNode("span", { class: "text-gray-400" }, "Apuesta m\xEDnima:"),
                      createVNode("span", { class: "text-white font-semibold" }, toDisplayString(formatCurrency(table.minBet)), 1)
                    ]),
                    createVNode("div", { class: "flex justify-between text-sm" }, [
                      createVNode("span", { class: "text-gray-400" }, "Apuesta m\xE1xima:"),
                      createVNode("span", { class: "text-white font-semibold" }, toDisplayString(formatCurrency(table.maxBet)), 1)
                    ]),
                    createVNode("div", { class: "flex justify-between text-sm" }, [
                      createVNode("span", { class: "text-gray-400" }, "Jugadores:"),
                      createVNode("span", { class: "text-white font-semibold" }, toDisplayString(table.players) + "/" + toDisplayString(table.maxPlayers), 1)
                    ])
                  ]),
                  createVNode(_component_AtomButton, {
                    variant: table.status === "open" ? "gold" : "secondary",
                    size: "md",
                    "full-width": "",
                    disabled: table.status !== "open",
                    onClick: ($event) => joinTable(table)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(table.status === "open" ? "Unirse a la mesa" : "Mesa completa"), 1)
                    ]),
                    _: 2
                  }, 1032, ["variant", "disabled", "onClick"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_AtomCard, { variant: "glass" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-8"${_scopeId}><h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "cards",
              size: "md",
              class: "text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(` Reglas de la Ruleta </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300"${_scopeId}><div${_scopeId}><h3 class="font-semibold text-white mb-3"${_scopeId}>Tipos de apuestas</h3><ul class="space-y-2 text-sm"${_scopeId}><li${_scopeId}>\u2022 Rojo/Negro: Paga 1:1</li><li${_scopeId}>\u2022 Par/Impar: Paga 1:1</li><li${_scopeId}>\u2022 Alto/Bajo: Paga 1:1</li><li${_scopeId}>\u2022 Docenas: Paga 2:1</li><li${_scopeId}>\u2022 Columnas: Paga 2:1</li><li${_scopeId}>\u2022 N\xFAmero \xFAnico: Paga 35:1</li></ul></div><div${_scopeId}><h3 class="font-semibold text-white mb-3"${_scopeId}>C\xF3mo jugar</h3><ul class="space-y-2 text-sm"${_scopeId}><li${_scopeId}>1. Selecciona tu apuesta y cantidad</li><li${_scopeId}>2. Coloca tus fichas en el tapete</li><li${_scopeId}>3. Espera a que gire la ruleta</li><li${_scopeId}>4. Cobra tus ganancias si aciertas</li></ul></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-8" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-6 flex items-center gap-2" }, [
                  createVNode(_component_AtomIcon, {
                    name: "cards",
                    size: "md",
                    class: "text-primary-500"
                  }),
                  createTextVNode(" Reglas de la Ruleta ")
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-semibold text-white mb-3" }, "Tipos de apuestas"),
                    createVNode("ul", { class: "space-y-2 text-sm" }, [
                      createVNode("li", null, "\u2022 Rojo/Negro: Paga 1:1"),
                      createVNode("li", null, "\u2022 Par/Impar: Paga 1:1"),
                      createVNode("li", null, "\u2022 Alto/Bajo: Paga 1:1"),
                      createVNode("li", null, "\u2022 Docenas: Paga 2:1"),
                      createVNode("li", null, "\u2022 Columnas: Paga 2:1"),
                      createVNode("li", null, "\u2022 N\xFAmero \xFAnico: Paga 35:1")
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-semibold text-white mb-3" }, "C\xF3mo jugar"),
                    createVNode("ul", { class: "space-y-2 text-sm" }, [
                      createVNode("li", null, "1. Selecciona tu apuesta y cantidad"),
                      createVNode("li", null, "2. Coloca tus fichas en el tapete"),
                      createVNode("li", null, "3. Espera a que gire la ruleta"),
                      createVNode("li", null, "4. Cobra tus ganancias si aciertas")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/roulette.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=roulette-DWtL3pxx.mjs.map
