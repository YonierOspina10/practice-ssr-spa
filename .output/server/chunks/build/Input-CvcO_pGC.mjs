import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    label: String,
    placeholder: String,
    disabled: Boolean,
    required: Boolean,
    error: String,
    hint: String
  },
  emits: ["update:modelValue", "blur", "focus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    ref(false);
    const inputClasses = computed(() => {
      const baseClasses = "w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2";
      const errorClasses = props.error ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" : "border-gray-700 focus:border-primary-500 focus:ring-primary-500/50";
      const disabledClasses = props.disabled ? "opacity-50 cursor-not-allowed" : "";
      return `${baseClasses} ${errorClasses} ${disabledClasses}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><input${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""} class="${ssrRenderClass(unref(inputClasses))}">`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.id)} class="absolute -top-2.5 left-3 bg-gray-900 px-2 text-sm font-medium text-gray-300">${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="text-red-500 ml-1">*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.error) {
        _push(`<p class="mt-2 text-sm text-red-500">${ssrInterpolate(__props.error)}</p>`);
      } else if (__props.hint) {
        _push(`<p class="mt-2 text-sm text-gray-500">${ssrInterpolate(__props.hint)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Input-CvcO_pGC.mjs.map
