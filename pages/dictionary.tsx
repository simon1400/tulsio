import Page from '../layout/Page'
import {useRouter} from 'next/router'
import Head from 'next/head'
import PageHead from '../components/PageHead'
import { NextPage } from 'next'
import {InstantSearch} from 'react-instantsearch-dom'
import { searchClient } from "../lib/typesenseAdapter";
import InfiniteArticles from '../components/InfiniteArticles'
import { useContext, useEffect } from 'react'
import { DataStateContext } from '../context/dataStateContext'
import DictionaryHits from '../components/DictionaryHits'
import DictionaryHead from '../components/DictionaryHead'

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
      indexName="dictionaries" 
      searchClient={searchClient}
    >
      <Page>
        <Head>
          <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>
        
        <DictionaryHead title="Nejkomplexnější CBD slovník" />
        <DictionaryHits />
        
      </Page>
    </InstantSearch>
  )
}

export default Category
