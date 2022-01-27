// import {useEffect, useState} from 'react'
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'
import { useQuery } from '@apollo/client'
import navHeader from '../../queries/navHeader'

const Header = () => {

  const router = useRouter()

  const [menu, setMenu] = useState(false)

  const { loading, data } = useQuery(navHeader);

  if(loading) {
    return ''
  }

  const navItems = data.navigation.data.attributes.topNav.item;

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
              {navItems.map((item, index) => <li key={index}>
                <a className={item.link === router.asPath ? 'active' : ''} href={item.link}>
                  {item.name}
                </a>
              </li>)}
            </ul>
          </nav>
          <nav className={`menu menu-responsive uk-hidden@m ${menu ? "active" : ''}`}>
            <ul>
              {navItems.map((item, index) => <li key={index}><a className={item.link === router.asPath ? 'active' : ''} href={item.link}>{item.name}</a></li>)}
            </ul>
          </nav>
          <div className="control">
            {/* <div className="lang uk-visible@m">
              <span>Čeština</span>
              <img className="uk-svg" src="/assets/down.svg" uk-svg="" />
            </div> */}
            {/* <div className="search">
              <img className="uk-svg" src="/assets/search.svg" uk-svg="" />
            </div> */}
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
