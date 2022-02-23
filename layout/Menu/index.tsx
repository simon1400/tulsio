import router from "next/router"
import Link from "next/link"
import { TopNavProps } from "../../interfaces/nav"
import { FC } from "react"
import { connectHits } from "react-instantsearch-core";
import closeCanvas from "../../helpers/closeCanvas";

const Menu: FC<TopNavProps> = ({ hits }) => {

  return (
    <div id="responsive-nav" className="uk-offcanvas canvas" uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar">
        <div className="canvas-head">
          <h3></h3>
          <a href="/" onClick={e => closeCanvas(e, '#responsive-nav')}>
            <img className="uk-svg" src="/assets/times.svg" uk-svg="" />
          </a>
        </div>
        <nav className="menu-responsive">
          <ul>
            {hits.reverse().map(item => <li key={item.id}>
              <Link href={item.link}>
                <a className={item.link === router.asPath ? 'active' : ''}>{item.title}</a>
              </Link>
            </li>)}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default connectHits(Menu)