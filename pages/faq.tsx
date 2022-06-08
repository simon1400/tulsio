import Page from '../layout/Page'
import {useRouter} from 'next/router'
import Head from 'next/head'
import PageHead from '../components/PageHead'
import { NextPage } from 'next'
import {InstantSearch} from 'react-instantsearch-dom'
import { searchClient } from "../lib/typesenseAdapter";
import { useContext, useEffect } from 'react'
import { DataStateContext } from '../context/dataStateContext'
import FaqHits from '../components/FaqHits'
import PageHeadBig from '../components/PageHeadBig'

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
      indexName="faq" 
      searchClient={searchClient}
    >
      <Page>
        <Head>
          <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>
        
        <PageHeadBig title="FAQ" />
        <FaqHits />
        
      </Page>
    </InstantSearch>
  )
}

export default Category
