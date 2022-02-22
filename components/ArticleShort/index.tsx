import { FC } from "react"
import Link from "next/link"
import Image from "../Image"
import Label from "../Label"
import LabelProps from "../../interfaces/label"

const APP_API = process.env.APP_API

interface ArticleShortProps {
  link: string,
  image: string,
  label?: LabelProps | LabelProps[],
  title: string
  horizontal?: boolean,
  text?: string,
  sticky?: string
}

const ArticleShort: FC<ArticleShortProps> = ({
  link,
  image,
  title,
  text = '',
  label = undefined,
  horizontal = false,
  sticky = ''
}) => {
  
  const className = ['article-short']

  if(horizontal) className.push('horizontal')
  if(sticky) className.push('sticky-'+sticky)
  if(text) className.push('big')

  return (
    <Link href={link}>
      <a className={className.join(' ')}>
        <div className="img-wrap">
          {typeof image === 'object' ? <Image image={image} /> : <Image url={image} />}
        </div>
        {/* @ts-ignore */}
        {/* {typeof image === 'object' ? <div className="img-wrap-back" style={{backgroundImage: `url(${APP_API+image?.attributes?.url})`}}></div> : <div className="img-wrap-back" style={{backgroundImage: image}}></div>} */}
        <div className="info-wrap">
          <div>
            {text && <h2><span>{title}</span></h2>}
            {!text && <h3><span>{title}</span></h3>}
            {!!label && !Array.isArray(label) && <Label data={label}/>}
            {!!label && Array.isArray(label) && label.map((item, idx) => <Label key={idx} data={item}/>)}
            {!!text.length && <div className="article-short-content" dangerouslySetInnerHTML={{__html: text}}></div>}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ArticleShort