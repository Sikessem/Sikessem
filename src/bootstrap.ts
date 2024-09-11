import axios from 'axios';
import '@/echo';

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

if (document.getElementById('app')?.dataset.page) {
  const appName =
    import.meta.env.VITE_APP_NAME ||
    window.document.getElementsByTagName('title')[0]?.innerText ||
    'Sikessem';
  const { createInertiaApp } = await import('@inertiajs/vue3');
  const { resolvePageComponent } = await import(
    'laravel-vite-plugin/inertia-helpers'
  );
  const { createApp, h } = await import('vue');
  const { createPinia } = await import('pinia');
  const { ZiggyVue } = await import('../vendor/tightenco/ziggy');

  const pinia = createPinia();

  createInertiaApp({
    title: (title) =>
      `${!!title && title !== appName ? `${title} - ${appName}` : appName}`,
    resolve: (name) =>
      resolvePageComponent(
        `../views/pages/${name}.vue`,
        import.meta.glob('../views/pages/**/*.vue'),
      ),
    setup({ el, App, props, plugin }) {
      return createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(pinia)
        .use(ZiggyVue)
        .mount(el);
    },
    progress: {
      color: '#0078ff',
    },
  });
} else {
  const { Alpine, Livewire } = await import(
    '../vendor/livewire/livewire/dist/livewire.esm'
  );
  const { default: focus } = await import('@alpinejs/focus');

  window.Alpine = Alpine;
  Alpine.plugin(focus);
  Livewire.start();
}
