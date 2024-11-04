import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, h } from 'vue';
import { ZiggyVue } from '../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Sikessem';

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    title: (title) =>
      `${!!title && title !== appName ? `${title} - ${appName}` : appName}`,
    resolve: (name) =>
      resolvePageComponent(
        `../views/pages/${name}.vue`,
        import.meta.glob('../views/pages/**/*.vue'),
      ),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue, {
          ...page.props.ziggy,
          location: new URL(page.props.ziggy.location),
        });
    },
    progress: {
      color: '#00ced1ff',
    },
  }),
);
