import { FC, useContext } from "react"
import { DataStateContext } from "../../context/dataStateContext"
import Link from 'next/link'

interface BreadcrumbProps {
  posAbsolute?: boolean
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  posAbsolute
}) => {

  const { state } = useContext(DataStateContext)

  const className = ['breadcrumb']
  if(posAbsolute) className.push('uk-position-absolute')
  
  return(
    <div className={className.join(' ')}>
      <ul>
        <li><Link href="/"><a>Tulsio</a></Link><img src="/assets/angle-right.svg" uk-svg="" /></li>
        {state.breadcrumbs.map((item, index) => <li key={index}>
          {state.breadcrumbs.length !== index+1 ? <Link href={`/${item.link}`}><a>{item.title}</a></Link> : <span>{item.title}</span>}
          {state.breadcrumbs.length !== index+1 && <img src="/assets/angle-right.svg" uk-svg="" />}
        </li>)}
      </ul>
    </div>
  )
}

export default Breadcrumb