import { _ as _sfc_main$1 } from './Icon-B4vqryPV.mjs';
import { _ as _sfc_main$2 } from './Button-vVGWbpRw.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
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
  __name: "poker",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Poker - Casino Virtual",
      meta: [
        {
          name: "description",
          content: "Pr\xF3ximamente: Mesas de poker online con Texas Hold'em, Omaha y m\xE1s."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomIcon = _sfc_main$1;
      const _component_AtomButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black py-8" }, _attrs))}><div class="container mx-auto px-4"><div class="mb-8 text-center"><h1 class="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "cards",
        size: "lg",
        class: "text-primary-500"
      }, null, _parent));
      _push(` Poker </h1><p class="text-gray-400 text-lg">Demuestra tu habilidad en nuestras mesas de poker</p></div><div class="max-w-2xl mx-auto text-center py-20">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "cards",
        size: "xl",
        class: "text-primary-500 mx-auto mb-6"
      }, null, _parent));
      _push(`<h2 class="text-3xl font-bold text-white mb-4">Pr\xF3ximamente</h2><p class="text-gray-400 text-lg mb-8"> Estamos trabajando en traerte las mejores mesas de poker online. Regresa pronto para disfrutar de Texas Hold&#39;em, Omaha y m\xE1s. </p>`);
      _push(ssrRenderComponent(_component_AtomButton, {
        variant: "gold",
        onClick: ($event) => _ctx.$router.push("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Volver al Inicio `);
          } else {
            return [
              createTextVNode(" Volver al Inicio ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/poker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=poker-DUGKlG0w.mjs.map
