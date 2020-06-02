module.exports = {
  siteName: 'Gridsome',

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
