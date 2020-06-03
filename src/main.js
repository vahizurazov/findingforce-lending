// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '@/components/Layout.vue';
import FontAwesomeIcon from '@/configs/vue-awesome';

import '@/assets/styles/index.scss';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('icon', FontAwesomeIcon);
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en', class: 'min-h-full antialiased' };

  // Add attributes to BODY tag
  // head.bodyAttrs = { class: 'text-purple-900 leading-normal text-lg' };

  // Add fonts
  head.link.push(
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap'
    },
    {
      href: 'https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecg.woff2',
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: ''
    },
    {
      href: 'https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2',
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: ''
    },
    {
      href: 'https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLBT5Z1xlFQ.woff2',
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: ''
    },
    {
      href: 'https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2',
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: ''
    }
  );
}
