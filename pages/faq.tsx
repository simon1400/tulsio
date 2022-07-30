import Page from '../layout/Page'
import {useRouter} from 'next/router'
import Head from 'next/head'
import { NextPage } from 'next'
import {InstantSearch} from 'react-instantsearch-dom'
import { searchClient } from "../lib/typesenseAdapter";
import { useContext, useEffect } from 'react'
import { DataStateContext } from '../context/dataStateContext'
import FaqHits from '../components/FaqHits'
import PageHeadBig from '../components/PageHeadBig'
import { client, getStrapiURL } from '../lib/api'
import getFaq from '../queries/faq'

const DOMAIN = process.env.APP_DOMAIN;

export async function getServerSideProps() {
  
  const { data } = await client.query({query: getFaq});

  return {
    props: {
      faq: data.faq.data.attributes
    }
  }
}

const Faq: NextPage = ({
  // @ts-ignore
  faq
}) => {  

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
      <Page
        title={faq?.meta?.title || faq.title}
        description={faq?.meta?.description || ''}
        image={faq?.meta?.image ? getStrapiURL(faq.meta.image) : null}
      >
        <Head>
          <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>
        
        <PageHeadBig title={faq.title} />
        <FaqHits />
        
      </Page>
    </InstantSearch>
  )
}

export default Faq
