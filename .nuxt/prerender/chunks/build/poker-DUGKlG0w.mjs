import { _ as _sfc_main$1 } from './Icon-B4vqryPV.mjs';
import { _ as _sfc_main$2 } from './Button-vVGWbpRw.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/index.mjs';
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
