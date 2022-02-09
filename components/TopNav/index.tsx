import { useRouter } from "next/router"
import { connectHits } from "react-instantsearch-core";
import Link from 'next/link'
import { FC } from "react";

interface NavItemProps {
  id: string
  title: string
  link: string
}

interface TopNavProps {
  hits: NavItemProps[]
  mobile?: boolean
  menu?: boolean
}

const TopNav: FC<TopNavProps> = ({hits, mobile, menu}) => {

  const router = useRouter()

  const className = ['menu']

  if(mobile) className.push('menu-responsive', 'uk-hidden@m') 
  else className.push('uk-visible@m')

  if(menu) className.push('active')

  return (
    <nav className={className.join(' ')}>
      <ul>
        {hits.map(item => <li key={item.id}>
          <Link href={item.link}>
            <a className={item.link === router.asPath ? 'active' : ''}>{item.title}</a>
          </Link>
        </li>)}
      </ul>
    </nav>
  )
}

export default connectHits(TopNav)