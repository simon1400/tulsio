const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')
// const withBundleAnalyzer = require('@next/bundle-analyzer')

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
      // if (isDev) return 'xyz'
      if (isDev) return 'asdfasdfasdf'
      if (isProd) return 'asdfasdfasdf'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    TYPESENSE_HOST: (() => {
      // if (isDev) return 'localhost'
      if (isDev) return 'search-tulsio.hardart.cz'
      if (isProd) return 'search-tulsio.hardart.cz'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    TYPESENSE_PORT: (() => {
      // if (isDev) return '8108'
      if (isDev) return '443'
      if (isProd) return '443'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    TYPESENSE_PROTOCOL: (() => {
      // if (isDev) return 'http'
      if (isDev) return 'https'
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
    i18n: {
      locales: ['cs', 'catchAll'],
      defaultLocale: 'catchAll',
      localeDetection: false
    },
    async redirects() {
      return [
        {
          source: '/catchAll',
          destination: '/cs',
          locale: false,
          permanent: false,
        },
        {
          source: '/catchAll/:slug*',
          destination: '/cs/:slug*',
          locale: false,
          permanent: false,
        },
      ]
    },
  }
}
