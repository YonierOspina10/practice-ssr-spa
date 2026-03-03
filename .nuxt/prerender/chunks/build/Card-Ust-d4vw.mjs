import { computed, mergeProps, unref, useSSRContext } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "default",
      validator: (value) => ["default", "elevated", "glass", "bordered"].includes(value)
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const cardClasses = computed(() => {
      const baseClasses = "rounded-xl overflow-hidden transition-all duration-300";
      const variantClasses = {
        default: "bg-gray-900 border border-gray-800",
        elevated: "bg-gray-900 shadow-2xl",
        glass: "backdrop-blur-casino border border-gray-700/50",
        bordered: "bg-gray-900 border-2 border-primary-500"
      };
      const hoverClasses = props.hoverable ? "hover:shadow-primary-500/20 hover:border-primary-500/50 hover:transform hover:scale-[1.02] cursor-pointer" : "";
      return `${baseClasses} ${variantClasses[props.variant]} ${hoverClasses}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(cardClasses) }, _attrs))}>`);
      if (_ctx.$slots.header) {
        _push(`<div class="card-header p-6 border-b border-gray-800">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([__props.noPadding ? "" : "p-6", "card-body"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.$slots.footer) {
        _push(`<div class="card-footer p-6 border-t border-gray-800">`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Card-Ust-d4vw.mjs.map
