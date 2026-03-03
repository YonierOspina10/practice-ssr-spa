import { _ as _sfc_main$1 } from './Icon-B4vqryPV.mjs';
import { _ as _sfc_main$2 } from './Card-Ust-d4vw.mjs';
import { _ as _sfc_main$3 } from './Button-vVGWbpRw.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './v3-CKnN_iHi.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "responsible-gaming",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Juego Responsable - Casino Virtual",
      meta: [
        {
          name: "description",
          content: "Juega con responsabilidad. Herramientas y recursos para mantener el control."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomIcon = _sfc_main$1;
      const _component_AtomCard = _sfc_main$2;
      const _component_AtomButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black py-12" }, _attrs))}><div class="container mx-auto px-4 max-w-4xl"><div class="text-center mb-12">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "trophy",
        size: "xl",
        class: "text-primary-500 mx-auto mb-4"
      }, null, _parent));
      _push(`<h1 class="text-4xl font-bold text-white mb-4">Juego Responsable</h1><p class="text-gray-400 text-lg">El juego debe ser divertido. Juega con responsabilidad.</p></div>`);
      _push(ssrRenderComponent(_component_AtomCard, {
        variant: "elevated",
        class: "mb-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 bg-yellow-600/10 border-l-4 border-yellow-600"${_scopeId}><h2 class="text-xl font-bold text-yellow-500 mb-2"${_scopeId}>+18 Solo para Adultos</h2><p class="text-gray-300"${_scopeId}> El juego est\xE1 dise\xF1ado como entretenimiento para adultos mayores de 18 a\xF1os. Nunca juegues con dinero que no puedas permitirte perder. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 bg-yellow-600/10 border-l-4 border-yellow-600" }, [
                createVNode("h2", { class: "text-xl font-bold text-yellow-500 mb-2" }, "+18 Solo para Adultos"),
                createVNode("p", { class: "text-gray-300" }, " El juego est\xE1 dise\xF1ado como entretenimiento para adultos mayores de 18 a\xF1os. Nunca juegues con dinero que no puedas permitirte perder. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-8">`);
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>Se\xF1ales de Alerta</h2><p class="text-gray-400 mb-4"${_scopeId}>Detente si identificas alguna de estas se\xF1ales:</p><ul class="space-y-2 text-gray-400"${_scopeId}><li class="flex items-start gap-2"${_scopeId}><span class="text-red-500"${_scopeId}>\u2022</span> Gastas m\xE1s dinero del que planeabas </li><li class="flex items-start gap-2"${_scopeId}><span class="text-red-500"${_scopeId}>\u2022</span> Juegas para recuperar p\xE9rdidas </li><li class="flex items-start gap-2"${_scopeId}><span class="text-red-500"${_scopeId}>\u2022</span> Descuidas trabajo, familia o relaciones </li><li class="flex items-start gap-2"${_scopeId}><span class="text-red-500"${_scopeId}>\u2022</span> Pides dinero prestado para jugar </li><li class="flex items-start gap-2"${_scopeId}><span class="text-red-500"${_scopeId}>\u2022</span> Sientes ansiedad o culpa relacionada con el juego </li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "Se\xF1ales de Alerta"),
                createVNode("p", { class: "text-gray-400 mb-4" }, "Detente si identificas alguna de estas se\xF1ales:"),
                createVNode("ul", { class: "space-y-2 text-gray-400" }, [
                  createVNode("li", { class: "flex items-start gap-2" }, [
                    createVNode("span", { class: "text-red-500" }, "\u2022"),
                    createTextVNode(" Gastas m\xE1s dinero del que planeabas ")
                  ]),
                  createVNode("li", { class: "flex items-start gap-2" }, [
                    createVNode("span", { class: "text-red-500" }, "\u2022"),
                    createTextVNode(" Juegas para recuperar p\xE9rdidas ")
                  ]),
                  createVNode("li", { class: "flex items-start gap-2" }, [
                    createVNode("span", { class: "text-red-500" }, "\u2022"),
                    createTextVNode(" Descuidas trabajo, familia o relaciones ")
                  ]),
                  createVNode("li", { class: "flex items-start gap-2" }, [
                    createVNode("span", { class: "text-red-500" }, "\u2022"),
                    createTextVNode(" Pides dinero prestado para jugar ")
                  ]),
                  createVNode("li", { class: "flex items-start gap-2" }, [
                    createVNode("span", { class: "text-red-500" }, "\u2022"),
                    createTextVNode(" Sientes ansiedad o culpa relacionada con el juego ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>Herramientas de Autocontrol</h2><div class="space-y-4"${_scopeId}><div${_scopeId}><h3 class="text-lg font-semibold text-white mb-2"${_scopeId}>L\xEDmites de Dep\xF3sito</h3><p class="text-gray-400"${_scopeId}> Establece l\xEDmites diarios, semanales o mensuales en tus dep\xF3sitos. </p></div><div${_scopeId}><h3 class="text-lg font-semibold text-white mb-2"${_scopeId}>L\xEDmites de Tiempo</h3><p class="text-gray-400"${_scopeId}> Configura recordatorios para controlar el tiempo que pasas jugando. </p></div><div${_scopeId}><h3 class="text-lg font-semibold text-white mb-2"${_scopeId}>Autoexclusi\xF3n</h3><p class="text-gray-400"${_scopeId}> Excluye tu cuenta temporalmente o permanentemente si lo necesitas. </p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "Herramientas de Autocontrol"),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-semibold text-white mb-2" }, "L\xEDmites de Dep\xF3sito"),
                    createVNode("p", { class: "text-gray-400" }, " Establece l\xEDmites diarios, semanales o mensuales en tus dep\xF3sitos. ")
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-semibold text-white mb-2" }, "L\xEDmites de Tiempo"),
                    createVNode("p", { class: "text-gray-400" }, " Configura recordatorios para controlar el tiempo que pasas jugando. ")
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-semibold text-white mb-2" }, "Autoexclusi\xF3n"),
                    createVNode("p", { class: "text-gray-400" }, " Excluye tu cuenta temporalmente o permanentemente si lo necesitas. ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>Recursos de Ayuda</h2><p class="text-gray-400 mb-4"${_scopeId}> Si crees que tienes un problema con el juego, hay ayuda disponible: </p><div class="space-y-3"${_scopeId}><div class="p-4 bg-gray-800 rounded-lg"${_scopeId}><h3 class="font-semibold text-white mb-1"${_scopeId}>Jugadores An\xF3nimos</h3><p class="text-gray-400 text-sm"${_scopeId}>Tel: 1-800-XXX-XXXX</p><p class="text-gray-400 text-sm"${_scopeId}>www.jugadoresanonimos.org</p></div><div class="p-4 bg-gray-800 rounded-lg"${_scopeId}><h3 class="font-semibold text-white mb-1"${_scopeId}>L\xEDnea de Ayuda Nacional</h3><p class="text-gray-400 text-sm"${_scopeId}>Tel: 1-800-XXX-XXXX</p><p class="text-gray-400 text-sm"${_scopeId}>Disponible 24/7</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "Recursos de Ayuda"),
                createVNode("p", { class: "text-gray-400 mb-4" }, " Si crees que tienes un problema con el juego, hay ayuda disponible: "),
                createVNode("div", { class: "space-y-3" }, [
                  createVNode("div", { class: "p-4 bg-gray-800 rounded-lg" }, [
                    createVNode("h3", { class: "font-semibold text-white mb-1" }, "Jugadores An\xF3nimos"),
                    createVNode("p", { class: "text-gray-400 text-sm" }, "Tel: 1-800-XXX-XXXX"),
                    createVNode("p", { class: "text-gray-400 text-sm" }, "www.jugadoresanonimos.org")
                  ]),
                  createVNode("div", { class: "p-4 bg-gray-800 rounded-lg" }, [
                    createVNode("h3", { class: "font-semibold text-white mb-1" }, "L\xEDnea de Ayuda Nacional"),
                    createVNode("p", { class: "text-gray-400 text-sm" }, "Tel: 1-800-XXX-XXXX"),
                    createVNode("p", { class: "text-gray-400 text-sm" }, "Disponible 24/7")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomCard, { variant: "glass" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-8 text-center"${_scopeId}><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>\xBFNecesitas Ayuda?</h2><p class="text-gray-400 mb-6"${_scopeId}> Nuestro equipo est\xE1 aqu\xED para ayudarte. Contacta con nosotros de forma confidencial. </p><div class="flex flex-col sm:flex-row gap-4 justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomButton, {
              variant: "primary",
              onClick: ($event) => _ctx.$router.push("/contact")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Contactar Soporte `);
                } else {
                  return [
                    createTextVNode(" Contactar Soporte ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AtomButton, { variant: "danger" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Autoexcluirse `);
                } else {
                  return [
                    createTextVNode(" Autoexcluirse ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-8 text-center" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "\xBFNecesitas Ayuda?"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " Nuestro equipo est\xE1 aqu\xED para ayudarte. Contacta con nosotros de forma confidencial. "),
                createVNode("div", { class: "flex flex-col sm:flex-row gap-4 justify-center" }, [
                  createVNode(_component_AtomButton, {
                    variant: "primary",
                    onClick: ($event) => _ctx.$router.push("/contact")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Contactar Soporte ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_AtomButton, { variant: "danger" }, {
                    default: withCtx(() => [
                      createTextVNode(" Autoexcluirse ")
                    ]),
                    _: 1
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/responsible-gaming.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=responsible-gaming-DlARMmpw.mjs.map
