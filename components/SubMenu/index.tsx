import { FC } from "react"
import { connectHits } from "react-instantsearch-core";
import Link from 'next/link'
import { useRouter } from "next/router";

interface SubMenuItemProps {
  id: string
  title: string
  slug: string
}

interface SubMenuProps {
  hits: SubMenuItemProps[]
}

const SubMenu: FC<SubMenuProps> = ({hits}) => {

  const router = useRouter()
  return (
    <div className="sub-menu">
      <nav>
        <ul>
          <li className={router.query.category === 'blog' ? 'active' : ''}><Link href="/blog"><a>Vsechni produkty</a></Link></li>
          {hits.map(item => <li key={item.id} className={router.query.category === item.slug ? 'active' : ''}><Link href={`/${item.slug}`} shallow><a>{item.title}</a></Link></li>)}
          {/* <li className="active"><Link href=""><a>Vsechni produkty</a></Link></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default connectHits(SubMenu)