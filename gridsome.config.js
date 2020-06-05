module.exports = {
  siteName: 'Finding Force',
  siteUrl: process.env.GRIDSOME_APP_DOMAIN,
  siteDescription:
    'FindingForce runs solid technology solution to bring you fully autorated adaptive and meaningfull advisory at zero cost. Get information about licenses and costs',

  plugins: [
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: './src/data/*.json'
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
      use: `gridsome-plugin-netlify-cms`,
      options: {
        htmlTitle: 'Content Editor',
        htmlPath: 'static/admin/index.html',
        configPath: 'static/admin/config.yml',
        publicPath: '/admin',
        modulePath: 'src/cms/cms.js',
        enableIdentityWidget: true
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: process.env.GRIDSOME_APP_DOMAIN,
        sitemap: `${process.env.GRIDSOME_APP_DOMAIN}/sitemap.xml`,
        policy: [
          {
            userAgent: '*',
            allow: '/'
          }
        ]
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/tag/*', '/category/*'],
        config: {
          '/': {
            lastmod: new Date().toISOString().slice(0, 10),
            changefreq: 'weekly',
            priority: 0.6
          },
          '/blog/*': {
            lastmod: new Date().toISOString().slice(0, 10),
            changefreq: 'monthly',
            priority: 0.7
          },
          '/about': {
            lastmod: new Date().toISOString().slice(0, 10),
            changefreq: 'monthly',
            priority: 0.8
          }
        }
      }
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
