import { _ as _sfc_main$1 } from './Card-Ust-d4vw.mjs';
import { _ as _sfc_main$2 } from './Input-CvcO_pGC.mjs';
import { _ as _sfc_main$3 } from './Button-vVGWbpRw.mjs';
import { _ as _sfc_main$4 } from './Icon-B4vqryPV.mjs';
import { ref, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3-CKnN_iHi.mjs';
import { u as useToast } from './useToast-Dg_pT9RU.mjs';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contacto - Casino Virtual",
      meta: [
        {
          name: "description",
          content: "Contacta con Casino Virtual. Soporte 24/7 disponible para ayudarte."
        }
      ]
    });
    const toast = useToast();
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const loading = ref(false);
    const handleSubmit = async () => {
      loading.value = true;
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Mensaje enviado correctamente. Te responderemos pronto.");
      form.value = {
        name: "",
        email: "",
        subject: "",
        message: ""
      };
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomCard = _sfc_main$1;
      const _component_AtomInput = _sfc_main$2;
      const _component_AtomButton = _sfc_main$3;
      const _component_AtomIcon = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black py-12" }, _attrs))}><div class="container mx-auto px-4 max-w-4xl"><div class="text-center mb-12"><h1 class="text-4xl font-bold text-white mb-4">Cont\xE1ctanos</h1><p class="text-gray-400 text-lg">Estamos aqu\xED para ayudarte. Env\xEDanos tu consulta.</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8">`);
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-8"${_scopeId}><h2 class="text-2xl font-bold text-white mb-6"${_scopeId}>Enviar Mensaje</h2><form class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomInput, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              label: "Nombre",
              placeholder: "Tu nombre completo",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AtomInput, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              label: "Email",
              placeholder: "tu@email.com",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AtomInput, {
              id: "subject",
              modelValue: unref(form).subject,
              "onUpdate:modelValue": ($event) => unref(form).subject = $event,
              label: "Asunto",
              placeholder: "\xBFEn qu\xE9 podemos ayudarte?",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`<div class="relative"${_scopeId}><label for="message" class="absolute -top-2.5 left-3 bg-gray-900 px-2 text-sm font-medium text-gray-300"${_scopeId}> Mensaje <span class="text-red-500 ml-1"${_scopeId}>*</span></label><textarea id="message" rows="6" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:border-primary-500 focus:ring-primary-500/50" placeholder="Describe tu consulta..." required${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea></div>`);
            _push2(ssrRenderComponent(_component_AtomButton, {
              type: "submit",
              variant: "primary",
              "full-width": "",
              loading: unref(loading)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Enviar Mensaje `);
                } else {
                  return [
                    createTextVNode(" Enviar Mensaje ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form></div>`);
          } else {
            return [
              createVNode("div", { class: "p-8" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-6" }, "Enviar Mensaje"),
                createVNode("form", {
                  onSubmit: withModifiers(handleSubmit, ["prevent"]),
                  class: "space-y-4"
                }, [
                  createVNode(_component_AtomInput, {
                    id: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    label: "Nombre",
                    placeholder: "Tu nombre completo",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_AtomInput, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    label: "Email",
                    placeholder: "tu@email.com",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_AtomInput, {
                    id: "subject",
                    modelValue: unref(form).subject,
                    "onUpdate:modelValue": ($event) => unref(form).subject = $event,
                    label: "Asunto",
                    placeholder: "\xBFEn qu\xE9 podemos ayudarte?",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "relative" }, [
                    createVNode("label", {
                      for: "message",
                      class: "absolute -top-2.5 left-3 bg-gray-900 px-2 text-sm font-medium text-gray-300"
                    }, [
                      createTextVNode(" Mensaje "),
                      createVNode("span", { class: "text-red-500 ml-1" }, "*")
                    ]),
                    withDirectives(createVNode("textarea", {
                      id: "message",
                      "onUpdate:modelValue": ($event) => unref(form).message = $event,
                      rows: "6",
                      class: "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:border-primary-500 focus:ring-primary-500/50",
                      placeholder: "Describe tu consulta...",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).message]
                    ])
                  ]),
                  createVNode(_component_AtomButton, {
                    type: "submit",
                    variant: "primary",
                    "full-width": "",
                    loading: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Enviar Mensaje ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-6">`);
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><div class="flex items-start gap-4"${_scopeId}><div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "user",
              size: "md",
              class: "text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="text-lg font-bold text-white mb-2"${_scopeId}>Soporte 24/7</h3><p class="text-gray-400"${_scopeId}> Nuestro equipo est\xE1 disponible todos los d\xEDas del a\xF1o para ayudarte con cualquier consulta. </p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("div", { class: "flex items-start gap-4" }, [
                  createVNode("div", { class: "w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0" }, [
                    createVNode(_component_AtomIcon, {
                      name: "user",
                      size: "md",
                      class: "text-white"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-bold text-white mb-2" }, "Soporte 24/7"),
                    createVNode("p", { class: "text-gray-400" }, " Nuestro equipo est\xE1 disponible todos los d\xEDas del a\xF1o para ayudarte con cualquier consulta. ")
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
            _push2(`<div class="p-6"${_scopeId}><div class="flex items-start gap-4"${_scopeId}><div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"${_scopeId}><span class="text-white text-xl"${_scopeId}>\u2709</span></div><div${_scopeId}><h3 class="text-lg font-bold text-white mb-2"${_scopeId}>Email</h3><p class="text-gray-400"${_scopeId}>soporte@casino-virtual.com</p><p class="text-gray-500 text-sm mt-1"${_scopeId}>Respuesta en menos de 24 horas</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("div", { class: "flex items-start gap-4" }, [
                  createVNode("div", { class: "w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0" }, [
                    createVNode("span", { class: "text-white text-xl" }, "\u2709")
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-bold text-white mb-2" }, "Email"),
                    createVNode("p", { class: "text-gray-400" }, "soporte@casino-virtual.com"),
                    createVNode("p", { class: "text-gray-500 text-sm mt-1" }, "Respuesta en menos de 24 horas")
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
            _push2(`<div class="p-6"${_scopeId}><div class="flex items-start gap-4"${_scopeId}><div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0"${_scopeId}><span class="text-white text-xl"${_scopeId}>\u{1F4AC}</span></div><div${_scopeId}><h3 class="text-lg font-bold text-white mb-2"${_scopeId}>Chat en Vivo</h3><p class="text-gray-400 mb-3"${_scopeId}>Habla directamente con un agente</p>`);
            _push2(ssrRenderComponent(_component_AtomButton, {
              variant: "primary",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Iniciar Chat `);
                } else {
                  return [
                    createTextVNode(" Iniciar Chat ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("div", { class: "flex items-start gap-4" }, [
                  createVNode("div", { class: "w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0" }, [
                    createVNode("span", { class: "text-white text-xl" }, "\u{1F4AC}")
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-bold text-white mb-2" }, "Chat en Vivo"),
                    createVNode("p", { class: "text-gray-400 mb-3" }, "Habla directamente con un agente"),
                    createVNode(_component_AtomButton, {
                      variant: "primary",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Iniciar Chat ")
                      ]),
                      _: 1
                    })
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
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-bold text-white mb-4"${_scopeId}>Horario de Atenci\xF3n</h3><div class="space-y-2 text-gray-400"${_scopeId}><div class="flex justify-between"${_scopeId}><span${_scopeId}>Lunes - Domingo:</span><span class="text-white font-semibold"${_scopeId}>24 horas</span></div><div class="flex justify-between"${_scopeId}><span${_scopeId}>Chat en vivo:</span><span class="text-green-500 font-semibold"${_scopeId}>\u25CF Online</span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h3", { class: "text-lg font-bold text-white mb-4" }, "Horario de Atenci\xF3n"),
                createVNode("div", { class: "space-y-2 text-gray-400" }, [
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", null, "Lunes - Domingo:"),
                    createVNode("span", { class: "text-white font-semibold" }, "24 horas")
                  ]),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", null, "Chat en vivo:"),
                    createVNode("span", { class: "text-green-500 font-semibold" }, "\u25CF Online")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-v7GrFlqM.mjs.map
