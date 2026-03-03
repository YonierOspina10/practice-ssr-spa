import { readonly, toRef, isRef } from 'file://C:/Users/Yonier%20Ospina/first-project/node_modules/vue/index.mjs';
import { u as useNuxtApp } from './server.mjs';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useToast = () => {
  const toasts = useState("toasts", () => []);
  const addToast = (message, type = "info", duration = 3e3) => {
    const id = Date.now();
    const toast = {
      id,
      message,
      type,
      // 'success', 'error', 'warning', 'info'
      duration
    };
    toasts.value.push(toast);
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
    return id;
  };
  const removeToast = (id) => {
    const index = toasts.value.findIndex((t) => t.id === id);
    if (index > -1) {
      toasts.value.splice(index, 1);
    }
  };
  const success = (message, duration) => addToast(message, "success", duration);
  const error = (message, duration) => addToast(message, "error", duration);
  const warning = (message, duration) => addToast(message, "warning", duration);
  const info = (message, duration) => addToast(message, "info", duration);
  return {
    toasts: readonly(toasts),
    addToast,
    removeToast,
    success,
    error,
    warning,
    info
  };
};

export { useToast as u };
//# sourceMappingURL=useToast-Dg_pT9RU.mjs.map
