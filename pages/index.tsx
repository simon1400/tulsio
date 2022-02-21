
import Page from '../layout/Page'
import Head from 'next/head'
import homepageQuery from '../queries/homepage'
import { useQuery } from '@apollo/client'
import ArticleShort from '../components/ArticleShort'
import { getStrapiURL } from '../lib/api'
import ModalNewsletter from '../layout/Modals/Newsletter'
import { useEffect } from 'react'
import {modal} from 'uikit'

const DOMAIN = process.env.APP_API;

const Home = () => {

  const {loading, data} = useQuery(homepageQuery);
  
  let mainArticle, seccondArticles, homepage;

  // useEffect(() => {
  //   modal('#modal-newsletter').show();
  // }, [])

  if(!loading) {
    homepage = data.homepage.data.attributes
    mainArticle = homepage.articles[0].article.data.attributes;
    seccondArticles = homepage.articles.slice(1);
    seccondArticles = seccondArticles.map(item => item.article.data.attributes)
  }
  
  return (
    <Page 
      className="homepage" 
      title={homepage?.meta?.title || 'Úvod'}
      description={homepage?.meta?.description || ''}
      image={homepage?.meta?.image ? getStrapiURL(homepage.meta.image) : null}
    >

      <Head>
        <link rel="alternate" hrefLang="x-default" href={DOMAIN} />
      </Head>

      <ModalNewsletter title="Všechno co se ve světě CBD děje ve vašem mailu." />

      {!loading && <section className="uk-padding-remove">
        <div className="uk-container uk-container-large">
          <div className="hp-grid" uk-height-match=".hp-short">
            <div>
              <h1 className="home-head">Must read</h1>
              <div className="hp-short">
                <ArticleShort 
                  title={mainArticle.title}
                  link={`/blog/${mainArticle?.slug}`}
                  image={mainArticle.image.data}
                  label={mainArticle?.labels?.data?.[0]?.attributes}
                  text={mainArticle.perex}
                  sticky="top"
                />
              </div>
              {/* <Banner /> */}
            </div>

            <div>
              <h2 className="home-head">Nejnovější</h2>
              <div className="hp-short resp-grid">
                {seccondArticles.map((item, index) => <ArticleShort 
                  key={index}
                  title={item.title}
                  link={`/blog/${item.slug}`}
                  image={item.image.data} 
                  label={item.labels?.data?.[0]?.attributes}
                  horizontal
                />)}
              </div>
            </div>
          </div>
        </div>
      </section>}
    </Page>
  )
}

export default Home


