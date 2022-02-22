import {
  InstantSearch,
  Index,
  Configure
} from "react-instantsearch-dom";
import { searchClient } from "../../lib/typesenseAdapter";
import SearchItems from './SearchItems'
import SearchBox from './SearchBox';
import HasResult from './HasResult';
import {util} from 'uikit'

import closeCanvas from "../../helpers/closeCanvas";
import { useEffect, useRef } from "react";

const Search = () => {

  const searchInput = useRef(null)

  // useEffect(() => {
  //   if(searchInput.current){
  //     util.on(document, 'shown', "#search", () => {
  //       searchInput.current.focus()
  //     })
  //   }
  // }, [searchInput])

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

          {/* <SearchBox searchInput={searchInput} /> */}

          <Index indexName="categories">
            <Configure hitsPerPage={5} />
            <SearchItems title="Kategorie" />
          </Index>

          <Index indexName="articles">
            <Configure hitsPerPage={5}/>
            <SearchItems title="Članky" />
          </Index>

          <HasResult />

        </InstantSearch>
      </div>
    </div>
  )
}

export default Search
