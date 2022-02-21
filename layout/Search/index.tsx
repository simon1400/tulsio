import {
  InstantSearch,
  Index
} from "react-instantsearch-dom";
import { searchClient } from "../../lib/typesenseAdapter";
import "instantsearch.css/themes/satellite.css";
import SearchItems from './SearchItems'
import SearchBox from './SearchBox';
import HasResult from './HasResult';

import closeCanvas from "../../helpers/closeCanvas";

const Search = () => {

  // const searchInput = useRef(null)

  

  // useEffect(() => {
  //   util.on('#search', 'beforeshow', () => searchInput.current.focus());
  // })

  return (
    <div id="search" className="uk-offcanvas canvas" uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar">
        <div className="canvas-head">
          <h3>Hledat</h3>
          <a href="/" onClick={e => closeCanvas(e, '#search')}>
            <img className="uk-svg" src="/assets/times.svg" uk-svg="" />
          </a>
        </div>
        <InstantSearch indexName="articles" searchClient={searchClient}>

          <SearchBox />

          <Index indexName="categories">
            <SearchItems title="Kategorie" />
          </Index>

          <Index indexName="articles">
            <SearchItems title="Clanky" />
          </Index>

          <HasResult />

        </InstantSearch>
      </div>
    </div>
  )
}

export default Search
