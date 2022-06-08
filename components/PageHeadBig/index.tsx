import { FC } from "react"

interface PageHeadBigProps {
  title: string
}

const PageHeadBig: FC<PageHeadBigProps> = ({
  title
}) => {
  return (
    <section className="page-top">
      <div className="uk-container uk-container-large">
        <div className="page-top-wrap">
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default PageHeadBig