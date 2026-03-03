import { _ as _sfc_main$1 } from './Card-Ust-d4vw.mjs';
import { _ as _sfc_main$2 } from './Button-vVGWbpRw.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-CKnN_iHi.mjs';
import './server.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/hookable/dist/index.mjs';
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
  __name: "help",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Centro de Ayuda - Casino Virtual",
      meta: [
        {
          name: "description",
          content: "Encuentra respuestas a tus preguntas sobre Casino Virtual. Soporte 24/7."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomCard = _sfc_main$1;
      const _component_AtomButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black py-12" }, _attrs))}><div class="container mx-auto px-4 max-w-4xl"><div class="mb-12"><h1 class="text-4xl font-bold text-white mb-4">Centro de Ayuda</h1><p class="text-gray-400 text-lg">Encuentra respuestas a tus preguntas frecuentes</p></div><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-2xl font-bold text-white mb-2"${_scopeId}>\xBFC\xF3mo registro una cuenta?</h2><p class="text-gray-400"${_scopeId}> Haz clic en el bot\xF3n &quot;Registrarse&quot; en la parte superior derecha, completa el formulario con tus datos y verifica tu correo electr\xF3nico. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-2" }, "\xBFC\xF3mo registro una cuenta?"),
                createVNode("p", { class: "text-gray-400" }, ' Haz clic en el bot\xF3n "Registrarse" en la parte superior derecha, completa el formulario con tus datos y verifica tu correo electr\xF3nico. ')
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-2xl font-bold text-white mb-2"${_scopeId}>\xBFC\xF3mo puedo depositar dinero?</h2><p class="text-gray-400"${_scopeId}> Ve a tu wallet, selecciona &quot;Depositar&quot; y elige entre nuestros m\xE9todos de pago: tarjetas de cr\xE9dito, transferencia bancaria o criptomonedas. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-2" }, "\xBFC\xF3mo puedo depositar dinero?"),
                createVNode("p", { class: "text-gray-400" }, ' Ve a tu wallet, selecciona "Depositar" y elige entre nuestros m\xE9todos de pago: tarjetas de cr\xE9dito, transferencia bancaria o criptomonedas. ')
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-2xl font-bold text-white mb-2"${_scopeId}>\xBFCu\xE1nto tiempo tardan los retiros?</h2><p class="text-gray-400"${_scopeId}> Los retiros se procesan en menos de 24 horas. El tiempo de llegada depende del m\xE9todo seleccionado. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-2" }, "\xBFCu\xE1nto tiempo tardan los retiros?"),
                createVNode("p", { class: "text-gray-400" }, " Los retiros se procesan en menos de 24 horas. El tiempo de llegada depende del m\xE9todo seleccionado. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-2xl font-bold text-white mb-2"${_scopeId}>\xBFLos juegos son justos?</h2><p class="text-gray-400"${_scopeId}> S\xED, todos nuestros juegos utilizan generadores de n\xFAmeros aleatorios (RNG) certificados y son auditados regularmente por entidades independientes. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-2" }, "\xBFLos juegos son justos?"),
                createVNode("p", { class: "text-gray-400" }, " S\xED, todos nuestros juegos utilizan generadores de n\xFAmeros aleatorios (RNG) certificados y son auditados regularmente por entidades independientes. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-2xl font-bold text-white mb-2"${_scopeId}>\xBFPuedo jugar desde mi m\xF3vil?</h2><p class="text-gray-400"${_scopeId}> \xA1Por supuesto! Nuestra plataforma est\xE1 completamente optimizada para dispositivos m\xF3viles. Juega desde cualquier lugar. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-2" }, "\xBFPuedo jugar desde mi m\xF3vil?"),
                createVNode("p", { class: "text-gray-400" }, " \xA1Por supuesto! Nuestra plataforma est\xE1 completamente optimizada para dispositivos m\xF3viles. Juega desde cualquier lugar. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-12 text-center">`);
      _push(ssrRenderComponent(_component_AtomCard, { variant: "glass" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-8"${_scopeId}><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>\xBFNo encuentras lo que buscas?</h2><p class="text-gray-400 mb-6"${_scopeId}> Nuestro equipo de soporte est\xE1 disponible 24/7 para ayudarte </p>`);
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-8" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "\xBFNo encuentras lo que buscas?"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " Nuestro equipo de soporte est\xE1 disponible 24/7 para ayudarte "),
                createVNode(_component_AtomButton, {
                  variant: "primary",
                  onClick: ($event) => _ctx.$router.push("/contact")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Contactar Soporte ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/help.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=help-CfalHpCJ.mjs.map
