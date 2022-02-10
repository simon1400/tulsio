import { FC, useContext, useEffect } from "react"
import { connectMenu } from "react-instantsearch-core";
import { useRouter } from "next/router";
import { DataStateContext } from '../../context/dataStateContext'
import Link from 'next/link'
import slugify from 'slugify'

interface SubMenuItemProps {
  id: string
  label: string
  isRefined: boolean
  value: string,
}

interface SubMenuProps {
  items: SubMenuItemProps[]
  refine: (value) => void
  currentRefinement: string,
  createURL: (value) => string
}

const SubMenu = ({
  items,
  refine,
  currentRefinement,
}) => {

  const router = useRouter()

  const { dispatch } = useContext(DataStateContext)

  useEffect(() => {
    if(items.length && router.query.category !== 'blog'){
      items.map(item => {
        if(slugify(item.value, {lower: true}) === router.query.category){
          refine(item.value)
        }
      })
    }
  }, [items.length, router])

  useEffect(() => {
    const state = [
      {
        title: 'Blog',
        slug: 'blog'
      }
    ]
    if(currentRefinement) {
      state.push({
        title: currentRefinement,
        slug: ''
      })
    }
    dispatch({ state: state, type: 'breadcrumbs' })
  }, [currentRefinement])
  
  
  return (
    <div className="sub-menu">
      <nav>
        <ul>
          <li className={currentRefinement === null ? 'active' : ''}>
            <Link href="/blog" shallow>
              <a onClick={() => refine('')}>
                Vsechni produkty
              </a>
            </Link>
          </li>
          {items.map((item, index) => <li key={index} className={item.isRefined ? 'active' : ''}>
            <Link href={slugify(item.value, {lower: true})} shallow>
              <a  onClick={() => refine(item.value)}>
                {item.label}
              </a>
            </Link>
          </li>)}
        </ul>
      </nav>
    </div>
  )
}

export default connectMenu(SubMenu)