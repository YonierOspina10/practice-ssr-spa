import { _ as __nuxt_component_0 } from './nuxt-link-CiiWlCDQ.mjs';
import { _ as _sfc_main$2 } from './Button-vVGWbpRw.mjs';
import { _ as _sfc_main$4 } from './Card-Ust-d4vw.mjs';
import { _ as _sfc_main$3 } from './Icon-B4vqryPV.mjs';
import { _ as _sfc_main$5 } from './useAuth-BpAQ_fa7.mjs';
import { ref, computed, watch, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = {
  __name: "GameCard",
  __ssrInlineRender: true,
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  emits: ["play"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const playGame = () => {
      emit("play", props.game);
    };
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      }).format(value);
    };
    const formatPlayers = (count) => {
      if (count >= 1e3) {
        return `${(count / 1e3).toFixed(1)}k`;
      }
      return count || "0";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomCard = _sfc_main$4;
      const _component_AtomIcon = _sfc_main$3;
      const _component_AtomButton = _sfc_main$2;
      const _component_AtomBadge = _sfc_main$5;
      _push(ssrRenderComponent(_component_AtomCard, mergeProps({
        hoverable: true,
        variant: "elevated",
        class: "game-card"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative" data-v-3846e68e${_scopeId}><div class="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden group" data-v-3846e68e${_scopeId}>`);
            if (__props.game.image) {
              _push2(`<img${ssrRenderAttr("src", __props.game.image)}${ssrRenderAttr("alt", __props.game.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" data-v-3846e68e${_scopeId}>`);
            } else {
              _push2(`<div class="w-full h-full flex items-center justify-center" data-v-3846e68e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AtomIcon, {
                name: __props.game.icon || "slot",
                size: "xl",
                class: "text-primary-500 opacity-50"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4" data-v-3846e68e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomButton, {
              variant: "gold",
              size: "sm",
              class: "w-full",
              onClick: playGame
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Jugar Ahora `);
                } else {
                  return [
                    createTextVNode(" Jugar Ahora ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="absolute top-3 right-3" data-v-3846e68e${_scopeId}>`);
            if (__props.game.isNew) {
              _push2(ssrRenderComponent(_component_AtomBadge, {
                variant: "gold",
                pill: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Nuevo`);
                  } else {
                    return [
                      createTextVNode("Nuevo")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (__props.game.isHot) {
              _push2(ssrRenderComponent(_component_AtomBadge, {
                variant: "danger",
                pill: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u{1F525} Hot`);
                  } else {
                    return [
                      createTextVNode("\u{1F525} Hot")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.game.jackpot) {
              _push2(`<div class="absolute top-3 left-3" data-v-3846e68e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AtomBadge, {
                variant: "primary",
                pill: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u{1F4B0} ${ssrInterpolate(formatCurrency(__props.game.jackpot))}`);
                  } else {
                    return [
                      createTextVNode("\u{1F4B0} " + toDisplayString(formatCurrency(__props.game.jackpot)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="p-4" data-v-3846e68e${_scopeId}><h3 class="text-lg font-bold text-white mb-2 truncate" data-v-3846e68e${_scopeId}>${ssrInterpolate(__props.game.title)}</h3><div class="flex items-center justify-between" data-v-3846e68e${_scopeId}><div class="flex items-center gap-2" data-v-3846e68e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "star",
              size: "sm",
              class: "text-yellow-500"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-400" data-v-3846e68e${_scopeId}>${ssrInterpolate(__props.game.rating || "4.5")}</span></div><div class="flex items-center gap-2" data-v-3846e68e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AtomIcon, {
              name: "user",
              size: "sm",
              class: "text-gray-400"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-300" data-v-3846e68e${_scopeId}>${ssrInterpolate(formatPlayers(__props.game.players))}</span></div></div>`);
            if (__props.game.provider) {
              _push2(`<p class="text-sm text-gray-400 mt-2" data-v-3846e68e${_scopeId}>${ssrInterpolate(__props.game.provider)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("div", { class: "aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden group" }, [
                  __props.game.image ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: __props.game.image,
                    alt: __props.game.title,
                    class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-full h-full flex items-center justify-center"
                  }, [
                    createVNode(_component_AtomIcon, {
                      name: __props.game.icon || "slot",
                      size: "xl",
                      class: "text-primary-500 opacity-50"
                    }, null, 8, ["name"])
                  ])),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4" }, [
                    createVNode(_component_AtomButton, {
                      variant: "gold",
                      size: "sm",
                      class: "w-full",
                      onClick: playGame
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Jugar Ahora ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "absolute top-3 right-3" }, [
                    __props.game.isNew ? (openBlock(), createBlock(_component_AtomBadge, {
                      key: 0,
                      variant: "gold",
                      pill: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Nuevo")
                      ]),
                      _: 1
                    })) : __props.game.isHot ? (openBlock(), createBlock(_component_AtomBadge, {
                      key: 1,
                      variant: "danger",
                      pill: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u{1F525} Hot")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  __props.game.jackpot ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "absolute top-3 left-3"
                  }, [
                    createVNode(_component_AtomBadge, {
                      variant: "primary",
                      pill: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u{1F4B0} " + toDisplayString(formatCurrency(__props.game.jackpot)), 1)
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "p-4" }, [
                  createVNode("h3", { class: "text-lg font-bold text-white mb-2 truncate" }, toDisplayString(__props.game.title), 1),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_AtomIcon, {
                        name: "star",
                        size: "sm",
                        class: "text-yellow-500"
                      }),
                      createVNode("span", { class: "text-sm text-gray-400" }, toDisplayString(__props.game.rating || "4.5"), 1)
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_AtomIcon, {
                        name: "user",
                        size: "sm",
                        class: "text-gray-400"
                      }),
                      createVNode("span", { class: "text-sm text-gray-300" }, toDisplayString(formatPlayers(__props.game.players)), 1)
                    ])
                  ]),
                  __props.game.provider ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-sm text-gray-400 mt-2"
                  }, toDisplayString(__props.game.provider), 1)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecules/GameCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3846e68e"]]);
const _sfc_main = {
  __name: "GameGrid",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    games: {
      type: Array,
      default: () => []
    },
    viewAllLink: String,
    showFilters: {
      type: Boolean,
      default: false
    },
    filters: {
      type: Array,
      default: () => [
        { label: "Todos", value: "all" },
        { label: "Populares", value: "popular" },
        { label: "Nuevos", value: "new" },
        { label: "Jackpot", value: "jackpot" }
      ]
    },
    loading: {
      type: Boolean,
      default: false
    },
    itemsPerPage: {
      type: Number,
      default: 12
    }
  },
  emits: ["play", "filter-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selectedFilter = ref("all");
    const currentPage = ref(1);
    const filteredGames = computed(() => {
      if (selectedFilter.value === "all") return props.games;
      return props.games.filter((game) => {
        switch (selectedFilter.value) {
          case "popular":
            return game.players > 1e3;
          case "new":
            return game.isNew;
          case "jackpot":
            return game.jackpot;
          default:
            return true;
        }
      });
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredGames.value.length / props.itemsPerPage);
    });
    const paginatedGames = computed(() => {
      const start = (currentPage.value - 1) * props.itemsPerPage;
      const end = start + props.itemsPerPage;
      return filteredGames.value.slice(start, end);
    });
    const handlePlayGame = (game) => {
      emit("play", game);
    };
    watch(selectedFilter, (newValue) => {
      currentPage.value = 1;
      emit("filter-change", newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AtomButton = _sfc_main$2;
      const _component_MoleculeGameCard = __nuxt_component_2;
      const _component_AtomIcon = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}><div class="container mx-auto px-4"><div class="flex items-center justify-between mb-8"><div><h2 class="text-3xl font-bold text-white mb-2">${ssrInterpolate(__props.title)}</h2>`);
      if (__props.subtitle) {
        _push(`<p class="text-gray-400">${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.viewAllLink) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.viewAllLink,
          class: "text-primary-500 hover:text-primary-400 font-semibold flex items-center gap-2 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ver todos <span${_scopeId}>\u2192</span>`);
            } else {
              return [
                createTextVNode(" Ver todos "),
                createVNode("span", null, "\u2192")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.showFilters) {
        _push(`<div class="flex gap-3 mb-6 overflow-x-auto pb-2"><!--[-->`);
        ssrRenderList(__props.filters, (filter) => {
          _push(ssrRenderComponent(_component_AtomButton, {
            key: filter.value,
            variant: unref(selectedFilter) === filter.value ? "primary" : "ghost",
            size: "sm",
            onClick: ($event) => selectedFilter.value = filter.value
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(filter.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(filter.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.loading) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
        ssrRenderList(8, (i) => {
          _push(`<div class="animate-pulse"><div class="bg-gray-800 rounded-xl h-64"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(filteredGames).length > 0) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
        ssrRenderList(unref(paginatedGames), (game) => {
          _push(ssrRenderComponent(_component_MoleculeGameCard, {
            key: game.id,
            game,
            onPlay: handlePlayGame
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-12">`);
        _push(ssrRenderComponent(_component_AtomIcon, {
          name: "slot",
          size: "xl",
          class: "text-gray-700 mb-4 mx-auto"
        }, null, _parent));
        _push(`<p class="text-gray-400 text-lg">No se encontraron juegos</p></div>`);
      }
      if (unref(totalPages) > 1) {
        _push(`<div class="flex justify-center gap-2 mt-8">`);
        _push(ssrRenderComponent(_component_AtomButton, {
          variant: "ghost",
          size: "sm",
          disabled: unref(currentPage) === 1,
          onClick: ($event) => currentPage.value--
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Anterior `);
            } else {
              return [
                createTextVNode(" Anterior ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="flex items-center px-4 text-gray-400"> P\xE1gina ${ssrInterpolate(unref(currentPage))} de ${ssrInterpolate(unref(totalPages))}</span>`);
        _push(ssrRenderComponent(_component_AtomButton, {
          variant: "ghost",
          size: "sm",
          disabled: unref(currentPage) === unref(totalPages),
          onClick: ($event) => currentPage.value++
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Siguiente `);
            } else {
              return [
                createTextVNode(" Siguiente ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organisms/GameGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=GameGrid-Dik9aLbG.mjs.map
