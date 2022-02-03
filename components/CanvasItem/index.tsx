import Link from 'next/link'
import { FC } from 'react'
import ISearchItem from '../../interfaces/searchItem'
import Highlight from '../Highlight'

interface SearchItemProps {
  data: ISearchItem
}

const SearchItem: FC<SearchItemProps> = ({data}) => {
  
  // const [slug, setSlug] = useState('')

  // const { dataContextState, dataContextDispatch } = useContext(DataStateContext)

  // const deleteItem = (e, index) => {
  //   e.preventDefault()
  //   let newCanvasItems = [...dataContextState.basket]
  //   newCanvasItems.splice(index, 1)
  //   dataContextDispatch({ state: newCanvasItems, type: 'basket' })
  // }

  return (
    <Link href="/">
      <a className="canvas-item">
        <div className="canvas-item-content">
          {/* <h5>{data.title}</h5> */}
          <Highlight hit={data} attribute="title" />
          <br />
          <br />
          <Highlight hit={data} attribute="perex" content />
          {/* <div dangerouslySetInnerHTML={{__html: <Highlight hit={data} attribute="perex" content />}}></div> */}
        </div>
        <br />
        <br />
        <br />
      </a>
    </Link>
  )
}

export default SearchItem
