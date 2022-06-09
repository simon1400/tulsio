import { useEffect, useState } from "react";
import { connectHits } from "react-instantsearch-core";
import alphabets from "../../data/alphabets";
import colors from "../../data/colors";
import numbers from "../../data/numbers";

const APP_API = process.env.APP_API

const DictionaryHits = ({
  hits
}) => {

  const [filtered, setFiltered] = useState({})

  useEffect(() => {
    if(hits.length) {
      const result = {}
      alphabets.map(symbol => {
        const filtered = hits.filter(f => f.title.toUpperCase().startsWith(symbol))
        if(filtered.length) {
          result[symbol] = filtered
        }
      })
      numbers.map(number => {
        const filtered = hits.filter(f => f.title.startsWith(number))
        if(filtered.length) {
          result['0-9'] = filtered
        }
      })
      setFiltered(result)
    }
  }, [hits])
  
  
  return (
    <div className="uk-container">
      {Object.keys(filtered).map((key, index) => <div key={index} className="alphabet-wrap">
        <h2 id={key} style={{color: colors[index]}}>{key}</h2>
        <div className="uk-child-width-1-2@s uk-grid-medium uk-child-width-1-3@m" uk-grid="masonry: true">
          {filtered[key].map((item, indexChild) => <div key={indexChild}>
            <div className="box">
              {item.image && <img src={APP_API+item.image} />}
              <h3>{item.title}</h3>
              <div dangerouslySetInnerHTML={{__html: item.content}} />
              {item.textLink && item.link && <a href={item.link}>{item.textLink}</a>}
            </div>
          </div>)}
        </div>
      </div>)}
    </div>
  )
}

export default connectHits(DictionaryHits)