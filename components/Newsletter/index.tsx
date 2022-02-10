import { FC } from "react"

interface NewsletterProps {
  title: string
  link: string
  text: string
}

const Newsletter: FC<NewsletterProps> = ({
  title,
  link,
  text,
}) => {
  return(
    <div className="footer-top">
      <div className="uk-container uk-container-large">
        <div className="newsleter">
          <div className="title">
            <h2>{title}</h2>
            <a href={link} className="button">{text}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter