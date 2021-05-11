import Page from '../layout/Page'
import Link from 'next/link'
import Image from '../components/image'
import ReactMarkdown from "react-markdown";

import axios from 'axios'

const Home = ({ data, categories, related, error }) => {

  if(error){
    return error
  }

  return (
    <Page>
      <section className="top">
        <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-grid-stack" uk-grid="">
          <div>
            <div className="img">
              <Image image={data.image} />
            </div>
          </div>
          <div>
            <div className="info">
              <div className="info-top big-text">
                {/*<label>Recenze</label>*/}
                <h1>{data.title}</h1>
                <ReactMarkdown>
                  {data.content}
                </ReactMarkdown>
                <Link href={data.tkacitkoMore.link}>
                  <a className="button circle">
                    <img className="uk-svg" src="/assets/right.svg" uk-svg="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-one-col-short">
        <div className="uk-container uk-contaner-xsmall">

          {categories[0].posts.map((item, index) => <Link key={index} href={`/${categories[0].slug}/${item.slug}`}>
            <a className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-2" uk-grid="">
              <div>
                <div className="blog-short-img-wrap">
                  <Image image={item.Obrazek} />
                </div>
              </div>
              <div>
                <div className="blog-short-info-wrap">
                  <label>{categories[0].title}</label>
                  <h2>{item.title}</h2>
                </div>
              </div>
            </a>
          </Link>)}

        </div>
      </section>

      <section className="blog-short">
        <div className="uk-container">
          <div className="uk-grid uk-grid-stack uk-child-width-1-3" uk-grid="">

            {related[0].posts.map((item, index) => <div key={index}>
              <Link href={`/${related[0].slug}/${item.slug}`}>
                <a className="blog-short-item">
                  <div className="blog-short-img-wrap">
                    <Image image={item.Obrazek} />
                  </div>
                  <div className="blog-short-info-wrap">
                    <label>{related[0].title}</label>
                    <h3>{item.title}</h3>
                  </div>
                </a>
              </Link>
            </div>)}


          </div>
          <Link href="/"><a className="button">starší články</a></Link>
        </div>
      </section>

    </Page>
  )
}


Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/homepage');
    const data = res.data;
    const categories = []
    if(data.categories){
      for(var i = 0; i < data.categories.length; i++){
        let categoriesRes = await axios.get('http://localhost:1337/categories/'+data.categories[i].id)
        categories.push(categoriesRes.data)
      }
    }
    const related = []
    if(data.related){
      for(var i = 0; i < data.related.length; i++){
        let relatedRes = await axios.get('http://localhost:1337/categories/'+data.related[i].id)
        related.push(relatedRes.data)
      }
    }
    return { data, categories, related };
  } catch (error) {
    return { error };
  }
};

export default Home
