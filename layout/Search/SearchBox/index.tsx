import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {

  const clear = (e) => {
    e.preventDefault()
    refine('')
  }

  return (
    <form className="search-box" noValidate action="" role="search">
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
      {!!currentRefinement.length && <button onClick={(e) => clear(e)}>
        <img src="/assets/times.svg" uk-svg="" />
      </button>}
      {isSearchStalled ? 'My search is stalled' : ''}
    </form>
  )
};

export default connectSearchBox(SearchBox);
