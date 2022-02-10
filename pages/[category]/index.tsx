import { useContext, useEffect, useState } from 'react'
import Page from '../../layout/Page'
import {useRouter} from 'next/router'
import Head from 'next/head'
import { useQuery } from '@apollo/client'
import getCategory from '../../queries/categories'
import { getStrapiURL } from '../../lib/api'
import ArticleShort from '../../components/ArticleShort'
import PageHead from '../../components/PageHead'

import { NextPage } from 'next'
import {InstantSearch} from 'react-instantsearch-dom'
import { searchClient } from "../../lib/typesenseAdapter";
import InfiniteArticles from '../../components/InfiniteArticles'

const DOMAIN = process.env.APP_API;

const Category: NextPage = () => {

  const router = useRouter()

  return (
    <InstantSearch 
      indexName="articles" 
      searchClient={searchClient}
    >
      <Page
        title='Blog'
        // description={category?.meta?.description}
        // image={getStrapiURL(category?.meta?.image?.data?.attributes?.url)}
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
