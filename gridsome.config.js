const SEO = require('./src/configs/seo-settings');

module.exports = {
  siteName: 'Finding Force',
  siteUrl: process.env.GRIDSOME_APP_DOMAIN,
  siteDescription:
    'FindingForce runs solid technology solution to bring you fully autorated adaptive and meaningfull advisory at zero cost. Get information about licenses and costs',

  plugins: [
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'settings/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: './content/author/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: SEO.robots
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: SEO.sitemap
    }
  ],
  templates: {
    Blog: [
      {
        path: '/blog/:title',
        component: './src/templates/BlogEntry.vue'
      }
    ],
    Category: [
      {
        path: '/category/:title',
        component: './src/templates/Category.vue'
      }
    ],
    Tag: [
      {
        path: '/tag/:title',
        component: './src/templates/Tag.vue'
      }
    ]
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@modules', '@/resources/js/modules');
    config.resolve.alias.set('@utilities', '@/resources/js/utilities');
  }
};
