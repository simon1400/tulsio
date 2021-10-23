import Page from '../layout/Page'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from '../components/image'
import Head from 'next/head'
import homepageQuery from '../queris/homepage'
import { useQuery } from '@apollo/client';
import MainLink from '../components/MainLink'

import AxiosAPI from '../restClient'

const DOMAIN = process.env.APP_API;

export async function getServerSideProps() {

  const res = await AxiosAPI.get('/claneks');
  const data = res.data;
 
  return {
    props: {
      topArticle: data[0],
      secondaryArticles: data.slice(1, 4),
      lastArticles: data.slice(3, 6)
    }
  }
}

// const Home = ({ topArticle, secondaryArticles, lastArticles }) => {
  const Home = () => {

  const router = useRouter();
  const { loading, error, data } = useQuery(homepageQuery);

  if(loading) {
    return ''
  }
  const mainArticle = data.claneks[0];
  const secondaryArticles = data.claneks.slice(1, 5);
  const lastArticles = data.claneks.slice(4, 6);
  
  const handleCategory = (e, link) => {
    e.preventDefault()
    e.stopPropagation()

    router.push(`/kategorie/${link}`)
  }

  return (
    <Page>
      <Head>
        <link rel="alternate" hrefLang="x-default" href={DOMAIN} />
        {/*<link rel="alternate" hreflang="en-gb" href="http://en-gb.example.com/page.html" />*/}
      </Head>
      <div className="background-top-left">
        <img src="/assets/photo6019458277106104093.jpg"/>
      </div>
      <div className="background-top-right">
        <img src="/assets/photo6019458277106104095.jpg"/>
      </div>

      {/* test grid
      <div className="uk-child-width-expand@s uk-text-center" uk-grid="">
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
      </div> */}

    
      <section className="top">
        <div uk-grid="">
          <div className="uk-width-expand">
            <div className="uk-container">
              <h1>Váš průvodce světem konopí</h1>
            </div>
          </div>
        </div>

        <div className="uk-text-center" uk-grid="">
          <div className="uk-width-expand top-link-container">
            <MainLink text={ "Přihlást k novinkám" } link={"/"}/>
            {/* <a className="main-link"><span>Přihlást k novinkám</span></a> */}
            <a className="second-link">Co je to CBD?</a>
          </div>
        </div>
       

{/* FIX-ME
        <div className="uk-container">
           <h1>Váš průvodce světem konopí.</h1>
           <div className="top-link-container">
            <a className="main-link"><span>Přihlást k novinkám</span></a>
            <a className="second-link">Co je to CBD?</a>
          </div>
        </div> */}
        {/* <div className="uk-grid">
          <h1>Váš průvodce světem konopí.</h1>
          
        </div> */}
       
      </section>
      {/* <section className="top">
        <div className="uk-grid uk-grid-collapse uk-child-width-1-2@m uk-child-width-1-1 uk-grid-stack" uk-grid="">
          <div>
            <Link href={`/clanek/${mainArticle.slug}`}>
              <a>
                <div className="img">
                  <Image image={mainArticle.image} />
                </div>
              </a>
            </Link>
          </div>
          <div>
            <div className="info">
              <div className="info-top big-text">
                <Link href={`/clanek/${mainArticle?.slug}`}>
                  <a className="button circle uk-hidden@m">
                    <img className="uk-svg" src="/assets/right.svg" uk-svg="" />
                  </a>
                </Link>
                <label onClick={e => handleCategory(e, mainArticle.categories[0]?.slug)}>{mainArticle.categories[0]?.title}</label>
                <Link href={`/clanek/${mainArticle.slug}`}>
                  <a>
                    <h1><span>{mainArticle.title}</span></h1>
                  </a>
                </Link>
                <div  dangerouslySetInnerHTML={{__html: mainArticle?.perex}}></div>
                <Link href={`/clanek/${mainArticle?.slug}`}>
                  <a className="button circle uk-visible@m">
                    <img className="uk-svg" src="/assets/right.svg" uk-svg="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="main">
        <div className="uk-container main-section" >
          <div className="uk-grid uk-grid-stack" uk-grid="">
            <div className="uk-width-1-2@m left">
              <div className="uk-container">
                <div className="main-article"> 
                  <Link href={`/clanek/${mainArticle?.slug}`}>
                    <div>
                      <div className="img">
                        <Image image={mainArticle.image} />
                      </div>
                      <div className="faq">
                      {mainArticle.categories[0]?.title}
                      </div>
                      <div className="title">
                        Jak správně dávkovat CBD
                      </div>
                      <div className="text">
                        Pravděpodobně jste už slyšeli o zdravotních výhodách CBD, ale kolik byste měli vzít, abyste je cítili? Cannabidiol nebo CBD je jednou z více než 60 účinných látek v rostlině konopí. Tyto aktivní sloučeniny, známé jako kanabinoidy, ovlivňují vaše tělo mnoha různými způsoby.
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="empty-blog-short-container">
                <span className="title">inzerujte na tulsiu</span>
              </div>
            </div>


            <div className="uk-width-1-2@m right">

            {/* {!!secondaryArticles.length && <section className="blog-one-col-short">
              <div className="uk-container uk-contaner-xsmall">

                {secondaryArticles.map((item, index) => <Link key={index} href={`/clanek/${item?.slug}`}>
                    <a className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@s" uk-grid="">
                      <div>
                        <div className="blog-short-img-wrap">
                          <Image image={item?.image} />
                        </div>
                      </div>
                      <div>
                        <div className="blog-short-info-wrap">
                          <label onClick={e => handleCategory(e, item.categories[0]?.slug)}>{item.categories[0]?.title}</label>
                          <h2><span>{item?.title}</span></h2>
                        </div>
                      </div>
                    </a>
                  </Link>)}

                </div>
              </section>
            } */}

            {!!secondaryArticles.length && <div className="uk-container uk-contaner-xsmall">
              { secondaryArticles.map((item, index) =>
                <div className="blog-short-container"  key={item.id}>
                    <a className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@s" uk-grid="">
                      <div>
                        <div className="blog-short-img-wrap">
                          <Image image={item.image} />
                        </div>
                      </div>
                      <div>
                        <div className="blog-short-info-wrap">
                        <div className="faq" onClick={e => handleCategory(e, item.categories[0]?.slug)}>{item.categories[0]?.title}</div>
                         <Link href={`/clanek/${item.slug}`}>
                           <div>
                            <h2>{item.title}</h2>
                            <div className="text">
                              {item.perex}
                            </div>
                           </div>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </div>
                 )}
              </div>
            }


            {/* <div className="uk-container uk-contaner-xsmall">
              <div className="blog-short-container">
                <a className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@s" uk-grid="">
                  <div>
                    <div className="blog-short-img-wrap">
                    
                      <Image image={mainArticle.image} />
                    </div>
                  </div>
                  <div>
                    <div className="blog-short-info-wrap">
                    <div className="faq">FAQ</div>
                      
                      <h2>Co je CBD?</h2>
                      <div className="text">
                      Cannabidiol neboli také CBD je jedna z mnoha složek nalezených v rostlině konopí. Známější Tetrahydrocannbinol nebo (THC) je další aktivní...
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}

            {/* <label onClick={e => handleCategory(e, item.categories[0]?.slug)}>{item.categories[0]?.title}</label> */}
  
            </div>
            <div className="uk-width-1-1">
            <div className="uk-container bottom-section">
              <div className="title">
                <h2>Všechno co se ve světě CBD děje ve vašem mailu.</h2>
                <MainLink text={"přihlásit k odběru"} link={"/"}/>
                 
              </div>
              <div className="background-bottom-right">
                <img src="/assets/photo6019458277106104094.jpg"/>
              </div>
          </div>
              </div>


          </div>
        </div>
      </section>
      
      {/* <section className="bottom">
        <div className="uk-container bottom-section">
          <div className="uk-grid uk-grid-stack">
              </div>
              <div className="title">
                <h2>Všechno co se ve světě CBD děje ve vašem mailu.</h2>
                <a className="main-link"><span>Přihlást k novinkám</span></a>
              </div>
              <div className="background-bottom-right">
                <img src="/assets/photo6019458277106104094.jpg"/>
              </div>
            </div>
        </div>
      </section> */}

      {/* {!!secondaryArticles.length && <section className="blog-one-col-short">
        <div className="uk-container uk-contaner-xsmall">

          {secondaryArticles.map((item, index) => <Link key={index} href={`/clanek/${item?.slug}`}>
            <a className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@s" uk-grid="">
              <div>
                <div className="blog-short-img-wrap">
                  <Image image={item?.image} />
                </div>
              </div>
              <div>
                <div className="blog-short-info-wrap">
                  <label onClick={e => handleCategory(e, item.categories[0]?.slug)}>{item.categories[0]?.title}</label>
                  <h2><span>{item?.title}</span></h2>
                </div>
              </div>
            </a>
          </Link>)}

        </div>
      </section>} */}

      {/* {!!lastArticles.length && <section className="blog-short">
        <div className="uk-container">
          <div className="uk-grid uk-grid-stack uk-child-width-1-2 uk-child-width-1-3@s" uk-grid="">

            {lastArticles.map((item, index) => <div key={index}>
              <Link href={`/clanek/${item?.slug}`}>
                <a className="blog-short-item">
                  <div className="blog-short-img-wrap">
                    <Image image={item?.image} />
                  </div>
                  <div className="blog-short-info-wrap">
                    <label onClick={e => handleCategory(e, item.categories[0]?.slug)}>{item.categories[0]?.title}</label>
                    <h3><span>{item?.title}</span></h3>
                  </div>
                </a>
              </Link>
            </div>)}


          </div>
          
        </div>
      </section>} */}

    </Page>
  )
}

export default Home
