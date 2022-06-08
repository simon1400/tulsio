import Page from '../../layout/Page'
import {useRouter} from 'next/router'
import Head from 'next/head'
import PageHead from '../../components/PageHead'
import { NextPage } from 'next'
import {InstantSearch, Configure} from 'react-instantsearch-dom'
import { searchClient } from "../../lib/typesenseAdapter";
import InfiniteArticles from '../../components/InfiniteArticles'
import { useContext, useEffect, useState } from 'react'
import { DataStateContext } from '../../context/dataStateContext'
// import { QueryRuleCustomData } from 'react-instantsearch-dom';

const DOMAIN = process.env.APP_DOMAIN;

const Category: NextPage = () => {

  const router = useRouter()
  const { dispatch } = useContext(DataStateContext)

  useEffect(() => {
    return () => {
      dispatch({ state: '', type: 'slug'})
    }
  }, [])

  return (
    <InstantSearch 
      indexName="articles" 
      searchClient={searchClient}
    >
      <Page>
        <Head>
          <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>
        
        <PageHead title="Blog" category />
        <InfiniteArticles />
        
      </Page>
    </InstantSearch>
  )
}

export default Category
