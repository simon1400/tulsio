import {useEffect, useState} from 'react'
import Link from 'next/link'
import AxiosAPI from '../../restClient'

const Header = () => {

  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await AxiosAPI.get('/navigace-nova')
    setMenuItems(res.data.item)
  }

  return (
    <header>
      <div className="uk-container">
        <div className="header-wrap">
          <div className="logo">
            <Link href="/">
              <a><img className="uk-svg" src="/assets/logo.svg" uk-svg="" alt="Tulsio" /></a>
            </Link>
          </div>
          <nav className="menu">
            <ul>
              {!!menuItems.length && menuItems.map((item, index) => <li key={index}><Link href={item.link}><a>{item.text}</a></Link></li>)}
            </ul>
          </nav>
          <div className="control">
            <div className="lang">
              <span>Čeština</span>
              <img className="uk-svg" src="/assets/down.svg" uk-svg="" />
            </div>
            <div className="search">
              <img className="uk-svg" src="/assets/search.svg" uk-svg="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
