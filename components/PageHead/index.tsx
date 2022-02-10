import { FC } from "react"
import Breadcrumb from "../Breadcrumb"
import SubMenu from "../SubMenu"

interface PageHeadProps {
  title: string
}

const PageHead: FC<PageHeadProps> = ({
  title
}) => {
  return (
    <section className="category-top">
      <div className="uk-container uk-container-large">
        <div className="category-top-wrap">
          <Breadcrumb posAbsolute />
          <h1>{title}</h1>
          <SubMenu attribute='category' />
        </div>
      </div>
    </section>
  )
}

export default PageHead