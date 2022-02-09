import { FC } from "react"
import { searchClient } from "../../lib/typesenseAdapter"
import Breadcrumb from "../Breadcrumb"
import SubMenu from "../SubMenu"
import {InstantSearch} from "react-instantsearch-dom";
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
          <InstantSearch indexName="categories" searchClient={searchClient}>
            <SubMenu />
          </InstantSearch>
        </div>
      </div>
    </section>
  )
}

export default PageHead