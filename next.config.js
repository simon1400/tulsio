const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const env = {
    APP_API: (() => {
      // if (isDev) return 'http://localhost:1335'
      if (isDev) return 'https://admin.tulsio.cz'
      if (isProd) return 'https://admin.tulsio.cz'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    APP_DOMAIN: (() => {
      // if (isDev) return 'https://tulsio.com'
      if (isDev) return 'http://localhost:3004'
      if (isProd) return 'https://tulsio.com'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    TYPESENSE_SEARCH_ONLY_API_KEY: (() => {
      if (isDev) return 'xyz'
      if (isProd) return 'asdfasdfasdf'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    TYPESENSE_HOST: (() => {
      if (isDev) return 'localhost'
      if (isProd) return 'search-tulsio.hardart.cz'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    TYPESENSE_PORT: (() => {
      if (isDev) return '8108'
      if (isProd) return '443'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    TYPESENSE_PROTOCOL: (() => {
      if (isDev) return 'http'
      if (isProd) return 'https'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    ECOMAIL: (() => {
      if (isDev) return '61fd558b1de2a61fd558b1de2b'
      if (isProd) return '61fd558b1de2a61fd558b1de2b'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })()
  }

  // next.config.js object
  return {
    env,
    // images: {
    //   domains: ['localhost', 'tulsio.com', 'admin.tulsio.cz'],
    //   disableStaticImages: false,
    // },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en', 'cs', 'catchAll'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'catchAll',
      // Set LocalDetection to false so that you not get redirected to "fake" as default
      localeDetection: false
    },
    async redirects() {
      return [
        {
          source: '/catchAll',
          destination: '/en',
          locale: false,
          permanent: false,
        },
        {
          source: '/catchAll/:slug*',
          destination: '/en/:slug*',
          locale: false,
          permanent: false,
        },
      ]
    },
  }
}
