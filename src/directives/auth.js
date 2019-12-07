function install(Vue, options = {}) {
  Vue.directive(options.name || 'auth', {
    inserted(el, binding) {
      options.method && options.method(el, binding);
    },
  });
}

export default { install };
