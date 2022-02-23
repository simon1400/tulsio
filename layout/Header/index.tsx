import Link from 'next/link'
import TopNav from '../../components/TopNav'
import {InstantSearch} from "react-instantsearch-dom";
import { searchClient } from "../../lib/typesenseAdapter"
import Menu from '../Menu'

const Header = () => {
  return (
    <header>
      <div className="uk-container uk-container-large">
        <div className="header-wrap">
          <div className="logo">
            <Link href="/">
              <a><img className="uk-svg" src="/assets/logo-tulsio.svg" uk-svg="" alt="Tulsio" /></a>
            </Link>
          </div>
          <InstantSearch indexName="navigation" searchClient={searchClient}>
            <TopNav />
            <Menu />
          </InstantSearch>
          <div className="control">
            {/* <div className="lang uk-visible@m">
              <span>Čeština</span>
              <img className="uk-svg" src="/assets/down.svg" uk-svg="" />
            </div> */}
            <a href="#search" uk-toggle="" aria-expanded="false" className="search">
              <img className="uk-svg" src="/assets/search.svg" uk-svg="" />
            </a>
            <div className="uk-hidden@m">
              <button uk-toggle="target: #responsive-nav" className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
