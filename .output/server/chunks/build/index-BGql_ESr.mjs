import { _ as _sfc_main$1 } from './Icon-B4vqryPV.mjs';
import { _ as _sfc_main$2 } from './Input-CvcO_pGC.mjs';
import { _ as _sfc_main$3 } from './GameGrid-Dik9aLbG.mjs';
import { ref, computed, mergeProps, isRef, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3-CKnN_iHi.mjs';
import { u as useGames } from './useGames-FZL382TH.mjs';
import { u as useAuth } from './useAuth-BpAQ_fa7.mjs';
import { u as useToast } from './useToast-Dg_pT9RU.mjs';
import { b as useRouter } from './server.mjs';
import './nuxt-link-CiiWlCDQ.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './Button-vVGWbpRw.mjs';
import './Card-Ust-d4vw.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Slots - Casino Virtual",
      meta: [
        {
          name: "description",
          content: "Juega a las mejores slots online. Cientos de juegos de proveedores top."
        }
      ]
    });
    const { games, loading } = useGames();
    const { isAuthenticated } = useAuth();
    const toast = useToast();
    const router = useRouter();
    const searchQuery = ref("");
    const selectedProvider = ref("");
    const providers = ["NetEnt", "Microgaming", "Pragmatic Play", "Evolution Gaming", "Play'n GO"];
    const filteredGames = computed(() => {
      let filtered = games.value;
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (game) => game.title.toLowerCase().includes(query) || game.provider.toLowerCase().includes(query)
        );
      }
      if (selectedProvider.value) {
        filtered = filtered.filter((game) => game.provider === selectedProvider.value);
      }
      return filtered;
    });
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
      const _component_AtomInput = _sfc_main$2;
      const _component_OrganismGameGrid = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black py-8" }, _attrs))}><div class="container mx-auto px-4"><div class="mb-8"><h1 class="text-4xl font-bold text-white mb-2 flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "slot",
        size: "lg",
        class: "text-primary-500"
      }, null, _parent));
      _push(` Slots </h1><p class="text-gray-400 text-lg">Descubre nuestra colecci\xF3n de slots premium</p></div><div class="mb-8 flex flex-col md:flex-row gap-4"><div class="flex-1">`);
      _push(ssrRenderComponent(_component_AtomInput, {
        id: "search",
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        placeholder: "Buscar juegos...",
        type: "text"
      }, null, _parent));
      _push(`</div><div class="flex gap-2"><select class="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedProvider)) ? ssrLooseContain(unref(selectedProvider), "") : ssrLooseEqual(unref(selectedProvider), "")) ? " selected" : ""}>Todos los proveedores</option><!--[-->`);
      ssrRenderList(providers, (provider) => {
        _push(`<option${ssrRenderAttr("value", provider)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedProvider)) ? ssrLooseContain(unref(selectedProvider), provider) : ssrLooseEqual(unref(selectedProvider), provider)) ? " selected" : ""}>${ssrInterpolate(provider)}</option>`);
      });
      _push(`<!--]--></select></div></div>`);
      _push(ssrRenderComponent(_component_OrganismGameGrid, {
        title: "",
        games: unref(filteredGames),
        "show-filters": true,
        loading: unref(loading),
        "items-per-page": 20,
        onPlay: handlePlayGame
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/slots/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BGql_ESr.mjs.map
