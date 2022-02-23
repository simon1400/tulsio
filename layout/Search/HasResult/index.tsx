import { connectStateResults } from 'react-instantsearch-dom';
import Button from '../../../components/Button';

const HasResult = ({ searchState, allSearchResults }) => {

  const hasResults = allSearchResults && (allSearchResults.articles.nbHits !== 0 || allSearchResults.categories.nbHits !== 0);
  
  return (
    <div className="has-result-wrap">
      {!hasResults && <div className="not-result-search">
        <div className="img-wrap">
          <img src="/assets/frown.svg" uk-svg="" />
        </div>
        <div>
          <p>Je nám líto, ale Vašemu požadavku neodpovídá žádný záznam.</p>
        </div>
      </div>}
      {/* {hasResults && !!searchState.query?.length && <div className="button-wrap">
        <Button link={`/search?q=${searchState.query}`} text="Zobrazit všechny výsledky" white full />
      </div>} */}
    </div>
  )
}

export default connectStateResults(HasResult)
