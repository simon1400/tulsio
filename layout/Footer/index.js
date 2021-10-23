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
              <img className="uk-svg" src="/assets/logo-tulsio.svg" uk-svg="" />
            </div>
            <nav className="menu">
              <ul>
                <li className="title">About Us</li>
                <li><Link href="/"><a>Jsme Tulsio poradce pro nákup CBD....</a></Link></li>
                <li><Link href="/"><a>CBD....</a></Link></li>
                <li><Link href="/"><a>Kontakt - Tofu Lover</a></Link></li>
                <li><Link href="/"><a>APodmínky užívání,</a></Link></li>
                <li><Link href="/"><a>APodmínky nakládání s údaji</a></Link></li>
              </ul>
            </nav>
            <nav className="menu">
              <ul>
                <li className="title">Marketing</li>
                <li><Link href="/"><a> B2B - Bannerové pozice</a></Link></li>
                <li><Link href="/"><a>PR článek</a></Link></li>
                <li><Link href="/"><a>Srovnávač - stay tuned</a></Link></li>
              </ul>
            </nav>
            <nav className="menu">
            <ul>
                <li className="title">About Us</li>
                <li><Link href="/"><a>Jsme Tulsio poradce pro nákup CBD....</a></Link></li>
                <li><Link href="/"><a>CBD....</a></Link></li>
                <li><Link href="/"><a>Kontakt - Tofu Lover</a></Link></li>
                <li><Link href="/"><a>APodmínky užívání,</a></Link></li>
                <li><Link href="/"><a>APodmínky nakládání s údaji</a></Link></li>
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
