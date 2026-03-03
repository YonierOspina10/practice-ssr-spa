import { computed, mergeProps, unref, useSSRContext } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => [
        "chip",
        "crown",
        "cards",
        "dice",
        "roulette",
        "slot",
        "coins",
        "star",
        "fire",
        "lightning",
        "trophy",
        "gem",
        "user",
        "wallet",
        "settings",
        "logout",
        "menu",
        "close"
      ].includes(value)
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["xs", "sm", "md", "lg", "xl"].includes(value)
    },
    color: {
      type: String,
      default: "current"
    }
  },
  setup(__props) {
    const props = __props;
    const iconClasses = computed(() => {
      const sizeClasses = {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-12 h-12"
      };
      return `inline-block ${sizeClasses[props.size]}`;
    });
    const iconSvg = computed(() => {
      const icons = {
        chip: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor">$</text></svg>',
        crown: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z"/></svg>',
        cards: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="6" width="10" height="14" rx="2" fill="currentColor" opacity="0.5"/><rect x="10" y="4" width="10" height="14" rx="2" fill="currentColor"/></svg>',
        dice: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor"/><circle cx="8" cy="8" r="1.5" fill="white"/><circle cx="16" cy="16" r="1.5" fill="white"/><circle cx="12" cy="12" r="1.5" fill="white"/></svg>',
        roulette: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',
        slot: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" fill="currentColor"/><circle cx="12" cy="8" r="2" fill="white"/><circle cx="12" cy="14" r="2" fill="white"/></svg>',
        coins: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="9" r="7" stroke="currentColor" stroke-width="2" fill="gold"/><circle cx="15" cy="15" r="7" stroke="currentColor" stroke-width="2" fill="gold"/></svg>',
        star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',
        fire: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 7 6 7 11C7 14.31 9.69 17 13 17C16.31 17 19 14.31 19 11C19 6 14 2 14 2L12 5L12 2Z" fill="currentColor"/></svg>',
        lightning: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/></svg>',
        trophy: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6C6 2 7 6 7 8C7 10 8.5 12 10 13C10.5 13.3 11 13.5 12 13.5C13 13.5 13.5 13.3 14 13C15.5 12 17 10 17 8C17 6 18 2 18 2Z" stroke="currentColor" stroke-width="2" fill="none"/><rect x="10" y="13" width="4" height="5" fill="currentColor"/><rect x="8" y="18" width="8" height="2" fill="currentColor"/></svg>',
        gem: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 8L12 22L22 8L12 2Z" fill="currentColor" opacity="0.8"/><path d="M12 2L7 8L12 15L17 8L12 2Z" fill="currentColor"/></svg>',
        user: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M6 21C6 17 8.5 15 12 15C15.5 15 18 17 18 21" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
        wallet: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="6" width="18" height="14" rx="2" fill="currentColor"/><rect x="15" y="10" width="4" height="4" rx="1" fill="white"/></svg>',
        settings: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 2C12 2 10.5 4 10 5C9.5 6 9 7 9 8C9 8 9.5 8.5 10 9C10.5 9.5 11 10 12 10C13 10 13.5 9.5 14 9C14.5 8.5 15 8 15 8C15 7 14.5 6 14 5C13.5 4 12 2 12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
        logout: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 17L21 12L16 7M21 12H9M9 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H9" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
        menu: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="5" width="18" height="2" fill="currentColor"/><rect x="3" y="11" width="18" height="2" fill="currentColor"/><rect x="3" y="17" width="18" height="2" fill="currentColor"/></svg>',
        close: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2"/></svg>'
      };
      return icons[props.name] || icons.star;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(iconClasses) }, _attrs))}>${(_a = unref(iconSvg)) != null ? _a : ""}</span>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Icon-B4vqryPV.mjs.map
