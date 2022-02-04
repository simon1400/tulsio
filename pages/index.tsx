
import Page from '../layout/Page'
import Link from 'next/link'
import Image from '../components/Image'
import Head from 'next/head'
import homepageQuery from '../queries/homepage'
import { useQuery } from '@apollo/client'
import Button from '../components/Button'

const DOMAIN = process.env.APP_API;

const Home = () => {

  const {loading, data} = useQuery(homepageQuery);

  if(loading) {
    return ''
  }
  const homepage = data.homepage.data.attributes
  const mainArticle = homepage.articles[0];
  const seccondArticles = homepage.articles.slice(1, 5);

  return (
    <Page className="homepage">
      <Head>
        <link rel="alternate" hrefLang="x-default" href={DOMAIN} />
        {/*<link rel="alternate" hreflang="en-gb" href="http://en-gb.example.com/page.html" />*/}
      </Head>

      <section className="top">
        <div className="uk-container uk-container-small">
          <h1>{homepage.title}</h1>
          <div>
            <Button text={homepage.cta.text} link={homepage.cta.link} native />
            <Button text={homepage.secCta.text} link={homepage.secCta.link} native bare />
          </div>
        </div>
      </section>

      <section className="uk-padding-remove">
        <div className="uk-container uk-container-large">
          <div className="uk-grid uk-grid-stack" uk-grid="">
            <div className="uk-width-1-2@m">
              <div className="blog-short">
                <Link href={`/${mainArticle?.article?.data?.attributes?.categories?.data?.[0]?.attributes?.slug}/${mainArticle?.article?.data?.attributes?.slug}`}>
                  <a className="blog-short-item">
                    {mainArticle?.image && <div className="blog-short-img-wrap">
                      <Image image={mainArticle.image.data} />
                    </div>}
                    <div className="blog-short-info-wrap">
                      {/* <label onClick={e => handleCategory(e, mainArticle.categories[0]?.slug)}>{mainArticle.categories[0]?.title}</label> */}
                      <label>{mainArticle.article.data.attributes.categories.data[0].attributes.title}</label>
                      <h2><span>{mainArticle.title}</span></h2>
                      <div dangerouslySetInnerHTML={{__html: mainArticle.text}}></div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="banner">
                <span className="title">inzerujte na tulsiu</span>
              </div>
            </div>

            <div className="uk-width-1-2@m">
              {!!seccondArticles.length && <div className="blog-one-col-short">
                {seccondArticles.map((item, index) => <Link key={index} href={`/${item.article.data.attributes.categories.data[0].attributes.slug}/${item.article.data.attributes.slug}`}>
                  <a>
                    {item?.image && <div className="blog-short-img-wrap">
                      <Image image={item.image.data} />
                    </div>}
                    <div className="blog-short-info-wrap">
                      {/* <label onClick={e => handleCategory(e, item.categories[0]?.slug)}>{item.categories[0]?.title}</label> */}
                      <label>{item.article.data.attributes.categories.data[0]?.attributes.title}</label>
                      <h3><span>{item?.title}</span></h3>
                      <div dangerouslySetInnerHTML={{__html: item?.text}}></div>
                    </div>
                  </a>
                </Link>)}
              </div>}
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Home


