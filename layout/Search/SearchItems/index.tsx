import { FC } from "react";
import { connectHits } from "react-instantsearch-core";
import ISearchItem from "../../../interfaces/searchItem";
import SearchItem from '../SearchItem'

interface SearchItems {
  hits: ISearchItem[]
  title: string
}

const SearchItems: FC<SearchItems> = ({ title, hits }) => {

  if(!hits.length) {
    return <></>
  }

  return (
    <div className="result-block">
      <h4>{title}</h4>
      {hits.map((hit, index) => (
        <SearchItem key={index} data={hit} />
      ))}
    </div>
  );
}

export default connectHits(SearchItems);