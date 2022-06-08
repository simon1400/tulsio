import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, isSearchStalled, refine, searchInput }) => {

  const clear = (e) => {
    e.preventDefault()
    refine('')
  }

  return (
    <form className="search-box" noValidate action="" role="search">
      <input
        type="text"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        ref={searchInput}
        placeholder="Napište dotaz…"
      />
      {!!currentRefinement.length ? <button onClick={(e) => clear(e)}>
        <img src="/assets/times.svg" uk-svg="" alt="remove search" />
      </button> : <img className="search-icon" src="/assets/search.svg" uk-svg="" alt="search icon" />}
      {isSearchStalled ? 'My search is stalled' : ''}
    </form>
  )
};

export default connectSearchBox(SearchBox);
