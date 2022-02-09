import { useContext, useEffect, useState } from 'react'
import Page from '../../layout/Page'
import {useRouter} from 'next/router'
import Head from 'next/head'
import { useQuery } from '@apollo/client'
import getCategory from '../../queries/categories'
import { getStrapiURL } from '../../lib/api'
import ArticleShort from '../../components/ArticleShort'
import PageHead from '../../components/PageHead'
import { DataStateContext } from '../../context/dataStateContext'

const DOMAIN = process.env.APP_API;

const Category = () => {

  const router = useRouter()
  const { dispatch } = useContext(DataStateContext)

  const {loading, data} = useQuery(getCategory, {
    variables: {
      slug: router.query.category
    }
  })

  let category, mainArticle, articles

  if(!loading){
    category = data.categories?.data?.[0]?.attributes
    articles = category?.articles?.data.map(item => item.attributes)

    mainArticle = articles?.[0]
    articles = articles.splice(1)
  }

  useEffect(() => {
    if(mainArticle){
      dispatch({ state: [
        {
          title: 'Blog',
          link: 'blog'
        },
        {
          title: category.title
        }
      ], type: 'breadcrumbs' })
    }
  }, [mainArticle])

  return (
    <Page
      title={category?.meta?.title || category?.title}
      description={category?.meta?.description}
      image={getStrapiURL(category?.meta?.image?.data?.attributes?.url)}
    >
      <Head>
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${router.asPath}`} />
      </Head>

      <PageHead title="Blog" />

      <section>
        <div className="uk-container uk-container-small">
          {!loading && <ArticleShort 
            title={mainArticle.title}
            link={`/${mainArticle?.article?.data?.attributes?.categories?.data?.[0]?.attributes?.slug}/${mainArticle?.article?.data?.attributes?.slug}`}
            image={mainArticle.image.data}
            label={mainArticle?.categories?.data?.[0]?.attributes?.title}
            text={mainArticle.perex}
          />}
        </div>
        <div className="uk-container">
          <div className="cat-grid">
            {!loading && !!articles.length && articles.map((item, index) => <ArticleShort 
              key={index}
              title={item.title}
              link={`/${item?.categories?.data?.[0]?.attributes.slug}/${item.slug}`}
              image={item.image.data}
              label={item?.categories?.data?.[0]?.attributes.title}
            />)}
          </div>
        </div>
      </section>

    </Page>
  )
}

export default Category
