
import Page from '../layout/Page'
import Link from 'next/link'
import Image from '../components/Image'
import Head from 'next/head'
import homepageQuery from '../queries/homepage'
import { useQuery } from '@apollo/client'
import Button from '../components/Button'
import ArticleShort from '../components/ArticleShort'

const DOMAIN = process.env.APP_API;

const Home = () => {

  const {loading, data} = useQuery(homepageQuery);

  let mainArticle, seccondArticles;

  if(!loading) {
    const homepage = data.homepage.data.attributes
    mainArticle = homepage.articles?.[0];
    seccondArticles = homepage.articles.slice(1, 5);
  }
  
  return (
    <Page className="homepage">
      <Head>
        <link rel="alternate" hrefLang="x-default" href={DOMAIN} />
        {/*<link rel="alternate" hreflang="en-gb" href="http://en-gb.example.com/page.html" />*/}
      </Head>

      {!loading && <section className="uk-padding-remove">
        <div className="uk-container uk-container-large">
          <div className="hp-grid" uk-height-match=".hp-short">
            <div>
              <h1 className="home-head">Must read</h1>
              <div className="hp-short">
                <ArticleShort 
                  title={mainArticle.title}
                  link={`/${mainArticle?.article?.data?.attributes?.categories?.data?.[0]?.attributes?.slug}/${mainArticle?.article?.data?.attributes?.slug}`}
                  image={mainArticle.image.data}
                  label={mainArticle?.article?.data?.attributes?.categories?.data?.[0]?.attributes?.title}
                  text={mainArticle.text}
                  sticky="top"
                />
              </div>
              {/* <Banner /> */}
            </div>

            <div>
              <h2 className="home-head">Posledni</h2>
              <div className="hp-short">
                {seccondArticles.map((item, index) => <ArticleShort 
                  key={index}
                  title={item.title}
                  link={`/${item.article?.data?.attributes?.categories?.data?.[0]?.attributes?.slug}/${item.article?.data?.attributes?.slug}`}
                  image={item.image.data} 
                  label={item.article?.data?.attributes?.categories?.data?.[0]?.attributes?.title}
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


