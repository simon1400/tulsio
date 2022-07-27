import { useContext, useEffect } from "react"
import { connectMenu } from "react-instantsearch-core";
import { useRouter } from "next/router";
import { DataStateContext } from '../../context/dataStateContext'
import Link from 'next/link'
import slugify from 'slugify'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import axios from "axios";
import qs from 'qs'

const query = (slug: string) => qs.stringify({
  filters: {
    slug: {
      $eq: slug,
    },
  },
  populate: {
    meta: {
      fields: ['title', 'description'],
    },
  },
})


interface SubMenuItemProps {
  id: string
  label: string
  isRefined: boolean
  value: string,
}

const SubMenu = ({
  items,
  refine,
  currentRefinement,
  setTitle,
  setDescription
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

  const handleMeta = () => {
    const breadcrumbs = [
      {
        title: 'Blog',
        link: 'blog'
      }
    ]
    
    if(currentRefinement) {
      axios.get(`https://admin.tulsio.cz/api/categories?${query(slugify(currentRefinement, {lower: true}))}`).then(resData => {
          const resMeta = {...resData.data.data[0].attributes.meta}
          if(!resMeta.image) {
            resMeta.image = {
              data: null
            }
          }
          setTitle(resMeta.title)
          setDescription(resMeta.description)
        }).catch(err => console.log('error', err))

      breadcrumbs.push({
        title: currentRefinement,
        link: ''
      })
    }else if(!currentRefinement){
      setTitle('Blog')
      setDescription('')
    }

    dispatch({ state: breadcrumbs, type: 'breadcrumbs' })
  }

  useEffect(() => {
    handleMeta()
  }, [currentRefinement])
  
  return (
    <div className="sub-menu">
      <ScrollMenu separatorClassName="separator-scrol" scrollContainerClassName="scroll-container" wrapperClassName="wrap-sub-menu">
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


const El = ({text, link, itemId, active}) => {
  return (
    <div className={`menu-item${active ? ' active' : ''}`}>
      <Link href={link} shallow>
        <a>{text}</a>
      </Link>
    </div>
  )
}

export default connectMenu(SubMenu)