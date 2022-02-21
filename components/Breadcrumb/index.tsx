import { FC, useContext } from "react"
import { DataStateContext } from "../../context/dataStateContext"
import Link from 'next/link'

interface BreadcrumbProps {
  posAbsolute?: boolean
  article?: boolean
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  posAbsolute = false,
  article = false
}) => {

  const { state } = useContext(DataStateContext)

  const className = ['breadcrumb']
  if(posAbsolute) className.push('uk-position-absolute')
  if(article) className.push('bread-article')
  
  return(
    <div className={className.join(' ')}>
      <ul>
        <li className="uk-visible@s"><Link href="/"><a>Tulsio</a></Link><img src="/assets/angle-right.svg" uk-svg="" /></li>
        {state.breadcrumbs.map((item, index) => <li key={index} className={article && (!index || index === (state.breadcrumbs.length - 1)) ? 'uk-visible@s': ''}>
          {state.breadcrumbs.length !== index+1 ? <Link href={`/${item.link}`}><a>{item.title}</a></Link> : <span>{item.title}</span>}
          {state.breadcrumbs.length !== index+1 && <img src="/assets/angle-right.svg" uk-svg="" />}
        </li>)}
      </ul>
    </div>
  )
}

export default Breadcrumb