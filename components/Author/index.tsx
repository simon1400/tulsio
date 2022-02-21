import { FC } from "react"
import formatDatePublic from '../../helpers/formatDate'

interface AuthorInterface {
  name: string
  description: string
  publishDate: string
}

const Author: FC<AuthorInterface> = ({
  name,
  description,
  publishDate
}) => {
  return(
    <div className="author-block">
      <div className="author">
        <div className="img-author">
          <img className="uk-img" src="/assets/top.jpeg" uk-img="" />
        </div>
        <div className="name-author">
          <h5>{name}</h5>
          <span>{description}</span>
        </div>
      </div>
      <div className="post-date">
        <span>Publikováno {formatDatePublic(publishDate)}</span>
      </div>
    </div>
  )
}

export default Author