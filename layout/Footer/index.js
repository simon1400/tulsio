import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Footer = () => {

  return (
    <footer>
      {/*<div className="footer-top"></div>*/}
      <div className="footer-bottom">
        <div className="uk-container">
          <div className="footer-bottom-wrap">
            <div className="logo">
              <img className="uk-svg" src="/assets/logo.svg" uk-svg="" />
            </div>
            <nav className="menu">
              <ul>
                <li><Link href="/"><a>Obchodní podmínky</a></Link></li>
                <li><Link href="/"><a>Ochrana osobních údajů</a></Link></li>
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
