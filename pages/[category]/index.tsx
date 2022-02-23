import Page from '../../layout/Page'
import {useRouter} from 'next/router'
import Head from 'next/head'
import PageHead from '../../components/PageHead'
import { NextPage } from 'next'
import {InstantSearch} from 'react-instantsearch-dom'
import { searchClient } from "../../lib/typesenseAdapter";
import InfiniteArticles from '../../components/InfiniteArticles'
import { useContext, useEffect, useState } from 'react'
import { DataStateContext } from '../../context/dataStateContext'
import axios from 'axios'
import qs from 'qs'
import Error from 'next/error'

const APP_API = process.env.APP_API;
const DOMAIN = process.env.APP_DOMAIN;

const controlQs = (router) => qs.stringify({
  filters: {
    slug: {
      $eq: router.query.category,
    }
  }
})

export async function getServerSideProps(context) {

  const res = await axios.get(`${APP_API}/api/categories?${controlQs(context)}`)

  if(!res.data.data.length) {
    return {
      notFound: true
    }
  }

  return {
    props: {}
  }
}


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
        
        <PageHead title="Blog" />
        <InfiniteArticles />
        
      </Page>
    </InstantSearch>
  )
}

export default Category
