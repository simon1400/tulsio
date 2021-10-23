// import {useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useQuery } from '@apollo/client'
import navigationQuery from '../../queris/navigation'

const Header = () => {

  const router = useRouter()

  const { loading, error, data } = useQuery(navigationQuery);
  if(loading) {
    return ''
  }

  const menuItems = data.navigaceNovum.top_nav.navigation_item ?? [];

  return (
    <header>
      <div className="uk-container uk-container-large">
        <div className="header-wrap">
          <div className="logo">
            <Link href="/">
              <a><img className="uk-svg" src="/assets/logo-tulsio.svg" uk-svg="" alt="Tulsio" /></a>
            </Link>
          </div>
          <nav className="menu uk-visible@m">
            <ul>
              {!!menuItems.length && menuItems.map((item, index) => <li key={index}><a className={item.link === router.asPath ? 'active' : ''} href={item.link}>{item.name}</a></li>)}
            </ul>
          </nav>
          <div className="control">
            <div className="lang uk-visible@m">
              <span>Čeština</span>
              <img className="uk-svg" src="/assets/down.svg" uk-svg="" />
            </div>
            <div className="search">
              <img className="uk-svg" src="/assets/search.svg" uk-svg="" />
            </div>
            <div className="uk-hidden@m">
              <button className="hamburger hamburger--collapse" type="button">
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
