import { b as useRouter, u as useNuxtApp, a as asyncDataDefaults, _ as __nuxt_component_0$1, c as createError } from './server.mjs';
import { _ as _sfc_main$4 } from './Icon-B4vqryPV.mjs';
import { u as useAuth, _ as _sfc_main$5 } from './useAuth-BpAQ_fa7.mjs';
import { _ as _sfc_main$6 } from './Button-vVGWbpRw.mjs';
import { ref, withAsyncContext, mergeProps, unref, computed, toValue, getCurrentInstance, onServerPrefetch, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, shallowRef, nextTick, toRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$7 } from './Card-Ust-d4vw.mjs';
import { _ as _sfc_main$3 } from './GameGrid-Dik9aLbG.mjs';
import { u as useHead } from './v3-CKnN_iHi.mjs';
import { u as useGames } from './useGames-FZL382TH.mjs';
import { u as useToast } from './useToast-Dg_pT9RU.mjs';
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
import './nuxt-link-CiiWlCDQ.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

//#region src/index.ts
const DEBOUNCE_DEFAULTS = { trailing: true };
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
console.log(await debouncedFn(number));
}
//=> 1
//=> 2
//=> 3
```
*/
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e, _f, _g;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  (_a = options.server) != null ? _a : options.server = true;
  (_b = options.default) != null ? _b : options.default = getDefault;
  (_c = options.getCachedData) != null ? _c : options.getCachedData = getDefaultCachedData;
  (_d = options.lazy) != null ? _d : options.lazy = false;
  (_e = options.immediate) != null ? _e : options.immediate = true;
  (_f = options.deep) != null ? _f : options.deep = asyncDataDefaults.deep;
  (_g = options.dedupe) != null ? _g : options.dedupe = "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    var _a2;
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!((_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2._init)) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => {
      var _a2;
      return (_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2.data;
    }),
    pending: writableComputedRef(() => {
      var _a2;
      return (_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2.pending;
    }),
    status: writableComputedRef(() => {
      var _a2;
      return (_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2.status;
    }),
    error: writableComputedRef(() => {
      var _a2;
      return (_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2.error;
    }),
    refresh: (...args2) => {
      var _a2;
      if (!((_a2 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a2._init)) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry = nuxtApp._asyncData[key.value];
      if (entry == null ? void 0 : entry._abortController) {
        try {
          entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      var _a;
      return (_a = getter()) == null ? void 0 : _a.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  var _a, _b;
  (_b = (_a = nuxtApp.payload._errors)[key]) != null ? _b : _a[key] = asyncDataDefaults.errorValue;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      var _a2, _b2;
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer((_a2 = opts.dedupe) != null ? _a2 : options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: (_b2 = opts.cause) != null ? _b2 : "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          var _a3, _b3;
          try {
            const timeout = (_a3 = opts.timeout) != null ? _a3 : options.timeout;
            const mergedSignal = mergeAbortSignals([(_b3 = asyncData._abortController) == null ? void 0 : _b3.signal, opts == null ? void 0 : opts.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason != null ? reason : "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason != null ? reason : "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        var _a3;
        if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if ((_a3 = asyncData._abortController) == null ? void 0 : _a3.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        {
          asyncData.pending.value = false;
        }
        cleanupController.abort();
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      var _a2;
      unsubRefreshAsyncData();
      if ((_a2 = nuxtApp._asyncData[key]) == null ? void 0 : _a2._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          var _a3;
          if (!((_a3 = nuxtApp._asyncData[key]) == null ? void 0 : _a3._init)) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
            asyncData.data.value = asyncDataDefaults.value;
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => asyncDataDefaults.value;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  var _a, _b, _c;
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = (_a = AbortSignal.timeout) == null ? void 0 : _a.call(AbortSignal, timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = (_b = sig.reason) != null ? _b : new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    var _a2;
    const abortedSignal = list.find((s) => s.aborted);
    const reason = (_a2 = abortedSignal == null ? void 0 : abortedSignal.reason) != null ? _a2 : new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    (_c = sig.addEventListener) == null ? void 0 : _c.call(sig, "abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
const _sfc_main$2 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  emits: ["register", "explore"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const features = [
      {
        icon: "lightning",
        title: "Retiros R\xE1pidos",
        description: "Retira tus ganancias en menos de 24 horas"
      },
      {
        icon: "gem",
        title: "Juegos Premium",
        description: "M\xE1s de 1,000 slots y juegos de mesa"
      },
      {
        icon: "trophy",
        title: "Jackpots",
        description: "Millones en premios acumulados"
      }
    ];
    const stats = [
      { value: "1,000+", label: "Juegos" },
      { value: "$5M+", label: "En Jackpots" },
      { value: "50K+", label: "Jugadores" },
      { value: "24/7", label: "Soporte" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_AtomIcon = _sfc_main$4;
      const _component_AtomBadge = _sfc_main$5;
      const _component_AtomButton = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative h-screen flex items-center justify-center overflow-hidden" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="relative z-10 container mx-auto px-4 text-center"><div class="max-w-4xl mx-auto"><div class="flex justify-center mb-6">`);
      _push(ssrRenderComponent(_component_AtomBadge, {
        variant: "gold",
        size: "lg",
        pill: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "crown",
              size: "sm",
              class: "inline mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Bono de Bienvenida hasta $5,000 `);
          } else {
            return [
              createVNode(_component_AtomIcon, {
                name: "crown",
                size: "sm",
                class: "inline mr-2"
              }),
              createTextVNode(" Bono de Bienvenida hasta $5,000 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg"> Bienvenido al <span class="text-gradient-gold block mt-2">Casino Virtual</span></h1><p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"> La mejor experiencia de casino online con m\xE1s de 1,000 juegos, jackpots millonarios y retiros instant\xE1neos </p><div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">`);
      _push(ssrRenderComponent(_component_AtomButton, {
        variant: "gold",
        size: "xl",
        onClick: ($event) => emit("register")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "star",
              size: "sm",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Registrarse Ahora `);
          } else {
            return [
              createVNode(_component_AtomIcon, {
                name: "star",
                size: "sm",
                class: "mr-2"
              }),
              createTextVNode(" Registrarse Ahora ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomButton, {
        variant: "ghost",
        size: "xl",
        onClick: ($event) => emit("explore")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explorar Juegos `);
          } else {
            return [
              createTextVNode(" Explorar Juegos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary-500/50 transition-all">`);
        _push(ssrRenderComponent(_component_AtomIcon, {
          name: feature.icon,
          size: "lg",
          class: "text-primary-500 mb-3 mx-auto"
        }, null, _parent));
        _push(`<h3 class="text-white font-semibold mb-2">${ssrInterpolate(feature.title)}</h3><p class="text-gray-400 text-sm">${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="text-center"><div class="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">${ssrInterpolate(stat.value)}</div><div class="text-gray-400 text-sm">${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"><div class="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"><div class="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organisms/HeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "JackpotDisplay",
  __ssrInlineRender: true,
  props: {
    jackpots: {
      type: Array,
      default: () => [
        {
          id: "mega",
          title: "Mega Jackpot",
          amount: 525e4,
          icon: "crown",
          color: "text-yellow-400",
          amountColor: "text-yellow-400",
          buttonVariant: "gold",
          lastWinner: { name: "Juan P.", amount: 25e5 }
        },
        {
          id: "major",
          title: "Major Jackpot",
          amount: 85e4,
          icon: "gem",
          color: "text-blue-400",
          amountColor: "text-blue-400",
          buttonVariant: "primary",
          lastWinner: { name: "Mar\xEDa G.", amount: 45e4 }
        },
        {
          id: "mini",
          title: "Mini Jackpot",
          amount: 125e3,
          icon: "star",
          color: "text-green-400",
          amountColor: "text-green-400",
          buttonVariant: "secondary",
          lastWinner: { name: "Carlos R.", amount: 85e3 }
        }
      ]
    }
  },
  emits: ["play"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const animatedAmounts = ref({});
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      }).format(value);
    };
    const playJackpot = (jackpot) => {
      emit("play", jackpot);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomIcon = _sfc_main$4;
      const _component_AtomCard = _sfc_main$7;
      const _component_AtomButton = _sfc_main$6;
      const _component_AtomBadge = _sfc_main$5;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-r from-primary-600 to-primary-800 py-16" }, _attrs))}><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><div class="text-center mb-12"><h2 class="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "trophy",
        size: "lg",
        class: "text-yellow-400"
      }, null, _parent));
      _push(` Jackpots Activos `);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "trophy",
        size: "lg",
        class: "text-yellow-400"
      }, null, _parent));
      _push(`</h2><p class="text-primary-100 text-lg">Premios acumulados - \xA1Gana millones ahora!</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(__props.jackpots, (jackpot) => {
        _push(`<div class="relative overflow-hidden rounded-2xl">`);
        _push(ssrRenderComponent(_component_AtomCard, {
          variant: "elevated",
          class: "relative overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 animate-pulse"${_scopeId}></div><div class="relative p-6 text-center"${_scopeId}><div class="mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AtomIcon, {
                name: jackpot.icon,
                size: "xl",
                class: jackpot.color
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-xl font-bold text-white mb-2"${_scopeId}>${ssrInterpolate(jackpot.title)}</h3><div class="${ssrRenderClass([jackpot.amountColor, "text-4xl font-bold mb-4 animate-glow"])}"${_scopeId}>${ssrInterpolate(formatCurrency(unref(animatedAmounts)[jackpot.id] || jackpot.amount))}</div>`);
              if (jackpot.lastWinner) {
                _push2(`<div class="text-sm text-gray-400 mb-4"${_scopeId}> \xDAltimo ganador: ${ssrInterpolate(jackpot.lastWinner.name)}<br${_scopeId}> ${ssrInterpolate(formatCurrency(jackpot.lastWinner.amount))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_AtomButton, {
                variant: jackpot.buttonVariant,
                size: "md",
                "full-width": "",
                onClick: ($event) => playJackpot(jackpot)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AtomIcon, {
                      name: "lightning",
                      size: "sm",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Jugar Ahora `);
                  } else {
                    return [
                      createVNode(_component_AtomIcon, {
                        name: "lightning",
                        size: "sm",
                        class: "mr-2"
                      }),
                      createTextVNode(" Jugar Ahora ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="absolute top-4 right-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AtomBadge, {
                variant: "danger",
                pill: "",
                class: "animate-pulse"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u{1F525} HOT `);
                  } else {
                    return [
                      createTextVNode(" \u{1F525} HOT ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 animate-pulse" }),
                createVNode("div", { class: "relative p-6 text-center" }, [
                  createVNode("div", { class: "mb-4" }, [
                    createVNode(_component_AtomIcon, {
                      name: jackpot.icon,
                      size: "xl",
                      class: jackpot.color
                    }, null, 8, ["name", "class"])
                  ]),
                  createVNode("h3", { class: "text-xl font-bold text-white mb-2" }, toDisplayString(jackpot.title), 1),
                  createVNode("div", {
                    class: ["text-4xl font-bold mb-4 animate-glow", jackpot.amountColor]
                  }, toDisplayString(formatCurrency(unref(animatedAmounts)[jackpot.id] || jackpot.amount)), 3),
                  jackpot.lastWinner ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-sm text-gray-400 mb-4"
                  }, [
                    createTextVNode(" \xDAltimo ganador: " + toDisplayString(jackpot.lastWinner.name), 1),
                    createVNode("br"),
                    createTextVNode(" " + toDisplayString(formatCurrency(jackpot.lastWinner.amount)), 1)
                  ])) : createCommentVNode("", true),
                  createVNode(_component_AtomButton, {
                    variant: jackpot.buttonVariant,
                    size: "md",
                    "full-width": "",
                    onClick: ($event) => playJackpot(jackpot)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AtomIcon, {
                        name: "lightning",
                        size: "sm",
                        class: "mr-2"
                      }),
                      createTextVNode(" Jugar Ahora ")
                    ]),
                    _: 1
                  }, 8, ["variant", "onClick"]),
                  createVNode("div", { class: "absolute top-4 right-4" }, [
                    createVNode(_component_AtomBadge, {
                      variant: "danger",
                      pill: "",
                      class: "animate-pulse"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u{1F525} HOT ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="mt-12 text-center"><p class="text-primary-100 text-sm"> Los jackpots se actualizan en tiempo real. Probabilidades de ganar var\xEDan seg\xFAn el juego. </p></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organisms/JackpotDisplay.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Casino Virtual - El Mejor Casino Online | Slots, Ruleta y m\xE1s",
      meta: [
        {
          name: "description",
          content: "Juega en el mejor casino online. M\xE1s de 1,000 juegos de slots, ruleta, blackjack y casino en vivo. Bono de bienvenida hasta $5,000. \xA1Reg\xEDstrate ahora!"
        },
        {
          property: "og:title",
          content: "Casino Virtual - El Mejor Casino Online"
        },
        {
          property: "og:description",
          content: "Juega en el mejor casino online. M\xE1s de 1,000 juegos y bonos incre\xEDbles."
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "keywords",
          content: "casino online, slots, ruleta, blackjack, poker, casino en vivo, juegos de azar"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://casino-virtual.com"
        }
      ]
    });
    const { fetchGames, games, loading: loadingGames } = useGames();
    const { isAuthenticated } = useAuth();
    const toast = useToast();
    const router = useRouter();
    const popularGames = ref([]);
    const newGames = ref([]);
    const features = [
      {
        icon: "lightning",
        title: "Retiros en 24h",
        description: "Retira tus ganancias r\xE1pidamente y sin complicaciones"
      },
      {
        icon: "gem",
        title: "+1,000 Juegos",
        description: "La mayor selecci\xF3n de slots y juegos de mesa"
      },
      {
        icon: "trophy",
        title: "Jackpots Millonarios",
        description: "Premios acumulados que cambian vidas"
      },
      {
        icon: "user",
        title: "Soporte 24/7",
        description: "Atenci\xF3n al cliente siempre disponible"
      }
    ];
    const providers = [
      "NetEnt",
      "Microgaming",
      "Pragmatic Play",
      "Evolution Gaming",
      "Play'n GO",
      "Yggdrasil",
      "Red Tiger",
      "Quickspin"
    ];
    const { data: gamesData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("landing-games", async () => {
      await fetchGames("all");
      return {
        popular: games.value.filter((g) => g.players > 1e3).slice(0, 12),
        new: games.value.filter((g) => g.isNew).slice(0, 12)
      };
    })), __temp = await __temp, __restore(), __temp);
    if (gamesData.value) {
      popularGames.value = gamesData.value.popular;
      newGames.value = gamesData.value.new;
    }
    const handlePlayGame = (game) => {
      if (!isAuthenticated.value) {
        toast.warning("Debes iniciar sesi\xF3n para jugar");
        openRegisterModal();
        return;
      }
      router.push(`/play/${game.id}`);
    };
    const openRegisterModal = () => {
      toast.info("Modal de registro (por implementar)");
    };
    const scrollToGames = () => {
      const element = (void 0).getElementById("games-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OrganismHeroSection = _sfc_main$2;
      const _component_OrganismJackpotDisplay = _sfc_main$1;
      const _component_OrganismGameGrid = _sfc_main$3;
      const _component_AtomIcon = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_OrganismHeroSection, {
        onRegister: openRegisterModal,
        onExplore: scrollToGames
      }, null, _parent));
      _push(ssrRenderComponent(_component_OrganismJackpotDisplay, { onPlay: handlePlayGame }, null, _parent));
      _push(`<div id="games-section">`);
      _push(ssrRenderComponent(_component_OrganismGameGrid, {
        title: "Juegos Populares",
        subtitle: "Los m\xE1s jugados de la semana",
        games: unref(popularGames),
        "show-filters": true,
        loading: unref(loadingGames),
        "view-all-link": "/slots",
        onPlay: handlePlayGame
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_OrganismGameGrid, {
        title: "Nuevos Lanzamientos",
        subtitle: "Descubre las \xFAltimas incorporaciones",
        games: unref(newGames),
        loading: unref(loadingGames),
        "view-all-link": "/slots",
        onPlay: handlePlayGame
      }, null, _parent));
      _push(`<section class="py-20 bg-gradient-to-b from-black to-gray-900"><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl font-bold text-white mb-4">\xBFPor qu\xE9 Casino Virtual?</h2><p class="text-gray-400 text-lg">La mejor experiencia de juego online</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-primary-500/50 transition-all"><div class="mb-4">`);
        _push(ssrRenderComponent(_component_AtomIcon, {
          name: feature.icon,
          size: "xl",
          class: "text-primary-500 mx-auto"
        }, null, _parent));
        _push(`</div><h3 class="text-xl font-bold text-white mb-3">${ssrInterpolate(feature.title)}</h3><p class="text-gray-400">${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-gray-900"><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl font-bold text-white mb-4">Proveedores de Confianza</h2><p class="text-gray-400 text-lg">Trabajamos con los mejores del sector</p></div><div class="flex flex-wrap justify-center items-center gap-8"><!--[-->`);
      ssrRenderList(providers, (provider) => {
        _push(`<div class="px-8 py-4 bg-gray-800 rounded-lg text-gray-400 font-semibold hover:bg-gray-700 hover:text-white transition-all">${ssrInterpolate(provider)}</div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C4q8nZM8.mjs.map
