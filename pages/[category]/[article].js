import Page from '../../layout/Page'
import Link from 'next/link'
import Image from '../../components/image'
import ReactMarkdown from "react-markdown";
import axios from 'axios'

export async function getServerSideProps({params}) {

  const res = await axios.get('http://localhost:1337/posts?slug='+params.article);

  return {
    props: {
      data: res.data[0]
    }
  }
}

const Article = ({data}) => {
  console.log(data);
  return (
    <Page>
      <section className="full-img">
        <Image image={data.Obrazek} />
      </section>

      <section className="content">
        <div className="uk-container uk-container-xsmall">
          <h1>{data.title}</h1>
          <div className="big-text">
            <ReactMarkdown>{data.Popis}</ReactMarkdown>
          </div>
          <div className="uk-text-center uk-margin-bottom">
            <a href="/" className="button">Do obchodu SuperShop</a>
          </div>
          <ReactMarkdown>{data.content}</ReactMarkdown>

          <div className="verdict">
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
          </div>

          <div className="labels">
            <ul>
              <li><a href="">cbd kapky</a></li>
              <li><a href="">cbd kapky</a></li>
            </ul>
          </div>

          <div className="author-block">
            <div className="author">
              <div className="img-author">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
              <div className="name-author">
                <h5>Vítek Nikolič</h5>
                <span>PROFI RECENZENT TULSIO</span>
              </div>
            </div>
            <div className="post-date">
              <span>Publikováno 12.2. 2020</span>
            </div>
          </div>
        </div>
      </section>
      <section className="gray-sec comments">
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
            <div className="comments-item">
              <div className="comment-img">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
              <div className="comment-content">
                <h4>Vítek N.</h4>
                <p>One of the most painful steps in the product workflow is the designer and developer handoff. Today’s design files and tools aren’t developer friendly. Transitioning files, context.</p>
              </div>
            </div>
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
      </section>

      <section className="blog-short">
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
      </section>

    </Page>
  )
}

export default Article
