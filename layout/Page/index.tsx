import { useState, useEffect, FC, useContext } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import qs from 'qs'
import Header from '../Header'
import Footer from '../Footer'
import Search from '../Search'
import PageProps from '../../interfaces/page';
import { DataStateContext } from '../../context/dataStateContext';
import axios from 'axios';
// import { AnimatePresence } from 'framer-motion'

const Page: FC<PageProps> = ({
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
  ogDescription = '',
}) => {

  const { state } = useContext(DataStateContext)

  const router = useRouter()
  const global = {
    site_url: process.env.NODE_ENV === 'development' ? 'http://localhost:3004/cs' : 'https://tulsio.com/cs',
    facebook_app_id: '',
    defaultTitle: 'Tulsio',
    defaultDescription: 'Tulsio',
    defaultImage: `${process.env.NODE_ENV === 'development' ? 'http://localhost:3004/cs' : 'https://tulsio.com/cs'}`,
    defaultTwitter: '@cereallarceny',
    defaultSep: ' | ',
    gtm: ''
  }
  
  const [meta, setMeta] = useState({
    title: title || null,
    description: description || null,
    image: {
      data: null
    }
  })

  useEffect(() => {
    if(title || description){
      setMeta({
        ...meta,
        title: title,
        description: description
      })
    }
  }, [title, description])

  useEffect(() => {
    if(state?.slug?.length) {
      if(state.slug !== 'blog') {
        axios.get(`https://admin.tulsio.cz/api/categories?${qs.stringify({
          filters: {
            slug: {
              $eq: state.slug,
            },
          },
          populate: {
            meta: {
              fields: ['title', 'description'],
            },
          },
        })}`).then(resData => {
          const resMeta = {...resData.data.data[0].attributes.meta}
          if(!resMeta.image) {
            resMeta.image = {
              data: null
            }
          }
          setMeta(resMeta)
        }).catch(err => console.log('error', err))
      }else{
        setMeta({
          ...meta,
          title: 'Blog',
          description: ''
        })
      }
    }
  }, [state])
  
  const theTitle = meta.title ? (meta.title + global.defaultSep + global.defaultTitle) : global.defaultTitle;
  const theDescription = meta.description ? meta.description : global.defaultDescription;
  const theImage = image ? image : global.defaultImage;

  return (
    <div className="root-component">
      <Head>

        {/*<!-- Google Tag Manager -->*/}
        {global.gtm && <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQFGK4R');`}} />}
        {/*<!-- End Google Tag Manager -->*/}

        <meta charSet="utf-8" />

        {/* FAVICON */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#0000ff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#0000ff" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{theTitle}</title>
        <link rel="canonical" href={global.site_url+router.asPath} />
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
        {/* <meta name="robots" content="noindex, nofollow" /> */}

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
      <Search />
    </div>
  );
}


export default Page
