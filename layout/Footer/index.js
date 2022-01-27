// import {useState, useEffect} from 'react'
// import { useRouter } from 'next/router'
import Link from 'next/link'
import globalQuery from '../../queries/global'
import { useQuery } from '@apollo/client'
import Image from '../../components/image'
import navFooter from '../../queries/navFooter'

const Footer = () => {

  const {loading, data} = useQuery(globalQuery)

  const { loading: navLoad, data: navData } = useQuery(navFooter);

  if(loading || navLoad) {
    return ''
  }

  const nav = navData.navigation.data.attributes
  const newsletter = data.global.data.attributes.newsletter

  return (
    <footer>
      <div className="footer-top">
        <div className="uk-container uk-container-large">
          <div className="newsleter">
            <div className="title">
              <h2>{newsletter.title}</h2>
              <a href={newsletter.cta.link} className="button">{newsletter.cta.text}</a>
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
            {!!nav.footerNav_1 && <nav className="menu">
              <ul>
                <li className="title">{nav.footerNav_1.title}</li>
                {nav.footerNav_1.item.map((item, index) => <li key={index}>
                  <Link href={item.link}><a>{item.name}</a></Link>
                </li>)}
              </ul>
            </nav>}
            {!!nav.footerNav_2 && <nav className="menu">
              <ul>
                <li className="title">{nav.footerNav_2.title}</li>
                {nav.footerNav_2.item.map((item, index) => <li key={index}>
                  <Link href={item.link}><a>{item.name}</a></Link>
                </li>)}
              </ul>
            </nav>}
            {!!nav.footerNav_3 && <nav className="menu">
              <ul>
                <li className="title">{nav.footerNav_3.title}</li>
                {nav.footerNav_3.item.map((item, index) => <li key={index}>
                  <Link href={item.link}><a>{item.name}</a></Link>
                </li>)}
              </ul>
            </nav>}
            {!!nav.socNav.item.length && <div className="social">
              <ul>
                {nav.socNav.item.map((item, index) => <li key={index}>
                  <a href={item.link}>
                    <Image image={item.icon.data} svg />
                  </a>
                </li>)}
              </ul>
            </div>}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
