import { offcanvas, util } from 'uikit'

import {
  InstantSearch
} from "react-instantsearch-dom";
import { searchClient } from "../../lib/typesenseAdapter";
import "instantsearch.css/themes/satellite.css";
import SearchItems from '../../components/SearchItems'
import SearchBox from './SearchBox';

const Search = () => {

  // const searchInput = useRef(null)

  const closeCanvas = (e) => {
    e.preventDefault()
    offcanvas(util.find('#search')).hide();
  }

  // useEffect(() => {
  //   util.on('#search', 'beforeshow', () => searchInput.current.focus());
  // })

  return (
    <div id="search" className="uk-offcanvas" uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar">
        <div className="canvas-head uk-flex uk-flex-between">
          <h3>Vyhledávání</h3>
          <a href="/" onClick={e => closeCanvas(e)}>
            <img className="uk-svg" src="/assets/times.svg" uk-svg="" />
          </a>
        </div>
        <hr />
        <InstantSearch indexName="articles" searchClient={searchClient}>
          <div className="input-search-wrap">
            <SearchBox />
            {/* <img className="uk-svg" src="/assets/search.svg" uk-svg="" />
            <input onChange={e => handleSearch(e.target.value)} ref={searchInput} value={searchValue} className="uk-input" type="text" /> */}
          </div>
          {/* {!data && !!searchValue.length && 'Nic jsme nenašli, zkuste jiné slovo.'}
          {!data && !searchValue.length && 'Zadejte hledaný text.'}
          {loading && 'Loading...'} */}
          <div className="results">
            <SearchItems />
          </div>
        </InstantSearch>
      </div>
    </div>
  )
}

export default Search
