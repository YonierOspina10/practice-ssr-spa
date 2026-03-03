import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { h as useAuthStore, b as useRouter } from './server.mjs';

const _sfc_main = {
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "default",
      validator: (value) => ["default", "primary", "success", "warning", "danger", "gold"].includes(value)
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value)
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const badgeClasses = computed(() => {
      const baseClasses = "inline-flex items-center justify-center font-semibold";
      const variantClasses = {
        default: "bg-gray-700 text-gray-200",
        primary: "bg-primary-600 text-white",
        success: "bg-green-600 text-white",
        warning: "bg-yellow-600 text-gray-900",
        danger: "bg-red-600 text-white",
        gold: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900"
      };
      const sizeClasses = {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5"
      };
      const shapeClasses = props.pill ? "rounded-full" : "rounded";
      return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${shapeClasses}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(badgeClasses) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/Badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useAuth = () => {
  const authStore = useAuthStore();
  const router = useRouter();
  const isAuthenticated = computed(() => authStore.isAuthenticated);
  const user = computed(() => authStore.user);
  const loading = computed(() => authStore.loading);
  const login = async (credentials) => {
    try {
      authStore.setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      const userData = {
        id: "1",
        name: credentials.email.split("@")[0],
        email: credentials.email,
        balance: 1e3,
        avatar: null
      };
      authStore.setUser(userData);
      authStore.setToken("mock-jwt-token");
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      authStore.setLoading(false);
    }
  };
  const register = async (userData) => {
    try {
      authStore.setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        balance: 0,
        avatar: null
      };
      authStore.setUser(newUser);
      authStore.setToken("mock-jwt-token");
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      authStore.setLoading(false);
    }
  };
  const logout = async () => {
    authStore.clearAuth();
    await router.push("/");
  };
  return {
    isAuthenticated,
    user,
    loading,
    login,
    register,
    logout
  };
};

export { _sfc_main as _, useAuth as u };
//# sourceMappingURL=useAuth-BpAQ_fa7.mjs.map
