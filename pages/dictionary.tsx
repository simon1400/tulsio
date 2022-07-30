import Page from '../layout/Page'
import {useRouter} from 'next/router'
import Head from 'next/head'
import { NextPage } from 'next'
import {InstantSearch} from 'react-instantsearch-dom'
import { searchClient } from "../lib/typesenseAdapter";
import { useContext, useEffect } from 'react'
import { DataStateContext } from '../context/dataStateContext'
import DictionaryHits from '../components/DictionaryHits'
import DictionaryHead from '../components/DictionaryHead'
import { client, getStrapiURL } from '../lib/api'
import getDictionary from '../queries/dictionary'

const DOMAIN = process.env.APP_DOMAIN;

export async function getServerSideProps() {
  
  const { data } = await client.query({query: getDictionary});

  return {
    props: {
      dictionary: data.dictionaryPage.data.attributes
    }
  }
}

const Dictionary: NextPage = ({
  // @ts-ignore
  dictionary
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
      indexName="dictionaries" 
      searchClient={searchClient}
    >
      <Page
        title={dictionary?.meta?.title || dictionary.title}
        description={dictionary?.meta?.description || ''}
        image={dictionary?.meta?.image ? getStrapiURL(dictionary.meta.image) : null}
      >
        <Head>
          <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>
        
        <DictionaryHead title={dictionary.title} />
        <DictionaryHits />
        
      </Page>
    </InstantSearch>
  )
}

export default Dictionary
