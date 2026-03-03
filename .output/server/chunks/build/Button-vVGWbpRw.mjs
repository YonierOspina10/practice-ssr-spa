import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary", "gold", "danger", "ghost"].includes(value)
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg", "xl"].includes(value)
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: Boolean,
    loading: Boolean,
    fullWidth: Boolean
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const buttonClasses = computed(() => {
      const baseClasses = "font-semibold rounded-lg transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";
      const variantClasses = {
        primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl",
        secondary: "bg-gray-800 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl",
        gold: "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold shadow-xl hover:shadow-2xl",
        danger: "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl",
        ghost: "bg-transparent hover:bg-gray-800/50 text-white border border-gray-700 hover:border-gray-600"
      };
      const sizeClasses = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-base",
        lg: "py-4 px-8 text-lg",
        xl: "py-5 px-10 text-xl"
      };
      const widthClass = props.fullWidth ? "w-full" : "";
      return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${widthClass}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        disabled: __props.disabled || __props.loading,
        class: unref(buttonClasses)
      }, _attrs))}>`);
      if (__props.loading) {
        _push(`<span class="inline-block animate-spin mr-2">\u27F3</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Button-vVGWbpRw.mjs.map
