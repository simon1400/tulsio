import Page from '../../layout/Page'
import {useRouter} from 'next/router'
import Head from 'next/head'
import PageHead from '../../components/PageHead'

import { NextPage } from 'next'
import {InstantSearch} from 'react-instantsearch-dom'
import { searchClient } from "../../lib/typesenseAdapter";
import InfiniteArticles from '../../components/InfiniteArticles'
import { useLazyQuery } from '@apollo/client'
import getCategory from '../../queries/categories'
import { useEffect, useState } from 'react'
import { getStrapiURL } from '../../lib/api'

const DOMAIN = process.env.APP_API;

const Category: NextPage = () => {

  const router = useRouter()

  const [loadCategory, {loading, data}] = useLazyQuery(getCategory)

  const [meta, setMeta] = useState({
    title: 'Blog',
    description: 'Blog',
    image: null
  })

  useEffect(() => {
    if(router.query.category) {
      loadCategory({variables: {
        slug: router.query.category
      }})
    }
  }, [router.query.category])

  useEffect(() => {
    if(data?.categories && data.categories?.data[0]?.attributes?.meta) {
      setMeta({...data.categories.data[0].attributes.meta})
    }else{
      setMeta({
        title: 'Blog',
        description: 'Blog',
        image: null
      })
    }
  }, [data])

  return (
    <InstantSearch 
      indexName="articles" 
      searchClient={searchClient}
    >
      <Page
        title={meta.title}
        description={meta.description}
        image={meta.image ? getStrapiURL(meta.image?.data?.attributes?.url) : ''}
      >
        <Head>
          <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${router.asPath}`} />
        </Head>

        <PageHead title="Blog" />
        <InfiniteArticles />

      </Page>
    </InstantSearch>
  )
}

export default Category
