
import Page from '../layout/Page'
import Head from 'next/head'
import homepageQuery from '../queries/homepage'
import { useQuery } from '@apollo/client'
import ArticleShort from '../components/ArticleShort'

const DOMAIN = process.env.APP_API;

const Home = () => {

  const {loading, data} = useQuery(homepageQuery);
  
  let mainArticle, seccondArticles;

  if(!loading) {
    const homepage = data.homepage.data.attributes
    mainArticle = homepage.articles[0].article.data.attributes;
    seccondArticles = homepage.articles.slice(1);
    seccondArticles = seccondArticles.map(item => item.article.data.attributes)

    console.log(seccondArticles);
    
  }
  
  return (
    <Page className="homepage">
      <Head>
        <link rel="alternate" hrefLang="x-default" href={DOMAIN} />
      </Head>

      {!loading && <section className="uk-padding-remove">
        <div className="uk-container uk-container-large">
          <div className="hp-grid" uk-height-match=".hp-short">
            <div>
              <h1 className="home-head">Must read</h1>
              <div className="hp-short">
                <ArticleShort 
                  title={mainArticle.title}
                  link={`/${mainArticle?.categories?.data?.[0]?.attributes?.slug}/${mainArticle?.slug}`}
                  image={mainArticle.image.data}
                  label={mainArticle?.labels?.data?.[0]?.attributes}
                  text={mainArticle.perex}
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
                  link={`/${item.categories?.data?.[0]?.attributes?.slug}/${item.slug}`}
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


