import Link from "next/link"
import { FC, useEffect, useState } from "react"
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import alphabets from "../../data/alphabets"
import { connectHits } from "react-instantsearch-core";
import numbers from "../../data/numbers";

const DictionaryHead = ({
  title,
  hits
}) => {

  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    if(hits.length) {
      const result = []
      alphabets.map(symbol => {
        const filtered = hits.filter(f => f.title.toUpperCase().startsWith(symbol))
        if(filtered.length) {
          result.push(symbol)
        }
      })
      for(var i = 0; i < numbers.length; i++) {
        const filtered = hits.filter(f => f.title.startsWith(numbers[i]))
        if(filtered.length) {
          result.push('0-9')
          break;
        }
      }
      setFiltered(result)
    }
  }, [hits])
  
  return (
    <section className="category-top">
      <div className="uk-container uk-container-large">
        <div className="category-top-wrap">
          {/* <Breadcrumb posAbsolute /> */}
          <h1>{title}</h1>
          <div className="sub-menu">
            <ScrollMenu separatorClassName="separator-scrol" scrollContainerClassName="scroll-container" wrapperClassName="wrap-sub-menu">
              {filtered.map((item, index) => <div key={index} className="menu-item">
                <Link href={'#'+item} shallow>
                  <a>{item}</a>
                </Link>
              </div>)}
            </ScrollMenu>
          </div>
        </div>
      </div>
    </section>
  )
}

export default connectHits(DictionaryHead)