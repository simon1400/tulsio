import {useState} from 'react'
import Page from '../../layout/Page'
import Link from 'next/link'
import AxiosAPI from '../../restClient'
import Image from '../../components/image'
import {useRouter} from 'next/router'

export async function getServerSideProps({params}) {

  let category;
  if(params.typ === 'stitky'){
    category = await AxiosAPI.get('/stitky-2-s?slug='+params.category);
  }else if(params.typ === 'kategorie'){
    category = await AxiosAPI.get('/kategories?slug='+params.category);
  }

  category = category.data[0]

  let categoryArticle
  for(var i = 0; i < category.articles.length; i++){
    categoryArticle = await AxiosAPI.get('/kategories/'+category.articles[i].categories[0])
    category.articles[i].category = categoryArticle.data
  }

  return {
    props: {
      category: category,
      firstArticles: category.articles.slice(0, 4),
      lastArticles: category.articles.slice(4)
    }
  }
}

const Category = ({category, firstArticles, lastArticles}) => {

  const [firstArticlesState, setFirstArticlesState] = useState(firstArticles)
  const [lastArticlesState, setLastArticlesState] = useState(lastArticles)

  const router = useRouter()

  const handleCategory = (e, link) => {
    e.preventDefault()
    e.stopPropagation()

    router.push(`/kategorie/${link}`)
  }

  console.log(router);

  const handleFilterLabel = async (e, id) => {
    e.preventDefault()
    const filteredArticles = category.articles.filter(item => item.labels.indexOf(id) >= 0)
    setFirstArticlesState(filteredArticles.slice(0, 4))
    setLastArticlesState(filteredArticles.slice(4))
    // console.log(filteredArticles);
  }

  return (
    <Page>
      <section className="category-top">
        <div className="uk-container">
          <h1>{category.title}</h1>
          {!!category?.labels?.length && <div className="sub-menu">
            <ul>
              {category.labels.map((item, index) => <li key={index}><a href="/" onClick={e => handleFilterLabel(e, item.id)}>{item.title}</a></li>)}
              {/*<li className="sub-more"><a href="/"><img className="uk-svg" src="/assets/ellipsis.svg" uk-svg="" /></a></li>*/}
            </ul>
          </div>}
        </div>
      </section>


      <section className="blog-one-col-short">
        <div className="uk-container uk-contaner-xsmall">
          {!!firstArticlesState.length && firstArticlesState.map((item, index) => <Link key={index} href={`/clanek/${item.slug}`}>
            <a key={index} className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-2" uk-grid="">
              <div>
                <div className="blog-short-img-wrap">
                  <Image image={item.image} />
                </div>
              </div>
              <div>
                <div className="blog-short-info-wrap">
                  <label onClick={e => handleCategory(e, (router.query.typ === 'kategorie' ? category.slug : item.category.slug))}>
                    {router.query.typ === 'kategorie' ? category.title : item.category.title}
                  </label>
                  <h2><span>{item.title}</span></h2>
                </div>
              </div>
            </a>
          </Link>)}
        </div>
      </section>

      {!!lastArticlesState.length && <section className="blog-short">
        <div className="uk-container">
          <div className="uk-grid uk-grid-stack uk-child-width-1-3" uk-grid="">
            {lastArticlesState.map((item, index) => <Link key={index} href={`/clanek/${item.slug}`}>
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
          {/*<Link href="/"><a className="button">starší články</a></Link>*/}
        </div>
      </section>}

    </Page>
  )
}

export default Category
