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

const APP_API = process.env.APP_API;
const DOMAIN = process.env.APP_DOMAIN;

const controlQs = (router) => qs.stringify({
  filters: {
    slug: {
      $eq: router.query.category,
    }
  }
})

const Category: NextPage = () => {

  const router = useRouter()
  const { dispatch } = useContext(DataStateContext)
  
  useEffect(() => {
    if(router.query.category){
      axios.get(`${APP_API}/api/categories?${controlQs(router)}`).then(res => {
        if(!res.data.data.length) {
          router.push('404')
        }
      })
    }
  }, [router.query.category])

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
          <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${router.asPath}`} />
        </Head>
        
        <PageHead title="Blog" />
        <InfiniteArticles />
        
      </Page>
    </InstantSearch>
  )
}

export default Category
