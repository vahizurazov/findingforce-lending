// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '@/components/Layout.vue';
import FontAwesomeIcon from '@/configs/vue-awesome';

import '@/assets/styles/index.scss';

import Meta from '@/configs/meta-config';
import Fonts from '@/configs/fonts-config';

export default function (Vue, { router, head, isClient, body }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('icon', FontAwesomeIcon);
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en' };

  // Add attributes to BODY tag
  // head.bodyAttrs = { class: 'text-purple-900 leading-normal text-lg' };

  // Add fonts
  head.link.push(
    Fonts.preconnect,
    Fonts.stylesheet,
    Fonts.gfw1,
    Fonts.gfw2,
    Fonts.gfw3,
    Fonts.gfw4,
    Fonts.canonicalLink
  );

  // Add Global meta
  head.meta.push(
    Meta.main.title,
    Meta.main.keywords,
    Meta.main.robots,
    Meta.main.url,
    Meta.main.copyright,
    Meta.main.designer,
    Meta.og.description,
    Meta.og.image,
    Meta.og.title,
    Meta.og.type,
    Meta.og.url,
    Meta.twitter.card,
    Meta.twitter.description,
    Meta.twitter.image,
    Meta.twitter.title,
    Meta.twitter.url
  );
}
