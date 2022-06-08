import { connectHits } from "react-instantsearch-core";
import SearchBox from "../../layout/Search/SearchBox";
import Highlight from "../Highlight";

const FaqHits = ({
  hits
}) => {
  
  return (
    <div className="uk-container uk-container-small">
      <div className="block margin-top-reverse">
        <SearchBox />
        <ul uk-accordion="collapsible: false">
          {hits.map((item, index) => <li key={index}>
              <a className="uk-accordion-title" href="#">
                <Highlight hit={item} attribute="question" />
              </a>
              <div className="uk-accordion-content">
                <div dangerouslySetInnerHTML={{__html: item.answer}} />
              </div>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default connectHits(FaqHits)