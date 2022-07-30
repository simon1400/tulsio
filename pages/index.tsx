
import Page from '../layout/Page'
import Head from 'next/head'
import homepageQuery from '../queries/homepage'
import ArticleShort from '../components/ArticleShort'
import { client, getStrapiURL } from '../lib/api'
import ModalNewsletter from '../layout/Modals/Newsletter'
import getBaners from '../queries/baners'
import Banner from '../components/Banner'

enum BANER_POSITION {
  POSITION_1='Home_1',
  POSITION_2='Home_2',
}

const DOMAIN = process.env.APP_DOMAIN;

export async function getServerSideProps() {

  const { data: banersData } = await client.query({
    query: getBaners,
    variables: {
      query: [
        { position: {eq: "Home_1"} },
        { position: {eq: "Home_2"} }
      ]
    }
  });
  
  const { data: homepageData } = await client.query({ query: homepageQuery });

  const homepage = homepageData.homepage.data.attributes
  const meta = homepage?.meta
  const mainArticle = homepage.articles[0].article.data.attributes;
  let seccondArticles = homepage.articles.slice(1);
  seccondArticles = seccondArticles.map(item => item.article.data.attributes)
  const baners = banersData.baners.data.map(item => item.attributes)

  const filterBaners1 = baners.filter(item => item.position === BANER_POSITION.POSITION_1)
  const filterBaners2 = baners.filter(item => item.position === BANER_POSITION.POSITION_2)

  const baner1 = filterBaners1[Math.floor(Math.random() * filterBaners1.length)]
  const baner2 = filterBaners2[Math.floor(Math.random() * filterBaners2.length)]

  return {
    props: {
      baner1: baner1 || null,
      baner2: baner2 || null,
      mainArticle,
      seccondArticles,
      meta
    }
  }
}

const Home = ({
  baner1,
  baner2,
  mainArticle,
  seccondArticles,
  meta
}) => {
  
  return (
    <Page 
      className="homepage" 
      title={meta?.title || 'Úvod'}
      description={meta?.description || ''}
      image={meta?.image ? getStrapiURL(meta.image) : null}
    >

      <Head>
        <link rel="alternate" hrefLang="cs" href={DOMAIN+'/cs'} />
      </Head>

      <ModalNewsletter title="Všechno co se ve světě CBD děje ve vašem mailu." />

      <section className="uk-padding-remove">
        <div className="uk-container uk-container-large">
          <div className="hp-grid" uk-height-match=".hp-short">
            <div>
              <h1 className="home-head">Must read</h1>
              <div className="hp-short">
                <ArticleShort 
                  title={mainArticle.title}
                  link={`/blog/${mainArticle?.slug}`}
                  image={mainArticle.image.data}
                  label={mainArticle?.labels?.data.map(item => item.attributes)}
                  text={mainArticle.perex}
                  sticky="top"
                />
                {baner1 && <Banner format="&width=800" data={baner1} />}
              </div>
              
            </div>

            <div>
              <h2 className="home-head">Nejnovější</h2>
              <div className="hp-short resp-grid">
                {seccondArticles.map((item, index) => {                  
                  if(index === Math.floor(seccondArticles.length / 2) && baner2) {
                    return <>
                      <Banner format="&width=540" data={baner2} />
                      <ArticleShort 
                        key={index}
                        title={item.title}
                        link={`/blog/${item.slug}`}
                        image={item.image.data} 
                        label={item.labels?.data?.[0]?.attributes}
                        horizontal
                      />
                    </>
                  }
                  return <ArticleShort 
                    key={index}
                    title={item.title}
                    link={`/blog/${item.slug}`}
                    image={item.image.data} 
                    label={item.labels?.data?.[0]?.attributes}
                    horizontal
                  />
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Home


