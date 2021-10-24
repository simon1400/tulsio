// import {useState, useEffect} from 'react'
// import { useRouter } from 'next/router'
import Link from 'next/link'
import globalQuery from '../../queris/global'
import navigationQuery from '../../queris/navigation'
import { useQuery } from '@apollo/client'
import Image from '../../components/image'

const Footer = () => {

  const {loading, data} = useQuery(globalQuery)

  const { loading: navLoad, data: nav } = useQuery(navigationQuery);

  if(loading || navLoad) {
    return ''
  }

  return (
    <footer>
      <div className="footer-top">
        <div className="uk-container uk-container-large">
          <div className="newsleter">
            <div className="title">
              <h2>{data.global.newsletter.title}</h2>
              <a href={data.global.newsletter.cta.link} className="button">{data.global.newsletter.cta.text}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="uk-container uk-container-large">
          <div className="footer-bottom-wrap">
            <div className="logo">
              <img className="uk-svg" src="/assets/logo-tulsio.svg" uk-svg="" />
            </div>
            <nav className="menu">
              <ul>
                <li className="title">{nav.navigaceNovum.footer_nav_1.title}</li>
                {nav.navigaceNovum.footer_nav_1.navigation_item.map((item, index) => <li key={index}>
                  <Link href={item.link}><a>{item.name}</a></Link>
                </li>)}
              </ul>
            </nav>
            <nav className="menu">
              <ul>
                <li className="title">{nav.navigaceNovum.footer_nav_2.title}</li>
                {nav.navigaceNovum.footer_nav_2.navigation_item.map((item, index) => <li key={index}>
                  <Link href={item.link}><a>{item.name}</a></Link>
                </li>)}
              </ul>
            </nav>
            <nav className="menu">
              <ul>
                <li className="title">{nav.navigaceNovum.footer_nav_3.title}</li>
                {nav.navigaceNovum.footer_nav_3.navigation_item.map((item, index) => <li key={index}>
                  <Link href={item.link}><a>{item.name}</a></Link>
                </li>)}
              </ul>
            </nav>
            <div className="social">
              <ul>
                {nav.navigaceNovum.soc_nav.navigation_item.map((item, index) => <li key={index}>
                  <a href={item.link}>
                    <Image image={item.icon} svg />
                  </a>
                </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
