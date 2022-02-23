import Page from '../../layout/Page'
import Image from '../../components/Image'
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
// import Author from '../../components/Author'
// import Comments from '../../components/Comments'

const DOMAIN = process.env.APP_DOMAIN;

const Article: NextPage = () => {

  const router = useRouter();

  const { dispatch } = useContext(DataStateContext)
  
  const { loading, error, data} = useQuery(getArticle, { 
    variables: { slug: router.query.article } 
  });

  let article = undefined;
 
  if(!loading && data) {
    console.log(error);
    if(!data.articles.data.length){
      router.push('/404')
    }else{
      article = data.articles.data?.[0].attributes
    }
  }

  useEffect(() => {
    if(article){
      dispatch({ state: [
        {
          title: 'Blog',
          link: 'blog'
        },
        {
          title: article.categories.data[0].attributes.title,
          link: article.categories.data[0].attributes.slug
        },
        {
          title: article?.title
        }
      ], type: 'breadcrumbs' })
    }
  }, [article])

  return (
    <Page 
      title={article?.meta?.title || article?.title}
      description={article?.meta?.description}
      image={getStrapiURL(article?.meta?.image?.data?.attributes?.url) || getStrapiURL(article?.image?.data)}
    >
      <Head>
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>

      <div className="breadcrumb-wrap">
        <div className="uk-container uk-container-large">
          <Breadcrumb article />
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
                  {!!article?.labels?.data?.length && article.labels.data.map((item, index) => <Label key={index} data={{
                    title: item.attributes.title,
                    slug: item.attributes.slug,
                    color: item.attributes.color
                  }} />)}
                  {!!article.perex.length && <div className="text-content text-big" dangerouslySetInnerHTML={{__html: article.perex}}></div>}
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
            {/* <Author name="name" description="description" publishDate="publishDate" /> */}

          </div>
        </section>

        
        {/* <Comments /> */}

      </article>}

    </Page>
  )
}

export default Article
