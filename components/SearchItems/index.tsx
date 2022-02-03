import { FC } from "react";
import { connectHits } from "react-instantsearch-core";
import ISearchItem from "../../interfaces/searchItem";
import CanvasItem from '../CanvasItem'

interface SearchItems {
  hits: ISearchItem[]
}

const SearchItems: FC<SearchItems> = ({ hits }) => {

  return (
    <div>
      {hits.map((hit, index) => (
        <CanvasItem key={index} data={hit} />
      ))}
      {/* {!!data.categories?.length && <div className="result-block">
              <h4>Kategorie</h4>
              {data.categories.map((item, index) => <CanvasItem key={index} data={item} />)}
            </div>}
            {!!data.brands?.length && <div className="result-block">
              <h4>Značky</h4>
              {data.brands.map((item, index) => <CanvasItem key={index} data={item} />)}
            </div>}
            {!!data.produkties?.length && <div className="result-block">
              <h4>Produkty</h4>
              {data.produkties.map((item, index) => <CanvasItem key={index} data={item} />)}
            </div>}
            {!!data.blogs?.length && <div className="result-block">
              <h4>Články</h4>
              {data.blogs.map((item, index) => <CanvasItem key={index} data={item} />)}
            </div>} */}
    </div>
  );
}

export default connectHits(SearchItems);