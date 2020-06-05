const meta = {
  title: 'Finding Force',
  host: process.env.GRIDSOME_APP_DOMAIN,
  description:
    'FindingForce runs solid technology solution to bring you fully autorated adaptive and meaningfull advisory at zero cost. Get information about licenses and costs',
  owner: 'https://sparkybit.com/',
  image: `${process.env.GRIDSOME_APP_DOMAIN}/img/meta-image.png`
};
export default {
  main: {
    title: {
      name: 'title',
      contenet: meta.title
    },
    keywords: {
      name: 'keywords',
      contenet: 'salesforce, sparkybit, sales, service, commerce, marketing, CRM'
    },
    robots: {
      name: 'robots',
      contenet: 'index, follow'
    },
    copyright: {
      name: 'copyright',
      contenet: meta.owner
    },
    designer: {
      name: 'designer',
      contenet: meta.owner
    },
    url: {
      name: 'url',
      contenet: meta.host
    }
  },
  og: {
    type: {
      property: 'og:type',
      content: 'website'
    },
    url: { property: 'og:url', content: meta.host },
    title: { property: 'og:title', content: meta.title },
    description: { property: 'og:description', content: meta.description },
    image: { property: 'og:image', content: meta.image }
  },
  twitter: {
    description: { property: 'twitter:description', content: meta.description },
    card: { property: 'twitter:card', content: 'summary_large_image' },
    url: { property: 'twitter:url', content: meta.host },
    title: { property: 'twitter:title', content: meta.title },
    image: { property: 'twitter:image', content: meta.image }
  }
};
