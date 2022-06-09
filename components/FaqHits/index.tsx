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
        <ul uk-accordion="collapsible: true; multiple: true;">
          {hits.map((item, index) => <li key={index}>
              <a className="uk-accordion-title" href="#">
                <Highlight hit={item} attribute="question" />
              </a>
              <div className="uk-accordion-content">
                <div className="content" dangerouslySetInnerHTML={{__html: item.answer}} />
              </div>
          </li>)}
        </ul>
        {!hits.length && <div className="has-result-wrap">
           <div className="not-result-search">
            <div className="img-wrap">
              <img src="/assets/frown.svg" uk-svg="" />
            </div>
            <div>
              <p>Je nám líto, ale Vašemu požadavku neodpovídá žádný záznam.</p>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default connectHits(FaqHits)