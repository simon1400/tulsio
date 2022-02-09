import Page from '../../layout/Page'
// import Link from 'next/link'
import Image from '../../components/Image'
// import AxiosAPI from '../../restClient'
// import formatDatePublic from '../../helpers/formatDate'
import ShareButtons from '../../components/ShareButtons'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import getArticle from '../../queries/article';
import { getStrapiURL } from '../../lib/api'
import Button from '../../components/Button'
import Breadcrumb from '../../components/Breadcrumb'
import { NextPage } from 'next'
import Label from '../../components/Label'
import { useContext, useEffect } from 'react'
import { DataStateContext } from '../../context/dataStateContext'
// import Rating from '../../components/Rating';

const DOMAIN = process.env.APP_DOMAIN;

const Article: NextPage = () => {

  const router = useRouter();

  const { dispatch } = useContext(DataStateContext)
  
  const { loading, error, data} = useQuery(getArticle, { 
    variables: { slug: router.query.article } 
  });

  let article = undefined;
 
  if(!loading && data) {
    article = data.articles.data[0].attributes
  }

  useEffect(() => {
    if(article){
      dispatch({ state: [
        {
          title: article.categories.data[0].attributes.title,
          link: article.categories.data[0].attributes.slug
        },
        {
          title: article.title
        }
      ], type: 'breadcrumbs' })
    }
  }, [article])

  return (
    <Page 
      title={article?.meta?.title || article?.title}
      description={article?.meta?.description}
      image={getStrapiURL(article?.meta?.image?.data?.attributes?.url)}
    >
      <Head>
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${router.asPath}`} />
      </Head>

      <div className="breadcrumb-wrap">
        <div className="uk-container uk-container-large">
          <Breadcrumb />
        </div>
      </div>

      {!!article && <article className="blog-article">

        <section className="article-top">
          <div className="uk-container uk-container-xlarge">
            <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@l uk-grid-collapse" uk-grid="">
              <div>
                <div className="full-img">
                  <Image image={article.image.data} />
                </div>
              </div>
              <div>
                <div className="title">
                  <div className="title-wrap">
                    <h1>{article.title}</h1>
                  </div>
                </div>
                <div className="perex-wrap">
                  <Label text="výběr redakce" />
                  {!!article.perex.length && <div className="text-content" dangerouslySetInnerHTML={{__html: article.perex}}></div>}
                </div>
              </div>
            </div>
          </div>  
        </section>

        <section className="content">
          <div className="uk-container uk-container-xsmall">

            <ShareButtons data={article} />

            {!!article.chapters?.length && article.chapters.map((item, index) => <div key={index}>
              {!!item.title && <h2>{item.title}</h2>}
              <div className="text-content" dangerouslySetInnerHTML={{__html: item.text}}></div>
              {!!item.galery?.data?.length && item.galery.data.map((img, indexImg) => <figure key={indexImg}>
                <div><Image image={img} /></div>
                {!!img.caption?.length && <figcaption>{img.caption}</figcaption>}
              </figure>)}
              {!!item.button && <div className="uk-text-center uk-margin-bottom">
                <Button link={item.button.link} text={item.button.text}/>
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
                <Button link="/" text="přidat komentář" />
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

      </article>}

    </Page>
  )
}

export default Article
