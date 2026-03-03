import { _ as __nuxt_component_0 } from './nuxt-link-CiiWlCDQ.mjs';
import { _ as _sfc_main$3 } from './Icon-B4vqryPV.mjs';
import { _ as _sfc_main$4 } from './Button-vVGWbpRw.mjs';
import { computed, unref, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/server-renderer/index.mjs';
import { u as useAuth, _ as _sfc_main$5 } from './useAuth-BpAQ_fa7.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/h3/dist/index.mjs';
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

const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    isAuthenticated: {
      type: Boolean,
      default: false
    },
    balance: {
      type: Number,
      default: 0
    }
  },
  emits: ["login", "register"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const mobileMenuOpen = ref(false);
    const navItems = [
      { label: "Inicio", path: "/" },
      { label: "Slots", path: "/slots" },
      { label: "Ruleta", path: "/roulette" },
      { label: "Black Jack", path: "/blackjack" },
      { label: "Casino en Vivo", path: "/live-casino" }
    ];
    const formatBalance = (value) => {
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      }).format(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AtomIcon = _sfc_main$3;
      const _component_AtomButton = _sfc_main$4;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50" }, _attrs))}><div class="container mx-auto px-4"><div class="flex items-center justify-between h-20">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "crown",
              size: "lg",
              class: "text-yellow-500 group-hover:animate-bounce"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-2xl font-bold text-gradient-gold"${_scopeId}>Casino Virtual</span>`);
          } else {
            return [
              createVNode(_component_AtomIcon, {
                name: "crown",
                size: "lg",
                class: "text-yellow-500 group-hover:animate-bounce"
              }),
              createVNode("span", { class: "text-2xl font-bold text-gradient-gold" }, "Casino Virtual")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center gap-6"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: item.path,
          class: "text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)} <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label) + " ", 1),
                createVNode("span", { class: "absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="hidden md:flex items-center gap-4">`);
      if (__props.isAuthenticated) {
        _push(`<div class="flex items-center gap-4"><div class="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg">`);
        _push(ssrRenderComponent(_component_AtomIcon, {
          name: "wallet",
          size: "sm",
          class: "text-yellow-500"
        }, null, _parent));
        _push(`<span class="font-bold text-white">${ssrInterpolate(formatBalance(__props.balance))}</span></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/profile",
          class: "flex items-center gap-2 hover:opacity-80 transition-opacity"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AtomIcon, {
                name: "user",
                size: "sm",
                class: "text-white"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center" }, [
                  createVNode(_component_AtomIcon, {
                    name: "user",
                    size: "sm",
                    class: "text-white"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_AtomButton, {
          variant: "ghost",
          size: "sm",
          onClick: ($event) => emit("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Iniciar Sesi\xF3n `);
            } else {
              return [
                createTextVNode(" Iniciar Sesi\xF3n ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_AtomButton, {
          variant: "gold",
          size: "sm",
          onClick: ($event) => emit("register")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Registrarse `);
            } else {
              return [
                createTextVNode(" Registrarse ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div><button class="md:hidden text-white">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: unref(mobileMenuOpen) ? "close" : "menu",
        size: "md"
      }, null, _parent));
      _push(`</button></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden py-4 border-t border-gray-800"><div class="flex flex-col gap-4"><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.path,
            to: item.path,
            class: "text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2",
            onClick: ($event) => mobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        if (!__props.isAuthenticated) {
          _push(`<div class="flex flex-col gap-2 pt-4 border-t border-gray-800">`);
          _push(ssrRenderComponent(_component_AtomButton, {
            variant: "ghost",
            size: "sm",
            "full-width": "",
            onClick: ($event) => emit("login")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Iniciar Sesi\xF3n `);
              } else {
                return [
                  createTextVNode(" Iniciar Sesi\xF3n ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_AtomButton, {
            variant: "gold",
            size: "sm",
            "full-width": "",
            onClick: ($event) => emit("register")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Registrarse `);
              } else {
                return [
                  createTextVNode(" Registrarse ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecules/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomIcon = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AtomBadge = _sfc_main$5;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-950 border-t border-gray-800 py-12" }, _attrs))}><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"><div><div class="flex items-center gap-2 mb-4">`);
      _push(ssrRenderComponent(_component_AtomIcon, {
        name: "crown",
        size: "md",
        class: "text-yellow-500"
      }, null, _parent));
      _push(`<h2 class="text-xl font-bold text-white">Casino Virtual</h2></div><p class="text-gray-400 text-sm mb-4"> La mejor experiencia de casino online. Juega de forma segura y responsable. </p><div class="flex gap-3"><a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"><span class="text-white">f</span></a><a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"><span class="text-white">\u{1D54F}</span></a><a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"><span class="text-white">in</span></a></div></div><div><h3 class="text-lg font-semibold text-white mb-4">Juegos</h3><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/slots",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Slots`);
          } else {
            return [
              createTextVNode("Slots")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/roulette",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ruleta`);
          } else {
            return [
              createTextVNode("Ruleta")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blackjack",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Black Jack`);
          } else {
            return [
              createTextVNode("Black Jack")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/poker",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Poker`);
          } else {
            return [
              createTextVNode("Poker")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/live-casino",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Casino en Vivo`);
          } else {
            return [
              createTextVNode("Casino en Vivo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold text-white mb-4">Soporte</h3><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/help",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Centro de Ayuda`);
          } else {
            return [
              createTextVNode("Centro de Ayuda")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`T\xE9rminos y Condiciones`);
          } else {
            return [
              createTextVNode("T\xE9rminos y Condiciones")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pol\xEDtica de Privacidad`);
          } else {
            return [
              createTextVNode("Pol\xEDtica de Privacidad")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/responsible-gaming",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Juego Responsable`);
          } else {
            return [
              createTextVNode("Juego Responsable")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contacto`);
          } else {
            return [
              createTextVNode("Contacto")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold text-white mb-4">Legal</h3><p class="text-gray-400 text-sm mb-4">Licencia: N\xBA 12345/2026</p><p class="text-gray-400 text-sm mb-4">+18 Juega con responsabilidad</p><div class="flex gap-2 flex-wrap">`);
      _push(ssrRenderComponent(_component_AtomBadge, {
        variant: "default",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SSL Seguro`);
          } else {
            return [
              createTextVNode("SSL Seguro")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AtomBadge, {
        variant: "default",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Verificado`);
          } else {
            return [
              createTextVNode("Verificado")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="border-t border-gray-800 pt-8 text-center"><p class="text-gray-400 text-sm"> \xA9 ${ssrInterpolate(unref(currentYear))} Casino Virtual. Todos los derechos reservados. </p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecules/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { isAuthenticated, user } = useAuth();
    const userBalance = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.balance) || 0;
    });
    const handleLogin = () => {
      console.log("Login modal");
    };
    const handleRegister = () => {
      console.log("Register modal");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoleculeNavbar = _sfc_main$2;
      const _component_MoleculeFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_MoleculeNavbar, {
        "is-authenticated": unref(isAuthenticated),
        balance: unref(userBalance),
        onLogin: handleLogin,
        onRegister: handleRegister
      }, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_MoleculeFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BtlJTlEa.mjs.map
