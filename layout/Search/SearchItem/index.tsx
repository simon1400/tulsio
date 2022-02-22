import Link from 'next/link'
import { FC } from 'react'
import ISearchItem from '../../../interfaces/searchItem'
// import Highlight from '../Highlight'

interface SearchItemProps {
  data: ISearchItem
}

const SearchItem: FC<SearchItemProps> = ({data}) => {

  let slug = '/'+data.slug

  if(data.category?.length) {
    slug = `/blog/${data.slug}`
  }

  return (
    <Link href={slug}>
      <a className={`result-item${!data.image ? ' without-img' : ''}`}>
        <div className="content">
          {/* {!!data.image && <div className="img-wrap">
            <img src={data.image} alt="" />
          </div>} */}
          <h5>{data.title}</h5>
        </div>
        {!!data.price && <div className="additional">
          <span>od 132 kc</span>
        </div>}
      </a>
    </Link>
  )
}

export default SearchItem
