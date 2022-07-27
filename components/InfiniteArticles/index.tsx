import ArticleShort from "../ArticleShort"
import { connectInfiniteHits } from "react-instantsearch-core";

const InfiniteArticle = ({
  hits
}) => {
  
  return (
    <section>
      <div className="uk-container">
        <div className="cat-grid">
          {!!hits.length && hits.map((item, index) => <ArticleShort 
            key={index}
            title={item?.title}
            alt={item?.alternativeText}
            link={`/blog/${item.slug}`}
            image={item?.image}
            label={item.titleLabels[0] ? {
              title: item.titleLabels[0],
              slug: item.slugLabels[0],
              color: item.colorLabels[0]
            } : undefined}
          />)}
        </div>
      </div>
    </section>
  )
}

export default connectInfiniteHits(InfiniteArticle)