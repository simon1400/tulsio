import { FC, useContext, useEffect, useState } from "react"
import { connectMenu } from "react-instantsearch-core";
import { useRouter } from "next/router";
import { DataStateContext } from '../../context/dataStateContext'
import Link from 'next/link'
import slugify from 'slugify'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


const El = ({text, link, itemId, active}) => {
  return (
    <div className={`menu-item${active ? ' active' : ''}`}>
      <Link href={link} shallow>
        <a>{text}</a>
      </Link>
    </div>
  )
}
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

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

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
    if(router.query.category === 'blog') {
      refine(null)
    }
  }, [items.length, router])

  useEffect(() => {
    const state = [
      {
        title: 'Blog',
        link: 'blog'
      }
    ]
    
    if(currentRefinement) {
      dispatch({ state: slugify(currentRefinement, {lower: true}), type: 'slug'})
      state.push({
        title: currentRefinement,
        link: ''
      })
    }else{
      dispatch({ state: 'blog', type: 'slug'})
    }
    dispatch({ state: state, type: 'breadcrumbs' })
  }, [currentRefinement])

  
  
  
  return (
    <div className="sub-menu">
      <ScrollMenu scrollContainerClassName="scroll-container" wrapperClassName="wrap-sub-menu">
        <El text="Všechny" link="/blog" itemId={0} active={currentRefinement === null} />
        {items.map((item, index) => <El 
          key={index} 
          text={item.label} 
          link={slugify(item.value, {lower: true})} 
          itemId={index+1} 
          active={item.isRefined} />)}
      </ScrollMenu>
    </div>
  )
}

export default connectMenu(SubMenu)