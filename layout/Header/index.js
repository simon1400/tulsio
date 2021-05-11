import Link from 'next/link'

const Header = () => {

  return (
    <header>
      <div className="uk-container">
        <div className="header-wrap">
          <div className="logo">
            <Link href="/">
              <a>
                <img className="uk-svg" src="/assets/logo.svg" uk-svg="" />
              </a>
            </Link>
          </div>
          <nav className="menu">
            <ul>
              <li><Link href="/"><a>Recenze</a></Link></li>
              <li><Link href="/"><a>Blog</a></Link></li>
              <li><Link href="/"><a>Poradce</a></Link></li>
              <li><Link href="/"><a>FAQ</a></Link></li>
              <li><Link href="/"><a>O nás</a></Link></li>
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
