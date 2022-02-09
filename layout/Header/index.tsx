// import {useEffect, useState} from 'react'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useLazyQuery } from '@apollo/client'
import navHeader from '../../queries/navHeader'
import TopNav from '../../components/TopNav'
import {InstantSearch} from "react-instantsearch-dom";
import { searchClient } from "../../lib/typesenseAdapter"

const Header = () => {

  const [menu, setMenu] = useState(false)

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
            <TopNav mobile menu={menu} />
          </InstantSearch>
          <div className="control">
            {/* <div className="lang uk-visible@m">
              <span>Čeština</span>
              <img className="uk-svg" src="/assets/down.svg" uk-svg="" />
            </div> */}
            <a href="#search" uk-toggle="" className="search uk-visible@m">
              <img className="uk-svg" src="/assets/search.svg" uk-svg="" />
            </a>
            <div className="uk-hidden@m">
              <button className={`hamburger hamburger--collapse ${menu ? "is-active" : ''}`} type="button" onClick={() => setMenu(!menu)}>
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
