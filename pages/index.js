
import Page from '../layout/Page'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from '../components/image'
import Head from 'next/head'
import homepageQuery from '../queris/homepage'
import { useQuery } from '@apollo/client';


const DOMAIN = process.env.APP_API;

const Home = () => {

  const router = useRouter();
  const {loading, data} = useQuery(homepageQuery);

  console.log(data);

  if(loading) {
    return ''
  }
  const mainArticle = data.homepage.article_top;
  const seccondArticles = data.homepage.articles;
  // const lastArticles = data.claneks.slice(4, 6);
  
  const handleCategory = (e, link) => {
    e.preventDefault()
    e.stopPropagation()

    router.push(`/kategorie/${link}`)
  }

  return (
    <Page className="homepage">
      <Head>
        <link rel="alternate" hrefLang="x-default" href={DOMAIN} />
        {/*<link rel="alternate" hreflang="en-gb" href="http://en-gb.example.com/page.html" />*/}
      </Head>

      <section className="top">
        <div className="uk-container uk-container-small">
          <h1>Váš průvodce světem konopí</h1>
          <div>
            <a href="/" className="button">Přihlást k novinkám</a>
            <a href="/" className="button bare">Co je to CBD?</a>
          </div>
        </div>
      </section>

      <section className="uk-padding-remove">
        <div className="uk-container uk-container-large">
          <div className="uk-grid uk-grid-stack" uk-grid="">
            <div className="uk-width-1-2@m">
              <div className="blog-short">
                <Link href={`/clanek/${mainArticle?.slug}`}>
                  <a className="blog-short-item">
                    <div className="blog-short-img-wrap">
                      <Image image={mainArticle.image} />
                    </div>
                    <div className="blog-short-info-wrap">
                      <label onClick={e => handleCategory(e, mainArticle.categories[0]?.slug)}>{mainArticle.categories[0]?.title}</label>
                      <h2><span>{mainArticle?.title}</span></h2>
                      <div dangerouslySetInnerHTML={{__html: mainArticle?.perex}}></div>
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
                {seccondArticles.map((item, index) => <Link key={index} href={`/clanek/${item?.slug}`}>
                  <a>
                    <div className="blog-short-img-wrap">
                      <Image image={item?.image} />
                    </div>
                    <div className="blog-short-info-wrap">
                      <label onClick={e => handleCategory(e, item.categories[0]?.slug)}>{item.categories[0]?.title}</label>
                      <h2><span>{item?.title}</span></h2>
                      <div dangerouslySetInnerHTML={{__html: item?.perex}}></div>
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
