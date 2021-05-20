import {useEffect, useState} from 'react'
import Link from 'next/link'
import AxiosAPI from '../../restClient'
import {useRouter} from 'next/router'

const Header = () => {

  const router = useRouter()

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
              {!!menuItems.length && menuItems.map((item, index) => <li key={index}><a className={item.link === router.asPath ? 'active' : ''} href={item.link}>{item.text}</a></li>)}
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
