import Page from '../../layout/Page'
import Link from 'next/link'
import Image from '../../components/image'
import ReactMarkdown from "react-markdown";
import AxiosAPI from '../../restClient'
import formatDatePublic from '../../helpers/formatDate'

export async function getServerSideProps({params}) {

  const res = await AxiosAPI.get('/claneks?slug='+params.article);

  return {
    props: {
      data: res.data[0]
    }
  }
}

const Article = ({data}) => {

  return (
    <Page>
      {data.image && <section className="full-img">
        <Image image={data.image} />
      </section>}

      <section className="content">
        <div className="uk-container uk-container-xsmall">
          {!!data.title.length && <h1>{data.title}</h1>}
          {!!data.perex.length && <div className="big-text">
            <ReactMarkdown>{data.perex}</ReactMarkdown>
          </div>}

          {!!data.capitoly.length && data.capitoly.map((item, index) => <div key={index}>
            {!!item.title && <h2>{item.title}</h2>}
            <ReactMarkdown>{item.text}</ReactMarkdown>
            {!!item.galery?.length && item.galery.map((img, indexImg) => <figure key={indexImg}>
              <div><Image image={img} alt={img.alternativeText || ''}/></div>
              {!!img.caption.length && <figurecaption>{img.caption}</figurecaption>}
            </figure>)}
            {!!item.button && <div className="uk-text-center uk-margin-bottom">
              <a href={item.button?.link} className="button">{item.button?.text}</a>
            </div>}
          </div>)}

          {/*<div className="verdict">
            <div>
              <h2>Verdict</h2>
            </div>
            <div className="raiting-wrap">
              <span>4.2</span>
              <div className="rating">
                <ul>
                  <li><img className="uk-svg" src="/assets/star-solid.svg" uk-svg="" /></li>
                  <li><img className="uk-svg" src="/assets/star-solid.svg" uk-svg="" /></li>
                  <li><img className="uk-svg" src="/assets/star-solid.svg" uk-svg="" /></li>
                  <li><img className="uk-svg" src="/assets/star-half.svg" uk-svg="" /></li>
                  <li><img className="uk-svg" src="/assets/star.svg" uk-svg="" /></li>
                </ul>
              </div>
            </div>
          </div>*/}

          {data.labels?.length && <div className="labels">
            <ul>
              {data.labels.map((item, index) => <li key={index}><Link href={`/stitky/${item.slug}`}><a>{item.title}</a></Link></li>)}
            </ul>
          </div>}

          <div className="author-block">
            <div className="author">
              <div className="img-author">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
              <div className="name-author">
                <h5>{data.author?.name}</h5>
                <span>{data.author?.description}</span>
              </div>
            </div>
            <div className="post-date">
              <span>Publikováno {formatDatePublic(data.published_at)}</span>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="gray-sec comments">
        <div className="uk-container uk-container-xsmall">
          <div className="coment-control">
            <div>
              <h3>Komentáře</h3>
            </div>
            <div>
              <a href="/" className="button">přidat komentář</a>
            </div>
          </div>
          <div className="comments-wrap">
            <div className="comments-item">
              <div className="comment-img">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
              <div className="comment-content">
                <h4>Vítek N.</h4>
                <p>One of the most painful steps in the product workflow is the designer and developer handoff. Today’s design files and tools aren’t developer friendly. Transitioning files, context.</p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/*<section className="blog-short">
        <div className="uk-container">
          <div className="uk-grid uk-grid-stack uk-child-width-1-3" uk-grid="">
            <div>
              <div className="blog-short-item">
                <div className="blog-short-img-wrap">
                  <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
                </div>
                <div className="blog-short-info-wrap">
                  <label>Recenze</label>
                  <h3>Superskunk also hear from designers all the time.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

    </Page>
  )
}

export default Article
