import { FC } from "react"
import Link from "next/link"
import Image from "../Image"
import Label from "../Label"

interface ArticleShortProps {
  link: string,
  image: string,
  label?: string,
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
  label = '',
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
          <Image image={image} />
        </div>
        <div className="info-wrap">
          <div>
            <h2><span>{title}</span></h2>
            {!!label.length && <Label text={label}/>}
            {!!text.length && <div className="article-short-content" dangerouslySetInnerHTML={{__html: text}}></div>}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ArticleShort