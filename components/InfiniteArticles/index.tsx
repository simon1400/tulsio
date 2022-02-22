import ArticleShort from "../ArticleShort"
import { connectInfiniteHits } from "react-instantsearch-core";

const InfiniteArticle = ({
  hits
}) => {
  
  return (
    <section>
      <div className="uk-container uk-container-small">
        {!!hits.length && <ArticleShort
          title={hits[0].title}
          link={`/blog/${hits[0].slug}`}
          image={hits[0].image}
          label={hits.length && hits[0].titleLabels.map((item, index) => ({
            title: item,
            slug: hits[0].slugLabels[index],
            color: hits[0].colorLabels[index],
          }))}
          text={hits[0].perex}
        />}
      </div>
      <div className="uk-container">
        <div className="cat-grid">
          {!!hits.length && hits.splice(1).map((item, index) => <ArticleShort 
            key={index}
            title={item?.title}
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