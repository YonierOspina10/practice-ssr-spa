import { _ as _sfc_main$1 } from './Card-Ust-d4vw.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Pol\xEDtica de Privacidad - Casino Virtual",
      meta: [
        {
          name: "description",
          content: "Pol\xEDtica de privacidad de Casino Virtual. Conoce c\xF3mo protegemos tus datos."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black py-12" }, _attrs))}><div class="container mx-auto px-4 max-w-4xl"><h1 class="text-4xl font-bold text-white mb-8">Pol\xEDtica de Privacidad</h1>`);
      _push(ssrRenderComponent(_component_AtomCard, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-8 prose prose-invert max-w-none"${_scopeId}><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>1. Informaci\xF3n que Recopilamos</h2><p class="text-gray-400 mb-6"${_scopeId}> Recopilamos informaci\xF3n personal como nombre, direcci\xF3n de correo electr\xF3nico, fecha de nacimiento y datos de pago cuando crea una cuenta. </p><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>2. Uso de la Informaci\xF3n</h2><p class="text-gray-400 mb-6"${_scopeId}> Utilizamos su informaci\xF3n para procesar transacciones, verificar su identidad, prevenir fraudes y mejorar nuestros servicios. </p><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>3. Compartir Informaci\xF3n</h2><p class="text-gray-400 mb-6"${_scopeId}> No vendemos ni compartimos su informaci\xF3n personal con terceros, excepto cuando sea requerido por ley o para procesar pagos. </p><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>4. Cookies</h2><p class="text-gray-400 mb-6"${_scopeId}> Utilizamos cookies para mejorar su experiencia de usuario y analizar el tr\xE1fico del sitio. Puede desactivar las cookies en la configuraci\xF3n de su navegador. </p><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>5. Seguridad de Datos</h2><p class="text-gray-400 mb-6"${_scopeId}> Implementamos medidas de seguridad t\xE9cnicas y organizativas para proteger su informaci\xF3n contra acceso no autorizado. </p><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>6. Sus Derechos</h2><p class="text-gray-400 mb-6"${_scopeId}> Tiene derecho a acceder, corregir o eliminar su informaci\xF3n personal en cualquier momento contact\xE1ndonos. </p><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>7. Retenci\xF3n de Datos</h2><p class="text-gray-400 mb-6"${_scopeId}> Conservamos su informaci\xF3n durante el tiempo necesario para cumplir con obligaciones legales y resolver disputas. </p><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>8. Menores de Edad</h2><p class="text-gray-400 mb-6"${_scopeId}> No recopilamos intencionalmente informaci\xF3n de menores de 18 a\xF1os. Si descubrimos que un menor ha proporcionado informaci\xF3n, la eliminaremos inmediatamente. </p><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>9. Cambios en la Pol\xEDtica</h2><p class="text-gray-400 mb-6"${_scopeId}> Podemos actualizar esta pol\xEDtica peri\xF3dicamente. Notificaremos cambios significativos por correo electr\xF3nico. </p><h2 class="text-2xl font-bold text-white mb-4"${_scopeId}>10. Contacto</h2><p class="text-gray-400"${_scopeId}> Para consultas sobre privacidad, escriba a privacidad@casino-virtual.com </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-8 prose prose-invert max-w-none" }, [
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "1. Informaci\xF3n que Recopilamos"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " Recopilamos informaci\xF3n personal como nombre, direcci\xF3n de correo electr\xF3nico, fecha de nacimiento y datos de pago cuando crea una cuenta. "),
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "2. Uso de la Informaci\xF3n"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " Utilizamos su informaci\xF3n para procesar transacciones, verificar su identidad, prevenir fraudes y mejorar nuestros servicios. "),
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "3. Compartir Informaci\xF3n"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " No vendemos ni compartimos su informaci\xF3n personal con terceros, excepto cuando sea requerido por ley o para procesar pagos. "),
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "4. Cookies"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " Utilizamos cookies para mejorar su experiencia de usuario y analizar el tr\xE1fico del sitio. Puede desactivar las cookies en la configuraci\xF3n de su navegador. "),
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "5. Seguridad de Datos"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " Implementamos medidas de seguridad t\xE9cnicas y organizativas para proteger su informaci\xF3n contra acceso no autorizado. "),
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "6. Sus Derechos"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " Tiene derecho a acceder, corregir o eliminar su informaci\xF3n personal en cualquier momento contact\xE1ndonos. "),
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "7. Retenci\xF3n de Datos"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " Conservamos su informaci\xF3n durante el tiempo necesario para cumplir con obligaciones legales y resolver disputas. "),
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "8. Menores de Edad"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " No recopilamos intencionalmente informaci\xF3n de menores de 18 a\xF1os. Si descubrimos que un menor ha proporcionado informaci\xF3n, la eliminaremos inmediatamente. "),
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "9. Cambios en la Pol\xEDtica"),
                createVNode("p", { class: "text-gray-400 mb-6" }, " Podemos actualizar esta pol\xEDtica peri\xF3dicamente. Notificaremos cambios significativos por correo electr\xF3nico. "),
                createVNode("h2", { class: "text-2xl font-bold text-white mb-4" }, "10. Contacto"),
                createVNode("p", { class: "text-gray-400" }, " Para consultas sobre privacidad, escriba a privacidad@casino-virtual.com ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-8 text-center"><p class="text-gray-500 text-sm">\xDAltima actualizaci\xF3n: Marzo 2026</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-Wc97Pkm6.mjs.map
