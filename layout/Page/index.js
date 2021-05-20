import { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../Header'
import Footer from '../Footer'

const Page = ({
  children,
  id,
  className,
  title,
  description,
  image,
  twitter,
  contentType,
  published,
  category,
  updated,
  noCrawl,
  tags,
  ogTitle = '',
  ogDescription = ''
}) => {

  const router = useRouter()
  const [global, setGlobal] = useState({
    site_url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://tulsio.cz',
    facebook_app_id: '',
    defaultTitle: 'TULSIO',
    defaultDescription: 'Tulsio',
    defaultImage: `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://tulsio.cz'}`,
    defaultTwitter: '@cereallarceny',
    defaultSep: ' ',
    gtm: ''
  })

  const theTitle = title ? (title + global.defaultSep + global.defaultTitle).substring(0, 60) : global.defaultTitle;
  const theDescription = description ? description.substring(0, 155) : global.defaultDescription;
  const theImage = image ? image : global.defaultImage;

  return (
    <div className="root-component">
      <Head>

        {/*<!-- Google Tag Manager -->*/}
        {global.gtm && <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${global.gtm}');`}} />}
        {/*<!-- End Google Tag Manager -->*/}

        <meta charSet="utf-8" />

        {/* FAVICON */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{theTitle}</title>
        <link rel="canonical" href={global.site_url+router.route} />
        <meta itemProp="name" content={theTitle} />
        <meta itemProp="description" content={theDescription} />
        <meta itemProp="image" content={theImage} />
        <meta name="description" content={theDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="TULSIO" />
        <meta name="twitter:title" content={ogTitle || theTitle} />
        <meta name="twitter:description" content={ogDescription || theDescription} />
        {/*<meta name="twitter:creator" content={twitter || global.defaultTwitter} />*/}
        <meta name="twitter:image:src" content={theImage} />
        <meta property="og:title" content={ogTitle || theTitle} />
        <meta property="og:type" content={contentType || 'website'} />
        <meta property="og:url" content={global.site_url+router.asPath} />
        <meta property="og:image" content={theImage} />
        <meta property="og:description" content={ogDescription || theDescription} />
        <meta property="og:site_name" content="TULSIO" />
        <meta property="fb:app_id" content={global.facebook_app_id} />
        <meta name="robots" content="noindex, nofollow" />

        {published && <meta name="article:published_time" content={published} />}
        {category && <meta name="article:section" content={category} />}
        {updated && <meta name="article:modified_time" content={updated} />}
        {noCrawl && <meta name="robots" content="noindex, nofollow" />}
        {tags && <meta name="article:tag" content={tags} />}

      </Head>

      {/*<!-- Google Tag Manager (noscript) -->*/}
      <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${global.gtm || 'GTM-KH5BW7W'}`}
      height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
      {/*<!-- End Google Tag Manager (noscript) -->*/}

      <Header />
      <main id={id} className={className}>{children}</main>
      <Footer />

    </div>
  );
}


export default Page
