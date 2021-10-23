// import {useState, useEffect} from 'react'
// import { useRouter } from 'next/router'
import Link from 'next/link'
import globalQuery from '../../queris/global'
import navigationQuery from '../../queris/navigation'
import { useQuery } from '@apollo/client'

const Footer = () => {

  const {loading, data} = useQuery(globalQuery)

  const { data: nav } = useQuery(navigationQuery);

  console.log(nav);

  if(loading) {
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
                <li><a href="/"><img className="uk-svg" src="/assets/instagram.svg" uk-svg="" /></a></li>
                <li><a href="/"><img className="uk-svg" src="/assets/facebook.svg" uk-svg="" /></a></li>
                <li><a href="/"><img className="uk-svg" src="/assets/youtube.svg" uk-svg="" /></a></li>
                <li><a href="/"><img className="uk-svg" src="/assets/twitter.svg" uk-svg="" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
