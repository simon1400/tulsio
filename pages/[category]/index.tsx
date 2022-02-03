import {useState} from 'react'
import Page from '../../layout/Page'
import Link from 'next/link'
import Image from '../../components/image'
import {useRouter} from 'next/router'
import Head from 'next/head'
import { useQuery } from '@apollo/client'
import getCategory from '../../queries/categories'
import { getStrapiURL } from '../../lib/api'

const DOMAIN = process.env.APP_API;

// export async function getServerSideProps({params}) {

//   let category;
//   if(params.typ === 'stitky'){
//     category = await AxiosAPI.get('/stitky-2-s?slug='+params.category);
//   }else if(params.typ === 'kategorie'){
//     category = await AxiosAPI.get('/kategories?slug='+params.category);
//   }

//   category = category.data[0]

//   let categoryArticle
//   for(var i = 0; i < category.articles.length; i++){
//     categoryArticle = await AxiosAPI.get('/kategories/'+category.articles[i].categories[0])
//     category.articles[i].category = categoryArticle.data
//   }

//   return {
//     props: {
//       category: category,
//       firstArticles: category.articles.slice(0, 4),
//       lastArticles: category.articles.slice(4)
//     }
//   }
// }

const Category = () => {

  // const [firstArticlesState, setFirstArticlesState] = useState(firstArticles)
  // const [lastArticlesState, setLastArticlesState] = useState(lastArticles)

  const router = useRouter()

  // const handleCategory = (e, link) => {
  //   e.preventDefault()
  //   e.stopPropagation()

  //   router.push(link)
  // }

  // const handleFilterLabel = async (e, id) => {
  //   e.preventDefault()
  //   const filteredArticles = category.articles.filter(item => item.labels.indexOf(id) >= 0)
  //   setFirstArticlesState(filteredArticles.slice(0, 4))
  //   setLastArticlesState(filteredArticles.slice(4))
  // }

  const {loading, data} = useQuery(getCategory, {
    variables: {
      slug: router.query.category
    }
  })
  
  if(loading) {
    return ''
  }

  const category = data.categories.data[0].attributes

  let articles = category.articles.data.map(item => item.attributes)

  return (
    <Page
      title={category.meta?.title || category.title}
      description={category.meta?.description}
      image={getStrapiURL(category.meta?.image?.data?.attributes?.url)}
    >
      <Head>
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${router.asPath}`} />
        {/*<link rel="alternate" hreflang="en-gb" href="http://en-gb.example.com/page.html" />*/}
      </Head>
      <section className="category-top">
        <div className="uk-container">
          <h1>{category.title}</h1>
          {!!category.labels?.length && <div className="sub-menu">
            <ul>
              {category.labels.map((item, index) => <li key={index}><a href="/" onClick={e => handleFilterLabel(e, item.id)}>{item.title}</a></li>)}
              {/*<li className="sub-more"><a href="/"><img className="uk-svg" src="/assets/ellipsis.svg" uk-svg="" /></a></li>*/}
            </ul>
          </div>}
        </div>
      </section>

      <section className="blog-one-col-short">
        <div className="uk-container uk-container-xsmall">
          {!!articles.length && articles.map((item, index) => <Link key={index} href={`/${item.categories.data[0].attributes.slug}/${item.slug}`}>
            <a>
              {item?.image && <div className="blog-short-img-wrap">
                <Image image={item.image.data} />
              </div>}
              <div className="blog-short-info-wrap">
                {/* <label onClick={e => handleCategory(e, item.categories[0]?.slug)}>{item.categories[0]?.title}</label> */}
                {/* <label>{item.article.data.attributes.categories.data[0].attributes.title}</label> */}
                <h3><span>{item?.title}</span></h3>
                <div dangerouslySetInnerHTML={{__html: item?.perex}}></div>
              </div>
            </a>
          </Link>)}
        </div>
      </section>

      {/* {!!lastArticles.length && <section className="blog-short">
        <div className="uk-container">
          <div className="uk-grid uk-grid-stack uk-child-width-1-3" uk-grid="">
            {lastArticles.map((item, index) => <Link key={index} href={`/clanek/${item.slug}`}>
              <a key={index}>
                <div className="blog-short-item">
                  <div className="blog-short-img-wrap">
                    <Image image={item.image} />
                  </div>
                  <div className="blog-short-info-wrap">
                    <label onClick={e => handleCategory(e, (router.query.typ === 'kategorie' ? category.slug : item.category.slug))}>
                      {router.query.typ === 'kategorie' ? category.title : item.category.title}
                    </label>
                    <h3><span>{item.title}</span></h3>
                  </div>
                </div>
              </a>
            </Link>)}
          </div>
          <Link href="/"><a className="button">starší články</a></Link>
        </div>
      </section>} */}

    </Page>
  )
}

export default Category
