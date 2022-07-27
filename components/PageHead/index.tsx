import { Dispatch, FC, SetStateAction } from "react"
import Breadcrumb from "../Breadcrumb"
import SubMenu from "../SubMenu"

interface PageHeadProps {
  title: string
  category?: boolean;
  setTitle?: Dispatch<SetStateAction<string>>,
  setDescription?: Dispatch<SetStateAction<string>>
}

const PageHead: FC<PageHeadProps> = ({
  title,
  category,
  setTitle,
  setDescription
}) => {
  return (
    <section className="category-top">
      <div className="uk-container uk-container-large">
        <div className="category-top-wrap">
          <Breadcrumb posAbsolute />
          <h1>{title}</h1>
          {category && <SubMenu attribute='category' setTitle={setTitle} setDescription={setDescription} />}
        </div>
      </div>
    </section>
  )
}

export default PageHead