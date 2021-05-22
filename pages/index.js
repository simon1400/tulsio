import Page from '../layout/Page'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from '../components/image'

import AxiosAPI from '../restClient'

export async function getServerSideProps() {

  const res = await AxiosAPI.get('/claneks');
  const data = res.data;

  return {
    props: {
      topArticle: data[0],
      seccondArticles: data.slice(1, 3),
      lastArticles: data.slice(3, 5)
    }
  }
}

const Home = ({ topArticle, seccondArticles, lastArticles }) => {

  const router = useRouter()

  const handleCategory = (e, link) => {
    e.preventDefault()
    e.stopPropagation()

    router.push(`/kategorie/${link}`)
  }

  return (
    <Page>
      <section className="top">
        <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-grid-stack" uk-grid="">
          <div>
            <Link href={`/clanek/${topArticle?.slug}`}>
              <a>
                <div className="img">
                  <Image image={topArticle?.image} />
                </div>
              </a>
            </Link>
          </div>
          <div>
            <div className="info">
              <div className="info-top big-text">
                <label onClick={e => handleCategory(e, topArticle.categories[0]?.slug)}>{topArticle.categories[0]?.title}</label>
                <Link href={`/clanek/${topArticle?.slug}`}>
                  <a>
                    <h1><span>{topArticle?.title}</span></h1>
                  </a>
                </Link>
                <div  dangerouslySetInnerHTML={{__html: topArticle?.perex}}></div>
                <Link href={`/clanek/${topArticle?.slug}`}>
                  <a className="button circle">
                    <img className="uk-svg" src="/assets/right.svg" uk-svg="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!!seccondArticles.length && <section className="blog-one-col-short">
        <div className="uk-container uk-contaner-xsmall">

          {seccondArticles.map((item, index) => <Link key={index} href={`/clanek/${item?.slug}`}>
            <a className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-2" uk-grid="">
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
      </section>}

      {!!lastArticles.length && <section className="blog-short">
        <div className="uk-container">
          <div className="uk-grid uk-grid-stack uk-child-width-1-3" uk-grid="">

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
          {/*<Link href="/"><a className="button">starší články</a></Link>*/}
        </div>
      </section>}

    </Page>
  )
}

export default Home
