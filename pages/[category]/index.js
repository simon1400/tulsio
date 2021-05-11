import Page from '../../layout/Page'
import Link from 'next/link'

const Category = () => {
  return (
    <Page>
      <section className="category-top">
        <div className="uk-container">
          <h1>Recenze</h1>
          <div className="sub-menu">
            <ul>
              <li><a href="/">cbd kapky</a></li>
              <li><a href="/">cbd kapky</a></li>
              <li><a href="/">cbd kapky</a></li>
              <li className="sub-more"><a href="/"><img className="uk-svg" src="/assets/ellipsis.svg" uk-svg="" /></a></li>
            </ul>
          </div>
        </div>
      </section>


      <section className="blog-one-col-short">
        <div className="uk-container uk-contaner-xsmall">
          <div className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-2" uk-grid="">
            <div>
              <div className="blog-short-img-wrap">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
            </div>
            <div>
              <div className="blog-short-info-wrap">
                <label>Recenze</label>
                <h2>Superskunk also hear from designers all the time.</h2>
              </div>
            </div>
          </div>
          <div className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-2" uk-grid="">
            <div>
              <div className="blog-short-img-wrap">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
            </div>
            <div>
              <div className="blog-short-info-wrap">
                <label>Recenze</label>
                <h2>Superskunk also hear from designers all the time.</h2>
              </div>
            </div>
          </div>
          <div className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-2" uk-grid="">
            <div>
              <div className="blog-short-img-wrap">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
            </div>
            <div>
              <div className="blog-short-info-wrap">
                <label>Recenze</label>
                <h2>Superskunk also hear from designers all the time.</h2>
              </div>
            </div>
          </div>
          <div className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-2" uk-grid="">
            <div>
              <div className="blog-short-img-wrap">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
            </div>
            <div>
              <div className="blog-short-info-wrap">
                <label>Recenze</label>
                <h2>Superskunk also hear from designers all the time.</h2>
              </div>
            </div>
          </div>
          <div className="uk-grid uk-grid-stack uk-grid-collapse uk-child-width-1-2" uk-grid="">
            <div>
              <div className="blog-short-img-wrap">
                <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
              </div>
            </div>
            <div>
              <div className="blog-short-info-wrap">
                <label>Recenze</label>
                <h2>Superskunk also hear from designers all the time.</h2>
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
          <Link href="/"><a className="button">starší články</a></Link>
        </div>
      </section>

    </Page>
  )
}

export default Category
