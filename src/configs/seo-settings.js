module.exports = {
  robots: {
    host: process.env.GRIDSOME_APP_DOMAIN,
    sitemap: `${process.env.GRIDSOME_APP_DOMAIN}/sitemap.xml`,
    policy: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },
  sitemap: {
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
};
