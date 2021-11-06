import Page from '../../layout/Page'
import Link from 'next/link'
import Image from '../../components/image'
import AxiosAPI from '../../restClient'
import formatDatePublic from '../../helpers/formatDate'
import ShareButtons from '../../components/ShareButtons'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import getArticleQuery from '../../queris/get-article';
import Rating from '../../components/Rating';

const DOMAIN = process.env.APP_DOMAIN;

const Article = () => {
  const router = useRouter();
  
  const { loading, error, data} = useQuery(getArticleQuery, { 
    variables: { slug: router.query.article } 
  });
 
  if(loading) {
    return ''
  }
  let parsedData = data.claneks[0];

  return (
    <Page>
      <Head>
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${router.asPath}`} />
        {/*<link rel="alternate" hreflang="en-gb" href="http://en-gb.example.com/page.html" />*/}
      </Head>

      {parsedData.image && <div className="uk-container uk-container-large">
        <div className="full-img">
          <Image image={parsedData.image} />
        </div>
      </div>}

      <section className="content">
        <div className="uk-container uk-container-xsmall">

          <ShareButtons data={parsedData} />

          {!!parsedData.title.length && <h1>{parsedData.title}</h1>}
          {!!parsedData.perex.length && <div className="text-content big-text uk-margin-medium-bottom" dangerouslySetInnerHTML={{__html: parsedData.perex}}></div>}

          {!!parsedData.capitoly.length && parsedData.capitoly.map((item, index) => <div key={index}>
            {!!item.title && <h2>{item.title}</h2>}
            <div className="text-content" dangerouslySetInnerHTML={{__html: item.text}}></div>
            {!!item.galery?.length && item.galery.map((img, indexImg) => <figure key={indexImg}>
              <div><Image image={img} alt={img.alternativeText || ''}/></div>
              {!!img.caption.length && <figcaption>{img.caption}</figcaption>}
            </figure>)}
            {!!item.button && <div className="uk-text-center uk-margin-bottom">
              <a href={item.button?.link} className="button">{item.button?.text}</a>
            </div>}
          </div>)}

          {/* <Rating rating={2.5}/> */}

          {/* <div className="author-block">
            <div className="author">
              <div className="img-author">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
              <div className="name-author">
                <h5>{parsedData.author?.name}</h5>
                <span>{parsedData.author?.description}</span>
              </div>
            </div>
            <div className="post-date">
              <span>Publikováno {formatDatePublic(parsedData.published_at)}</span>
            </div>
          </div> */}

          {/* {parsedData.labels?.length && <div className="labels">
            <ul>
              {parsedData.labels.map((item, index) => <li key={index}><Link href={`/stitky/${item.slug}`}><a>{item.title}</a></Link></li>)}
            </ul>
          </div>} */}
        </div>
      </section>

      
      {/* <section className="comments">
        <div className="uk-container uk-container-xsmall">
          <div className="coment-control">
            <div>
              <h3>Komentáře</h3>
            </div>
            <div>
              <a href="/" className="button">přidat komentář</a>
            </div>
          </div>
          <div className="comments-wrap">
            <div className="comments-item">
              <div className="comment-img">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
              <div className="comment-content">
                <h4>Vítek N.</h4>
                <p>One of the most painful steps in the product workflow is the designer and developer handoff. Today’s design files and tools aren’t developer friendly. Transitioning files, context.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/*<section className="blog-short">
        <div className="uk-container">
          <div className="uk-grid uk-grid-stack uk-child-width-1-3" uk-grid="">
            <div>
              <div className="blog-short-item">
                <div className="blog-short-img-wrap">
                  <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
                </div>
                <div className="blog-short-info-wrap">
                  <label>Recenze</label>
                  <h3>Superskunk also hear from designers all the time.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

    </Page>
  )
}

export default Article
